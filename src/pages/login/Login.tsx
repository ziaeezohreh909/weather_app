import { Box } from "@mui/material";
import NewUser from "../../components/new-user/NewUser";
import FormSignin from "../../components/form-signin/FormSignin";

export default function Login() {
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
      <NewUser />
      <FormSignin />
    </Box>
  );
}
