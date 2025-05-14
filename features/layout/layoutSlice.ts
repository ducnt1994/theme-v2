import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutState {
  language: string;
  theme: "light" | "dark";
}

const initialState: LayoutState = {
  language: "vi",
  theme: "light",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setLanguage, toggleTheme } = layoutSlice.actions;
export default layoutSlice.reducer;