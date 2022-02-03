import { AuhtProvider } from "./AuthContext";
import { UsersProvider } from "./UsersContext";

interface Props {
  children: JSX.Element;
}

export const AppState = ({ children }: Props) => {
  return (
    <AuhtProvider>
      <UsersProvider>{children}</UsersProvider>
    </AuhtProvider>
  );
};
