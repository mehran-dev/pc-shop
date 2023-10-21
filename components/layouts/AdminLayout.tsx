import Navigation from "../navigation";

export default function AdminLayout({ children }: any) {
  return (
    <>
      AdminNavigation
      <div className="px-16">
        <main>{children}</main>
      </div>
    </>
  );
}
