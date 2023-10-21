import Navigation from "../navigation";

export default function UserLayout({ children }: any) {
  return (
    <>
      UserNavigation
      <div className="px-16">
        <main>{children}</main>
      </div>
    </>
  );
}
