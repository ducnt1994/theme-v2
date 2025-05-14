import { createAsyncThunk } from "@reduxjs/toolkit";

export const initializeLayout = createAsyncThunk(
  "layout/initialize",
  async (_, thunkAPI) => {
    // Ví dụ gọi API init layout từ localStorage, cookie, hoặc external API
    const language = "vi"; // lấy từ localStorage nếu có
    return { language };
  }
);