import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
// import './index.css'
import { BrowserRouter } from "react-router-dom";
import { MaterialUIControllerProvider } from "./context";

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
  </React.StrictMode>,
)


// Material Dashboard 2 React Context Provider

// ReactDOM.render(
//   document.getElementById("root")
// );
