import React, { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../router/index.jsx";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider.js";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits.js";

// const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound.js"));

export const App = () => {
  logCredits();

  return (
    <ThemeProvider>
      <CssBaseline />
      <HelmetMeta />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};
