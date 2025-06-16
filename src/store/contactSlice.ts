// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { AxiosError } from "axios";
// import api from "../utils/api";

// // Define the Contact Message interface
// interface ContactMessage {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   message: string;
//   created_at?: string;
//   updated_at?: string;
// }

// // Define the form data interface for submitting contact
// interface ContactFormData {
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// interface ContactState {
//   messages: ContactMessage[];
//   message: ContactMessage | null;
//   loading: boolean;
//   error: string | null;
//   success: boolean;
// }

// const initialState: ContactState = {
//   messages: [],
//   message: null,
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

// // Submit a new contact message (Public)
// export const submitContactMessage = createAsyncThunk<
//   ContactMessage,
//   ContactFormData,
//   { rejectValue: string }
// >("contact/submitContactMessage", async (formData, { rejectWithValue }) => {
//   try {
//     const response = await api.post<ContactMessage>("/intouch", formData);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(handleApiError(error));
//   }
// });

// // Fetch all contact messages (Admin only)
// export const fetchContactMessages = createAsyncThunk<
//   ContactMessage[],
//   void,
//   { rejectValue: string }
// >("contact/fetchContactMessages", async (_, { rejectWithValue }) => {
//   try {
//     const response = await api.get<ContactMessage[]>("/intouch");
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(handleApiError(error));
//   }
// });

// // Fetch a specific contact message by ID (Admin only)
// export const fetchContactMessageById = createAsyncThunk<
//   ContactMessage,
//   number,
//   { rejectValue: string }
// >("contact/fetchContactMessageById", async (id, { rejectWithValue }) => {
//   try {
//     const response = await api.get<ContactMessage>(`/intouch/${id}`);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(handleApiError(error));
//   }
// });

// // Delete a contact message (Admin only)
// export const deleteContactMessage = createAsyncThunk<
//   number,
//   number,
//   { rejectValue: string }
// >("contact/deleteContactMessage", async (id, { rejectWithValue }) => {
//   try {
//     await api.delete(`/intouch/${id}`);
//     return id;
//   } catch (error) {
//     return rejectWithValue(handleApiError(error));
//   }
// });

// const contactSlice = createSlice({
//   name: "contact",
//   initialState,
//   reducers: {
//     clearContactState: (state) => {
//       state.error = null;
//       state.success = false;
//     },
//     clearCurrentMessage: (state) => {
//       state.message = null;
//     },
//   },
//   extraReducers: (builder) => {
//     // Submit contact message cases
//     builder.addCase(submitContactMessage.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//       state.success = false;
//     });
//     builder.addCase(submitContactMessage.fulfilled, (state, action) => {
//       state.messages.unshift(action.payload);
//       state.loading = false;
//       state.success = true;
//     });
//     builder.addCase(submitContactMessage.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || "Failed to submit contact message";
//       state.success = false;
//     });

//     // Fetch contact messages cases
//     builder.addCase(fetchContactMessages.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchContactMessages.fulfilled, (state, action) => {
//       state.messages = action.payload;
//       state.loading = false;
//     });
//     builder.addCase(fetchContactMessages.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || "Failed to fetch contact messages";
//     });

//     // Fetch contact message by ID cases
//     builder.addCase(fetchContactMessageById.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchContactMessageById.fulfilled, (state, action) => {
//       state.message = action.payload;
//       state.loading = false;
//     });
//     builder.addCase(fetchContactMessageById.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || "Failed to fetch contact message";
//     });

//     // Delete contact message cases
//     builder.addCase(deleteContactMessage.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(deleteContactMessage.fulfilled, (state, action) => {
//       state.messages = state.messages.filter(
//         (message) => message.id !== action.payload
//       );
//       state.loading = false;
//       state.success = true;
//     });
//     builder.addCase(deleteContactMessage.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload || "Failed to delete contact message";
//       state.success = false;
//     });
//   },
// });

// export const { clearContactState, clearCurrentMessage } = contactSlice.actions;
// export default contactSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "../utils/api";

// Define the Contact Message interface
interface ContactMessage {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  created_at?: string;
  updated_at?: string;
}

// Define the form data interface for submitting contact
interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
}

// Define the API response structure
interface ContactMessagesResponse {
  messages: ContactMessage[];
}

interface ContactState {
  messages: ContactMessage[];
  message: ContactMessage | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: ContactState = {
  messages: [],
  message: null,
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

// Submit a new contact message (Public)
export const submitContactMessage = createAsyncThunk<
  ContactMessage,
  ContactFormData,
  { rejectValue: string }
>("contact/submitContactMessage", async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post<ContactMessage>("/intouch", formData);
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Fetch all contact messages (Admin only)
export const fetchContactMessages = createAsyncThunk<
  ContactMessage[],
  void,
  { rejectValue: string }
>("contact/fetchContactMessages", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<ContactMessagesResponse>("/intouch");
    // Extract the messages array from the response
    return response.data.messages;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Fetch a specific contact message by ID (Admin only)
export const fetchContactMessageById = createAsyncThunk<
  ContactMessage,
  number,
  { rejectValue: string }
>("contact/fetchContactMessageById", async (id, { rejectWithValue }) => {
  try {
    const response = await api.get<ContactMessage>(`/intouch/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Delete a contact message (Admin only)
export const deleteContactMessage = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("contact/deleteContactMessage", async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/intouch/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    clearContactState: (state) => {
      state.error = null;
      state.success = false;
    },
    clearCurrentMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // Submit contact message cases
    builder.addCase(submitContactMessage.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(submitContactMessage.fulfilled, (state, action) => {
      state.messages.unshift(action.payload);
      state.loading = false;
      state.success = true;
    });
    builder.addCase(submitContactMessage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to submit contact message";
      state.success = false;
    });

    // Fetch contact messages cases
    builder.addCase(fetchContactMessages.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchContactMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchContactMessages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch contact messages";
    });

    // Fetch contact message by ID cases
    builder.addCase(fetchContactMessageById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchContactMessageById.fulfilled, (state, action) => {
      state.message = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchContactMessageById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch contact message";
    });

    // Delete contact message cases
    builder.addCase(deleteContactMessage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteContactMessage.fulfilled, (state, action) => {
      state.messages = state.messages.filter(
        (message) => message.id !== action.payload
      );
      state.loading = false;
      state.success = true;
    });
    builder.addCase(deleteContactMessage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to delete contact message";
      state.success = false;
    });
  },
});

export const { clearContactState, clearCurrentMessage } = contactSlice.actions;
export default contactSlice.reducer;
