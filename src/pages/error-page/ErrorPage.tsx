import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";

type ErrorType = {
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as ErrorType;

  return (
    <Box
      id="error-page"
      className="flex flex-col justify-center items-center align-middle h-screen "
    >
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="body1">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body1">
        <ErrorIcon>{error.statusText || error.message}</ErrorIcon>
      </Typography>
    </Box>
  );
}
