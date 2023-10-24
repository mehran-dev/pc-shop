import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/layouts/layout";
import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";
import AdminLayout from "@/components/layouts/AdminLayout";
import UserLayout from "@/components/layouts/UserLayout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Define the layouts you want to use for different routes.
  const adminRoutes = ["/admin", "/admin/dashboard", "/admin/settings"];
  const userRoutes = [
    "/user",
    "/user/dashboard",
    "/user/settings",
    "/user/profile",
  ];

  // Determine which layout to use based on the route.
  let LayoutComponent = Layout; // Default to the site layout.

  if (router.asPath.startsWith("/admin")) {
    LayoutComponent = AdminLayout;
  } else if (router.asPath.startsWith("/user")) {
    LayoutComponent = UserLayout;
  }
  //console.log("_app => pathname ", router.asPath);
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {getLayout(<Component {...pageProps} />)}
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}
/* Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
} */
/* import '../styles/globals.css'

import { SessionProvider, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { StoreProvider } from '../context/Cart'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className='bg-gray-100'>
      <SessionProvider session={session}>
        <StoreProvider>
          {Component.auth ? (
            <Auth adminOnly={Component.auth.adminOnly}>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </StoreProvider>
      </SessionProvider>
    </div>
  )
}

function Auth({ children, adminOnly }) {
  const router = useRouter()

  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized')
    },
  })

  if (status === 'loading') {
    return 'Loading'
  }

  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized')
  }

  return children
}

export default MyApp

DashboardPage.auth = { adminOnly: true }

 */
