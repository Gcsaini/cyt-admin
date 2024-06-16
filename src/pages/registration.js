import Header from "../components/header";
import TherapistLists from "../components/registrations/therapists-list";
import SideNav from "../components/sidenav";

export default function Registration() {
  return (
    <>
      <Header />
      <SideNav />
      <TherapistLists />
    </>
  );
}
