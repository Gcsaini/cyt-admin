import MainLayout from "../components/main-layout";
import TherapistLists from "../components/registrations/therapists-list";
import SideNav from "../components/sidenav";

export default function Registration() {
  return (
    <MainLayout>
      <TherapistLists />
    </MainLayout>
  );
}
