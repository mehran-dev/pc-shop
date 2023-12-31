import Navigation from "./navigations/navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <Navigation />
      <div className="px-16">
        <main>{children}</main>
      </div>
    </>
  );
}
