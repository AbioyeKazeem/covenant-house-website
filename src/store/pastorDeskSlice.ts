import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../utils/api";

export interface DeskPost {
  id: number;
  image: string;
  thumbnail: string;
  title: string;
  month: string;
  year: string;
  message: string;
  created_at?: string;
  updated_at?: string;
}

interface PastorDeskState {
  posts: DeskPost[];
  publicPosts: DeskPost[];
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: PastorDeskState = {
  posts: [],
  publicPosts: [],
  loading: false,
  error: null,
  success: null,
};

// Helper function to handle errors
function handleApiError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || error.message;
  }
  return "An unexpected error occurred";
}

// Upload a new Pastor's Desk post
export const uploadDeskPost = createAsyncThunk<
  DeskPost,
  { formData: FormData },
  { rejectValue: string }
>("pastorDesk/uploadPost", async ({ formData }, { rejectWithValue }) => {
  try {
    const response = await api.post<DeskPost>("/upload-desk", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Get all Pastor's Desk posts (admin view)
export const fetchDeskPosts = createAsyncThunk<
  DeskPost[],
  void,
  { rejectValue: string }
>("pastorDesk/fetchPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<DeskPost[]>("/view-desks");
    return response.data || []; // Ensure we always return an array
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Get all Pastor's Desk posts (public view)
export const fetchPublicDeskPosts = createAsyncThunk<
  DeskPost[],
  void,
  { rejectValue: string }
>("pastorDesk/fetchPublicPosts", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<DeskPost[]>("/public-desks");
    return response.data || []; // Ensure we always return an array
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Update a Pastor's Desk post
export const updateDeskPost = createAsyncThunk<
  DeskPost,
  { id: number; formData: FormData },
  { rejectValue: string }
>("pastorDesk/updatePost", async ({ id, formData }, { rejectWithValue }) => {
  try {
    const response = await api.put<DeskPost>(`/edit-desk/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Delete a Pastor's Desk post
export const deleteDeskPost = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("pastorDesk/deletePost", async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/delete-desk/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

const pastorDeskSlice = createSlice({
  name: "pastorDesk",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    // Upload Pastor's Desk post
    builder.addCase(uploadDeskPost.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(uploadDeskPost.fulfilled, (state, action) => {
      state.posts = [action.payload, ...state.posts]; // Safe unshift using spread
      state.loading = false;
      state.success = "Post uploaded successfully!";
    });
    builder.addCase(uploadDeskPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to upload post";
    });

    // Fetch Pastor's Desk posts (admin)
    builder.addCase(fetchDeskPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDeskPosts.fulfilled, (state, action) => {
      state.posts = action.payload || []; // Ensure we always have an array
      state.loading = false;
    });
    builder.addCase(fetchDeskPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch posts";
      state.posts = []; // Reset to empty array on error
    });

    // Fetch Public Pastor's Desk posts
    builder.addCase(fetchPublicDeskPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPublicDeskPosts.fulfilled, (state, action) => {
      state.publicPosts = action.payload || []; // Ensure we always have an array
      state.loading = false;
    });
    builder.addCase(fetchPublicDeskPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch public posts";
      state.publicPosts = []; // Reset to empty array on error
    });

    // Update Pastor's Desk post
    builder.addCase(updateDeskPost.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(updateDeskPost.fulfilled, (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      state.loading = false;
      state.success = "Post updated successfully!";
    });
    builder.addCase(updateDeskPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to update post";
    });

    // Delete Pastor's Desk post
    builder.addCase(deleteDeskPost.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = null;
    });
    builder.addCase(deleteDeskPost.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.loading = false;
      state.success = "Post deleted successfully!";
    });
    builder.addCase(deleteDeskPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to delete post";
    });
  },
});

export const { clearErrors, clearSuccess } = pastorDeskSlice.actions;
export default pastorDeskSlice.reducer;
