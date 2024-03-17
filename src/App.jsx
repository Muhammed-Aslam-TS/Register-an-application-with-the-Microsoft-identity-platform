import "./App.css";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  MsalProvider,
} from "@azure/msal-react";

import { loginRequest } from "./authConfig";

const WrappedView = () => {
  const { instance } = useMsal()
  const activeAccount = instance.getActiveAccount;

  const handleRedirect = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: "create",
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="app">
      <AuthenticatedTemplate>
        {activeAccount ? <p>Authenticate successfully</p> : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleRedirect}>Sign Up</button>
      </UnauthenticatedTemplate>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <WrappedView />
    </MsalProvider>
  );
};
export default App;
