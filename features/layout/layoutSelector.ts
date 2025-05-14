import { RootState } from "@/redux/store";

export const selectTheme = (state: RootState) =>
  state.layout.language ||
  state.layout ||
  "theme_1";