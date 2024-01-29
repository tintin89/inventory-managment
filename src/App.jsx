import "./App.css";
import { AuthContextProvider } from "./context/authContext";
import { MyRoutes } from "./routers/routes";

function App() {
  return (
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>
  );
}

export default App;
