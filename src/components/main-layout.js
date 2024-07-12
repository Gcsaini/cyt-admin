import Header from "./header";
import SideNav from "./sidenav";

export default function MainLayout(props) {
  return (
    <div class="main-wrapper">
      <Header />
      <SideNav />
      <div className="page-wrapper" style={{ minHeight: "354px" }}>
        {props.children}
      </div>
    </div>
  );
}
