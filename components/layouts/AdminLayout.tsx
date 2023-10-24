import AdminPanelNavigation from "./navigations/adminPanelNavigation";
import Navigation from "./navigations/navigation";

export default function AdminLayout({ children }: any) {
  return (
    <>
      <AdminPanelNavigation />
      <div className="px-16">
        <main>{children}</main>
      </div>
    </>
  );
}
