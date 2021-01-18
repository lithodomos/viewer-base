import React from "react";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "../Routes/App/AppRoutes";
import { AppGlobalStyle, theme } from "../style/AppGlobalStyle";
import { ThemeProvider } from "../style/styled";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppGlobalStyle />

      {/* App routes! (only Home Route for now)  */}
      <AppRoutes />

      {/* react-toastify integration. DO NOT REMOVE unless ditching the library */}
      <ToastContainer />
    </ThemeProvider>
  );
};
