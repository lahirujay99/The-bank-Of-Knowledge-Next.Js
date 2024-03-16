"use client";
import { Container, Flex, Grid } from "@radix-ui/themes";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/register", {
        name,
        email,
        phone,
        companyName,
        password,
      });
      if (res) router.push("/api/auth/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Grid
        columns={{ initial: "1", md: "2" }}
        className="max-w-[1000px] ml-auto mr-auto px-[50px]"
      >
        <Flex direction="column" className="p-[30px]">
          <div className="flex flex-col items-center">
            <p className="text-[#1C4596] font-bold text-[28px]">Get Started</p>
          </div>
          <form className="mt-5" onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                className="block text-[#292929] text-sm font-bold text-[14px] mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#292929] text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#292929] text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="number"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#292929] text-sm font-bold mb-2"
                htmlFor="company"
              >
                Company Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="Company"
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#292929] text-sm font-bold mb-2"
                htmlFor="passowrd"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="mt-5 w-full bg-[#F18F02]  text-white font-semibold text-[20px] py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Continue
            </button>
            <Link
              className="mt-4 text-[#1C4596] text-[18px] font-medium flex flex-col items-center"
              href="/api/auth/signin"
            >
              Already a member ?
            </Link>
          </form>
        </Flex>
        <div>
          <Image
            src="/sign up cover.png"
            alt="sign up image"
            width={545}
            height={644}
          />
        </div>
      </Grid>
    </Container>
  );
};

export default Signup;
