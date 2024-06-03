import { Box, Typography } from "@mui/material";
import FormSignUp from "../../components/form-signup/FormSignUp";
import OldUser from "../../components/old-user/OldUser";

export default function SignUp() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        gap: 3,
      }}
    >
      <FormSignUp />
      <OldUser />
    </Box>
  );
}
