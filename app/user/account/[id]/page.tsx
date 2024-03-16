"use client";
import { Avatar, Container, Flex, Grid } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface Props {
  id: string;
}

const UserAccount = (id: Props) => {
  const { data: session } = useSession();

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
        <Flex direction="column" className="md:col-span-1 bg-[#1C4596] ">
          <div className="border-b-2 border-white pt-[40px] pl-[30px]">
            <Avatar size="8" src="/user dummy.png" fallback="A" radius="full" />
            <p className="font-bold text-[32px] text-white">
              {session?.user?.name}
            </p>
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
          <p className="font-medium text-[32px]">
            Lorem Ipsum is simply dummy text
          </p>
          <p className="font-normal text-[26px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </p>
        </Flex>
      </Grid>
    </Container>
  );
};

export default UserAccount;
