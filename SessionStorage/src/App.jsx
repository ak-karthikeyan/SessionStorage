import { SessionContextProvider } from "./context/SessionContext";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SessionContextProvider>
          <AppRoutes />
        </SessionContextProvider>
      </BrowserRouter>
    </div>
  );
}
