"use client";
import { Avatar, Container, Flex, Grid } from "@radix-ui/themes";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const Signin = (props: { callbackUrl: string }) => {
  const router = useRouter();
  const email = useRef("");
  const password = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: props.callbackUrl ?? "http://localhost:3000",
    });

    try {
      const res = axios.post("/api/user", { email, password });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Grid
        columns={{ initial: "1", md: "2" }}
        className="max-w-[1000px] ml-auto mr-auto p-[50px]"
      >
        <Flex direction="column" className="p-[30px]">
          <div className="flex flex-col items-center">
            <Avatar src="/home-svg.svg" fallback="Login icon" size="3" />
            <p className="text-[#1C4596] font-bold text-[28px]">Login</p>
          </div>
          <form className="mt-5" onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                className="block text-[#292929] text-sm font-bold text-[14px] mb-2"
                htmlFor="username"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
                onChange={(e) => (email.current = e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#292929] text-sm font-bold mb-2"
                htmlFor="username"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="password"
                onChange={(e) => (password.current = e.target.value)}
              />
              <button
                className="mt-8 w-full bg-[#F18F02]  text-white font-semibold text-[20px] py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="submit"
              >
                Sign In
              </button>
              <Link
                className="mt-4 text-[#1C4596] text-[18px] font-medium flex flex-col items-center"
                href="#"
              >
                Forget Password
              </Link>
            </div>
          </form>
        </Flex>
        <div>
          <Image
            src="/login cover.png"
            alt="login image"
            width={545}
            height={644}
          />
        </div>
      </Grid>
    </Container>
  );
};

export default Signin;
