import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "../../router/Router";

export default function HomePage() {
  return (
    <CssBaseline>
      <RouterProvider router={router}></RouterProvider>
    </CssBaseline>
  );
}
