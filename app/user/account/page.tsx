"use client";
import { User } from "@prisma/client";
import { Avatar, Container, Flex, Grid } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactHTMLElement, useState } from "react";
import DeleteUserBtn from "./DeleteUserBtn";
import { revalidatePath } from "next/cache";

const UserAccount = () => {
  const router = useRouter();
  const { status, data: session } = useSession();
  const [isDisabled, setIsDisabled] = useState(true);

  if (status === "unauthenticated") router.push("/api/auth/signin");
  const userEmail = session?.user?.email?.toString();
  const {
    data: userData,
    error,
    isLoading,
  } = useQuery<User>({
    queryKey: ["userData"],
    queryFn: () =>
      axios.post("/api/user", { userEmail }).then((res) => res.data),
    staleTime: 60 * 10,
    retry: 3,
    onSuccess: (data) => {
      setName(data.name);
      setPhone(data.phone);
      setCompany(data.companyName);
    },
  });

  const [name, setName] = useState(userData?.name ?? "");
  const [phone, setPhone] = useState(userData?.phone ?? "");
  const [company, setCompany] = useState(userData?.companyName ?? "");

  const handleUpdateData = async (e: any) => {
    e.preventDefault();
    console.log("mama awa 1");

    try {
      console.log("mama awa 2");
      await axios.patch("/api/user", {
        name,
        email: userEmail,
        phone,
        companyName: company,
      });
      console.log("mama awa 3");
      setIsDisabled(!isDisabled);
      revalidatePath("/user/account");
      console.log("mama awa 4");
    } catch (error) {
      console.log(error);
    }
  };

  const optionsArray = [
    {
      label: "Account details",
      imgUrl: "/user icon.png",
      linkUrl: `/user/account/${1}`,
    },
    { label: "Setting", imgUrl: "/settings icon.png", linkUrl: "" },
    { label: "My Course", imgUrl: "/courses icon.png", linkUrl: "" },
    { label: "Subscriptions", imgUrl: "/subscription icon.png", linkUrl: "" },
    { label: "Invoices", imgUrl: "/invoice icon1.png", linkUrl: "" },
    { label: "Team Access", imgUrl: "/teams icon.png", linkUrl: "" },
    {
      label: "The Knowledge Investor",
      imgUrl: "/knowledge icon.png",
      linkUrl: "",
    },
    { label: "Logout", imgUrl: "/logout icon.png", linkUrl: "" },
  ];

  return (
    <Container>
      <Grid
        columns={{ initial: "1", sm: "3" }}
        className="mt-[114px] mb-[61px]"
      >
        <Flex direction="column" className="md:col-span-1 bg-[#1c4596] ">
          <div className="border-b-2 border-white pt-[40px] pl-[30px]">
            <Avatar size="8" src="/user dummy.png" fallback="A" radius="full" />
            <p className="font-bold text-[32px] text-white">{userData?.name}</p>
          </div>
          {optionsArray.map((option) => (
            <Flex
              gap="4"
              className="border-b-2 border-white pl-6 pt-6 pb-3"
              key={option.label}
              align="center"
            >
              <Avatar size="1" src={option.imgUrl} fallback="A" />
              <p className="font-normal text-white text-[22px] leading-[26px]">
                <Link href={option.linkUrl}>{option.label}</Link>
              </p>
            </Flex>
          ))}
        </Flex>
        <Flex
          direction="column"
          className="md:col-span-2 bg-[#D6EDFF]  pt-[227px] px-[30px] pb-[400px]"
        >
          <div className="mb-4">
            <label
              className="block text-[#292929] text-sm font-bold text-[14px] mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              defaultValue={userData?.name}
              disabled={isDisabled}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#292929] text-sm font-bold text-[14px] mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              defaultValue={userData?.email}
              disabled={true}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#292929] text-sm font-bold text-[14px] mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              defaultValue={userData?.phone}
              disabled={isDisabled}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#292929] text-sm font-bold text-[14px] mb-2"
              htmlFor="company"
            >
              Company
            </label>
            <input
              className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company"
              defaultValue={userData?.companyName}
              disabled={isDisabled}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <Flex gap="5" mt="5">
            {isDisabled === true ? (
              <button
                className="inline-flex items-center bg-[#1c4596] text-white font-semibold hover:text-white py-2 px-4 border border-white rounded"
                onClick={() => setIsDisabled(!isDisabled)}
              >
                Edit Profile
              </button>
            ) : (
              <button
                className="inline-flex items-center bg-[#1c4596] text-white font-semibold hover:text-white py-2 px-4 border border-white rounded"
                onClick={handleUpdateData}
              >
                Save
              </button>
            )}

            {/* <button className="inline-flex items-center bg-[#F18F02]  text-white font-bold py-2 px-4 rounded">
              Delete Profile
            </button> */}
            <DeleteUserBtn email={userEmail!} />
          </Flex>
        </Flex>
      </Grid>
    </Container>
  );
};

export default UserAccount;
