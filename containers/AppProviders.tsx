"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store as rootStore} from "@/redux/store";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/styles/theme";

const store = rootStore();

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </Provider>
  );
}