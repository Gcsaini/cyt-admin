import "./App.css";
import "./index.css";
import "./bootstrap.css";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./pages/login";
import NotFoundPage from "./pages/notfound";
import Home from "./pages/home";
import Registration from "./pages/registration";
import Therapist from "./components/therapists/therapist";
import ClientComponent from "./components/client/clientComponent";
import Appointments from "./components/appointment/appointments";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="offcanvas-overlay"></div>
        <div className="main-wrapper">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/registrations" element={<Registration />} />
            <Route exact path="/therapist" element={<Therapist />} />
            <Route exact path="/client" element={<ClientComponent />} />
            <Route exact path="/appointment" element={<Appointments />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
