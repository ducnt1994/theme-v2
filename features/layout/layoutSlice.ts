import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ISectionItem} from "@/types/api";

interface LayoutState {
  language: string;
  theme: "light" | "dark";

  // layout config
  layout: ISectionItem[]
}

const initialState: LayoutState = {
  language: "vi",
  theme: "light",

  // layout config
  layout: []
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = layoutSlice.actions;
export default layoutSlice.reducer;