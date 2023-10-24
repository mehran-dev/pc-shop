import User from "@/models/user";
import db from "@/utils/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
  // Not working Why I dont Know Yet !!!  authorize: async (credentials:any ) => {
  //   return await  Promise.resolve(true);
  // },
  providers: [
    CredentialsProvider({
      id: "user-pass",
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: "User-Password",
      credentials: {
        username: { label: "Username", type: "text", value: "m1@g.com" },
        password: { label: "Password", type: "password", value: "m1@g.com" },
      },

      authorize: async (credentials, req): Promise<any> => {
        console.log("User Pass Auth");
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
    CredentialsProvider({
      id: "otp",
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: "OTP",
      credentials: {
        phone: { label: "Phone", type: "text", value: "09027040652" },
      },

      authorize: async (credentials, req): Promise<any> => {
        console.log("OTP Auth", credentials, req);

        return false;
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
};

export default NextAuth(options);
