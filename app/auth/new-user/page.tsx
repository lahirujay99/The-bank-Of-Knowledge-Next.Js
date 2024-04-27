import { prisma } from "@/prisma/client";
import { Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export default async function Signup() {
  const onSubmit = async (formData: FormData) => {
    "use server";
    // const { name, email, phone, companyName, password } = formData;
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const companyName = formData.get("company");
    const password = formData.get("password");

    const hashedPassword = await bcrypt.hash(password as string, 10);

    await prisma.user.create({
      data: {
        name: name as string,
        email: email as string,
        phone: phone as string,
        companyName: companyName as string,
        password: hashedPassword,
      },
    });

    redirect("/api/auth/signin");
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
          <form className="mt-5" action={onSubmit}>
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
                name="name"
                type="text"
                placeholder="Name"
                required
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
                name="email"
                type="text"
                placeholder="Email"
                required
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
                name="phone"
                type="number"
                placeholder="Phone Number"
                required
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
                name="company"
                type="text"
                placeholder="Company"
                required
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
                name="password"
                type="password"
                placeholder="Password"
                required
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
}
