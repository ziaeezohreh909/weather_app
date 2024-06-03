import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { UsersType } from "../form-signin/FormSignin";

interface AuthContextType {
  authorizedUser: UsersType;
  setAuthorizedUser: Dispatch<SetStateAction<UsersType>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export default function AuthContextProvider({ children }: Props) {
  const [authorizedUser, setAuthorizedUser] = useState<UsersType>({});
  return (
    <AuthContext.Provider value={{ authorizedUser, setAuthorizedUser }}>
      {children}
    </AuthContext.Provider>
  );
}
