import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "../utils/api";

// Define the Event interface
interface Event {
  id: number;
  title: string;
  description: string;
  ministry: string;
  date: string;
  venue: string;
  image: string;
  created_at: string;
  updated_at?: string;
}

interface EventState {
  events: Event[];
  event: Event | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: EventState = {
  events: [],
  event: null,
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

// Upload a new event
export const uploadEvent = createAsyncThunk<
  Event,
  FormData,
  { rejectValue: string }
>("events/uploadEvent", async (formData, { rejectWithValue }) => {
  try {
    const response = await api.post<Event>("/upload-event", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Fetch all events
export const fetchEvents = createAsyncThunk<
  Event[],
  void,
  { rejectValue: string }
>("events/fetchEvents", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<Event[]>("/view-events");
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Update an event
export const updateEvent = createAsyncThunk<
  Event,
  { id: number; formData: FormData },
  { rejectValue: string }
>("events/updateEvent", async ({ id, formData }, { rejectWithValue }) => {
  try {
    const response = await api.put<Event>(`/edit-event/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

// Delete an event
export const deleteEvent = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("events/deleteEvent", async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/delete-event/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    clearEventState: (state) => {
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    // Upload event cases
    builder.addCase(uploadEvent.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(uploadEvent.fulfilled, (state, action) => {
      state.events.unshift(action.payload);
      state.loading = false;
      state.success = true;
    });
    builder.addCase(uploadEvent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to upload event";
      state.success = false;
    });

    // Fetch events cases
    builder.addCase(fetchEvents.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch events";
    });

    // Update event cases
    builder.addCase(updateEvent.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(updateEvent.fulfilled, (state, action) => {
      state.events = state.events.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
      state.loading = false;
      state.success = true;
    });
    builder.addCase(updateEvent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to update event";
      state.success = false;
    });

    // Delete event cases
    builder.addCase(deleteEvent.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteEvent.fulfilled, (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
      state.loading = false;
      state.success = true;
    });
    builder.addCase(deleteEvent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to delete event";
      state.success = false;
    });
  },
});

export const { clearEventState } = eventSlice.actions;
export default eventSlice.reducer;
