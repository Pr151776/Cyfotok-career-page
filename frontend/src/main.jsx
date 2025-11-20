import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)


// src/main.jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
// // import ApplyNow from "./pages/ApplyNow";
// import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: { main: "#6D28D9" }, // purple-blue
//     background: { default: "#061024", paper: "#071029" },
//     text: { primary: "#ffffff", secondary: "#cbd5e1" },
//   },
//   components: {
//     MuiFilledInput: {
//       styleOverrides: {
//         root: { backgroundColor: "rgba(255,255,255,0.02)" },
//       },
//     },
//   },
// });

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
    
//       <App />
    
//   </Provider>
// );
