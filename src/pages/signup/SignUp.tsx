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
        justifyContent: "space-around",
        padding: 2,
        gap: 3,
      }}
    >
      <FormSignUp />
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <OldUser />
      </Box>
    </Box>
  );
}
