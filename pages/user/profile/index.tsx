import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "@/components/layouts/layout";
import UserLayout from "@/components/layouts/UserLayout";
type Props = {};

export default function UserProfile({}: Props) {
  const { data: session } = useSession();

  return (
    <div>
      User Profile
      <br />
      {JSON.stringify(session)}
    </div>
  );
}

UserProfile.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
