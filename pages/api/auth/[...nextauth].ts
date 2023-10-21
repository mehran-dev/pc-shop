import User from "@/models/user";
import db from "@/utils/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: "User & Password",
      credentials: {
        username: { label: "Username", type: "text", value: "m1@g.com" },
        password: { label: "Password", type: "password", value: "m1@g.com" },
      },

      authorize: async (credentials, req): Promise<any> => {
        await db.connect();
        console.log("Authorize , req.body.username ", req.body.username);

        let user;

        try {
          user = await User.findOne({
            name: req?.body?.username,
          });
        } catch (error) {
          console.log(error);
        }
        let person;

        console.log("user from db is : ", user);

        if (user) {
          person = {
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            image: "f",
            isAdmin: user.isAdmin,
          };
        }

        if (person) {
          return Promise.resolve(person);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    //   async session(session, user) {
    //     session.user.id = user.id;
    //     return Promise.resolve(session);
    //   },

    async redirect({ url, baseUrl }) {
      return "/user/profile";

      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
