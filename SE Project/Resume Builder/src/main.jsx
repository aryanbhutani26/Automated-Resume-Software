import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import signinpage from "./auth/signin/signin.jsx";
import { Home } from "lucide-react";
import home from "./home/home.jsx";
import dash from "./dashboard/dash.jsx";
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element:dash()
      }
    ],
  },{
    path: "/",
    element: home(),
  },
  {
    path: "/auth/signin",
    element:signinpage(),
    // element: <signinpage />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      
    </ClerkProvider>
  </StrictMode>
);
