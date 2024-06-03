import { Box, Stack, Typography } from "@mui/material";
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
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 22,
      }}
    >
      <Typography variant="h1">Oops!</Typography>
      <Typography
        variant="body1"
        sx={{ display: "flex", flexDirection: "row", gap: 2 }}
      >
        <ErrorIcon>{error.statusText || error.message}</ErrorIcon>
        <Stack>Sorry, an unexpected error has occurred.</Stack>
      </Typography>
    </Box>
  );
}
