const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorValues, setErrorValues] = useState({
    usernameError: true,
    passwordError: true,
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };