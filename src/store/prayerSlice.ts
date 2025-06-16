// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { AxiosError } from "axios";
// import api from "../utils/api";

// // Define the PrayerRequest interface
// interface PrayerRequest {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   prayer_request: string;
//   contact_team?: boolean;
//   created_at?: string;
//   updated_at?: string;
// }

// // Interface for submitting a new prayer request
// interface SubmitPrayerRequestData {
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   prayer_request: string;
//   contact_team?: boolean;
// }

// interface PrayerRequestState {
//   prayerRequests: PrayerRequest[];
//   prayerRequest: PrayerRequest | null;
//   loading: boolean;
//   error: string | null;
//   success: boolean;
// }

// const initialState: PrayerRequestState = {
//   prayerRequests: [],
//   prayerRequest: null,
//   loading: false,
//   error: null,
//   success: false,
// };

// // Helper function to handle API errors
// function handleApiError(error: unknown): string {
//   if (error instanceof AxiosError) {
//     return error.response?.data?.message || error.message;
//   }
//   return "An unexpected error occurred";
// }

// // Submit a new prayer request (Public endpoint)
// export const submitPrayerRequest = createAsyncThunk<
//   PrayerRequest,
//   SubmitPrayerRequestData,
//   { rejectValue: string }
// >(
//   "prayerRequest/submitPrayerRequest",
//   async (prayerData, { rejectWithValue }) => {
//     try {
//       const response = await api.post<PrayerRequest>(
//         "/prayer-request",
//         prayerData
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(handleApiError(error));
//     }
//   }
// );

// // Fetch all prayer requests (Admin only)
// export const fetchPrayerRequests = createAsyncThunk<
//   PrayerRequest[],
//   void,
//   { rejectValue: string }
// >("prayerRequest/fetchPrayerRequests", async (_, { rejectWithValue }) => {
//   try {
//     const response = await api.get<PrayerRequest[]>("/prayer-request");
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(handleApiError(error));
//   }
// });

// // Fetch a specific prayer request by ID (Admin only)
// export const fetchPrayerRequestById = createAsyncThunk<
//   PrayerRequest,
//   number,
//   { rejectValue: string }
// >("prayerRequest/fetchPrayerRequestById", async (id, { rejectWithValue }) => {
//   try {
//     const response = await api.get<PrayerRequest>(`/prayer-request/${id}`);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(handleApiError(error));
//   }
// });

// // Delete a specific prayer request (Admin only)
// export const deletePrayerRequest = createAsyncThunk<
//   number,
//   number,
//   { rejectValue: string }
// >("prayerRequest/deletePrayerRequest", async (id, { rejectWithValue }) => {
//   try {
//     await api.delete(`/prayer-request/${id}`);
//     return id;
//   } catch (error) {
//     return rejectWithValue(handleApiError(error));
//   }
// });

// const prayerRequestSlice = createSlice({
//   name: "prayerRequest",
//   initialState,
//   reducers: {
//     clearPrayerRequestState: (state) => {
//       state.error = null;
//       state.success = false;
//     },
//     clearCurrentPrayerRequest: (state) => {
//       state.prayerRequest = null;
//     },
//   },
//   extraReducers: (builder) => {
//     // Submit prayer request cases
//     builder.addCase(submitPrayerRequest.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//       state.success = false;
//     });
//     builder.addCase(submitPrayerRequest.fulfilled, (state, action) => {
//       state.prayerRequests.unshift(action.payload);
//       state.loading = false;
//       state.success = true;
//     });
//     builder.addCase(submitPrayerRequest.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || "Failed to submit prayer request";
//       state.success = false;
//     });

//     // Fetch all prayer requests cases
//     builder.addCase(fetchPrayerRequests.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchPrayerRequests.fulfilled, (state, action) => {
//       state.prayerRequests = action.payload;
//       state.loading = false;
//     });
//     builder.addCase(fetchPrayerRequests.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || "Failed to fetch prayer requests";
//     });

//     // Fetch specific prayer request cases
//     builder.addCase(fetchPrayerRequestById.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchPrayerRequestById.fulfilled, (state, action) => {
//       state.prayerRequest = action.payload;
//       state.loading = false;
//     });
//     builder.addCase(fetchPrayerRequestById.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || "Failed to fetch prayer request";
//     });

//     // Delete prayer request cases
//     builder.addCase(deletePrayerRequest.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(deletePrayerRequest.fulfilled, (state, action) => {
//       state.prayerRequests = state.prayerRequests.filter(
//         (request) => request.id !== action.payload
//       );
//       state.loading = false;
//       state.success = true;
//     });
//     builder.addCase(deletePrayerRequest.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || "Failed to delete prayer request";
//       state.success = false;
//     });
//   },
// });

// export const { clearPrayerRequestState, clearCurrentPrayerRequest } =
//   prayerRequestSlice.actions;
// export default prayerRequestSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "../utils/api";

// Define the PrayerRequest interface
interface PrayerRequest {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  prayer_request: string;
  contact_team?: boolean;
  created_at?: string;
  updated_at?: string;
}

// Interface for submitting a new prayer request
interface SubmitPrayerRequestData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  prayer_request: string;
  contact_team?: boolean;
}

// Define the API response structure for fetching prayer requests
interface PrayerRequestsResponse {
  messages?: PrayerRequest[]; // In case it uses 'messages' key like contacts
  prayerRequests?: PrayerRequest[]; // In case it uses a different key
  prayer_requests?: PrayerRequest[]; // Another possible key
  data?: PrayerRequest[]; // Another common pattern
}

interface PrayerRequestState {
  prayerRequests: PrayerRequest[];
  prayerRequest: PrayerRequest | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: PrayerRequestState = {
  prayerRequests: [],
  prayerRequest: null,
  loading: false,
  error: null,
  success: false,
};

// Helper function to handle API errors
function handleApiError(error: unknown): string {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || error.message;
  }
  return "An unexpected error occurred";
}

// Helper function to extract prayer requests from response
function extractPrayerRequests(
  response: PrayerRequestsResponse
): PrayerRequest[] {
  // Check different possible keys in the response
  if (response.messages) return response.messages;
  if (response.prayerRequests) return response.prayerRequests;
  if (response.prayer_requests) return response.prayer_requests;
  if (response.data) return response.data;

  // If none of the expected keys exist, assume the response itself is the array
  // This handles the case where the API might return the array directly
  return Array.isArray(response) ? response : [];
}

// Submit a new prayer request (Public endpoint)
export const submitPrayerRequest = createAsyncThunk<
  PrayerRequest,
  SubmitPrayerRequestData,
  { rejectValue: string }
>(
  "prayerRequest/submitPrayerRequest",
  async (prayerData, { rejectWithValue }) => {
    try {
      const response = await api.post<PrayerRequest>(
        "/prayer-request",
        prayerData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

// Fetch all prayer requests (Admin only)
export const fetchPrayerRequests = createAsyncThunk<
  PrayerRequest[],
  void,
  { rejectValue: string }
>("prayerRequest/fetchPrayerRequests", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<PrayerRequestsResponse>("/prayer-request");
    // Extract the prayer requests array from the response
    return extractPrayerRequests(response.data);
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Fetch a specific prayer request by ID (Admin only)
export const fetchPrayerRequestById = createAsyncThunk<
  PrayerRequest,
  number,
  { rejectValue: string }
>("prayerRequest/fetchPrayerRequestById", async (id, { rejectWithValue }) => {
  try {
    const response = await api.get<PrayerRequest>(`/prayer-request/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Delete a specific prayer request (Admin only)
export const deletePrayerRequest = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("prayerRequest/deletePrayerRequest", async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/prayer-request/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

const prayerRequestSlice = createSlice({
  name: "prayerRequest",
  initialState,
  reducers: {
    clearPrayerRequestState: (state) => {
      state.error = null;
      state.success = false;
    },
    clearCurrentPrayerRequest: (state) => {
      state.prayerRequest = null;
    },
  },
  extraReducers: (builder) => {
    // Submit prayer request cases
    builder.addCase(submitPrayerRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(submitPrayerRequest.fulfilled, (state, action) => {
      state.prayerRequests.unshift(action.payload);
      state.loading = false;
      state.success = true;
    });
    builder.addCase(submitPrayerRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to submit prayer request";
      state.success = false;
    });

    // Fetch all prayer requests cases
    builder.addCase(fetchPrayerRequests.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPrayerRequests.fulfilled, (state, action) => {
      state.prayerRequests = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPrayerRequests.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch prayer requests";
    });

    // Fetch specific prayer request cases
    builder.addCase(fetchPrayerRequestById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPrayerRequestById.fulfilled, (state, action) => {
      state.prayerRequest = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPrayerRequestById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch prayer request";
    });

    // Delete prayer request cases
    builder.addCase(deletePrayerRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deletePrayerRequest.fulfilled, (state, action) => {
      state.prayerRequests = state.prayerRequests.filter(
        (request) => request.id !== action.payload
      );
      state.loading = false;
      state.success = true;
    });
    builder.addCase(deletePrayerRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to delete prayer request";
      state.success = false;
    });
  },
});

export const { clearPrayerRequestState, clearCurrentPrayerRequest } =
  prayerRequestSlice.actions;
export default prayerRequestSlice.reducer;
