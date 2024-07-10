import Header from "./header";
import SideNav from "./sidenav";

export default function MainLayout(props) {
  return (
    <div class="main-wrapper">
      <Header />
      <SideNav />
      <div class="page-wrapper">
        <div class="content container-fluid">{props.children}</div>
      </div>
    </div>
  );
}
