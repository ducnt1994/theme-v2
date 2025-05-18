import { RootState } from "@/redux/store/clientStore";

export const selectTheme = (state: RootState) =>
  state.layout.language ||
  state.layout ||
  "theme_1";