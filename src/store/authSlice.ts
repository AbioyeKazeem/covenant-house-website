import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  adminUsers: User[];
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  adminUsers: [],
};

interface LoginResponse {
  user: User;
  token: string;
}

interface ApiError {
  message: string;
}

const api = axios.create({
  baseURL: "https://api.covenanthouserccg.org/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Helper function to handle Axios errors
function handleApiError(error: unknown): string {
  if (isAxiosError(error)) {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      return "Session expired. Please login again.";
    }
    return error.response?.data?.message || error.message;
  }
  return "An unexpected error occurred";
}

function isAxiosError(error: unknown): error is AxiosError<ApiError> {
  return (error as AxiosError).isAxiosError !== undefined;
}

export const login = createAsyncThunk<
  { user: User; token: string },
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await api.post<LoginResponse>("/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    return { user: response.data.user, token: response.data.token };
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

export const signup = createAsyncThunk<
  User,
  { name: string; email: string; password: string },
  { rejectValue: string }
>("auth/signup", async ({ name, email, password }, { rejectWithValue }) => {
  try {
    const response = await api.post<User>("/signup", { name, email, password });
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.post("/logout");
      localStorage.removeItem("token");
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

interface AdminUsersResponse {
  users: User[];
}

export const fetchAdminUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>("auth/fetchAdminUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<AdminUsersResponse>("/admin-users");
    return response.data.users;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

export const updateAdminUser = createAsyncThunk<
  User,
  { id: number; name: string; email: string },
  { rejectValue: string }
>("auth/updateAdminUser", async ({ id, name, email }, { rejectWithValue }) => {
  try {
    const response = await api.put<User>(`/admin-users/${id}`, { name, email });
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

export const deleteAdminUser = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("auth/deleteAdminUser", async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/admin-users/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

export const addAdminUser = createAsyncThunk<
  User,
  { name: string; email: string; password: string },
  { rejectValue: string }
>(
  "auth/addAdminUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await api.post<User>("/admin-users", {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initializeAuth: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.isAuthenticated = true;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Login cases
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Login failed";
      state.isAuthenticated = false;
    });

    // Signup cases
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Signup failed";
    });

    // Logout cases
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.adminUsers = [];
    });
    builder.addCase(logout.rejected, (state, action) => {
      console.error("Logout failed:", action.payload);
    });

    // Admin users cases
    builder.addCase(fetchAdminUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAdminUsers.fulfilled, (state, action) => {
      state.adminUsers = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchAdminUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch admin users";
    });

    // Update admin user cases
    builder.addCase(updateAdminUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateAdminUser.fulfilled, (state, action) => {
      state.adminUsers = state.adminUsers.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state.loading = false;
    });
    builder.addCase(updateAdminUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to update admin user";
    });

    // Delete admin user cases
    builder.addCase(deleteAdminUser.fulfilled, (state, action) => {
      state.adminUsers = state.adminUsers.filter(
        (user) => user.id !== action.payload
      );
    });
    builder.addCase(deleteAdminUser.rejected, (state, action) => {
      state.error = action.payload || "Failed to delete admin user";
    });

    // Add admin user cases
    builder.addCase(addAdminUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addAdminUser.fulfilled, (state, action) => {
      state.adminUsers.push(action.payload);
      state.loading = false;
      state.error = null;
    });
    builder.addCase(addAdminUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to add admin user";
    });
  },
});

export const { initializeAuth, clearError } = authSlice.actions;
export default authSlice.reducer;
