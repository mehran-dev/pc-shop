import Navigation from "./navigations/navigation";
import UserPanelNavigation from "./navigations/userPanelNavigation";

export default function UserLayout({ children }: any) {
  return (
    <>
      <UserPanelNavigation />
      <div className="px-16">
        <main>{children}</main>
      </div>
    </>
  );
}
