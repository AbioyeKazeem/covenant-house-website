// src/store/sliderSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export interface Slider {
  id: number;
  image: string;
  title: string;
  verse: string;
  created_at?: string;
}

interface SliderState {
  sliders: Slider[];
  loading: boolean;
  error: string | null;
}

const initialState: SliderState = {
  sliders: [],
  loading: false,
  error: null,
};

interface ApiError {
  message: string;
}

// Using the same API instance as in authSlice
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
function isAxiosError(error: unknown): error is AxiosError<ApiError> {
  return (error as AxiosError).isAxiosError !== undefined;
}

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

export const fetchSliders = createAsyncThunk<
  Slider[],
  void,
  { rejectValue: string }
>("slider/fetchSliders", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<Slider[]>("/sliders");
    return response.data; // API returns array directly, not wrapped in {sliders: [...]}
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

export const uploadSlider = createAsyncThunk<
  Slider,
  { image: File; title: string; verse: string },
  { rejectValue: string }
>(
  "slider/uploadSlider",
  async ({ image, title, verse }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("sliderImage", image);
      formData.append("overlayText", title);
      formData.append("bibleVerse", verse);

      const response = await api.post<Slider>("/upload-slider", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const updateSlider = createAsyncThunk<
  Slider,
  { id: number; title?: string; verse?: string },
  { rejectValue: string }
>("slider/updateSlider", async ({ id, title, verse }, { rejectWithValue }) => {
  try {
    const response = await api.put<Slider>(`/edit-slider/${id}`, {
      title,
      verse,
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

export const deleteSlider = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("slider/deleteSlider", async (id, { rejectWithValue }) => {
  try {
    await api.delete(`/delete-slider/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(handleApiError(error));
  }
});

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    clearSliderError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch sliders cases
    builder.addCase(fetchSliders.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchSliders.fulfilled, (state, action) => {
      state.sliders = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchSliders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to fetch sliders";
    });

    // Upload slider cases
    builder.addCase(uploadSlider.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(uploadSlider.fulfilled, (state, action) => {
      state.sliders.push(action.payload);
      state.loading = false;
      state.error = null;
    });
    builder.addCase(uploadSlider.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to upload slider";
    });

    // Update slider cases
    builder.addCase(updateSlider.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateSlider.fulfilled, (state, action) => {
      state.sliders = state.sliders.map((slider) =>
        slider.id === action.payload.id ? action.payload : slider
      );
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateSlider.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to update slider";
    });

    // Delete slider cases
    builder.addCase(deleteSlider.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteSlider.fulfilled, (state, action) => {
      state.sliders = state.sliders.filter(
        (slider) => slider.id !== action.payload
      );
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteSlider.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Failed to delete slider";
    });
  },
});

export const { clearSliderError } = sliderSlice.actions;
export default sliderSlice.reducer;
