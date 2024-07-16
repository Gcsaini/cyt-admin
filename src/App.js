import "./App.css";
import "./index.css";
import "./bootstrap.css";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Login from "./pages/login";
import NotFoundPage from "./pages/notfound";
import Home from "./pages/home";
import Registration from "./pages/registration";
import Appointment from "./pages/appointments";
import Client from "./pages/client";
import Therapists from "./pages/therapist";
import Reviews from "./pages/reviews";
import Invoice from "./pages/invoice";
import Plan from "./pages/plans";
import Blogs from "./pages/blogs";
import Course from "./pages/course";
import ClientRegistration from "./pages/clientregistraion";
import TherapistRegistration from "./pages/therapistregistration";
import BlogContainerPage from "./pages/blogContainer";

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
            <Route
              exact
              path="/clientregistration"
              element={<ClientRegistration />}
            />
            <Route
              exact
              path="/therapistregistration"
              element={<TherapistRegistration />}
            />
            <Route exact path="/therapist" element={<Therapists />} />
            <Route exact path="/client" element={<Client />} />
            <Route exact path="/appointment" element={<Appointment />} />
            <Route exact path="/reviews" element={<Reviews />} />
            <Route exact path="/invoices" element={<Invoice />} />
            <Route exact path="/plans" element={<Plan />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/courses" element={<Course />} />
            <Route
              exact
              path="/blogContainer"
              element={<BlogContainerPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
