import { Flex, Container, Box, Grid } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import CoursesList from "../Components/CourseList";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const page = () => {
  return (
    <>
      <Header />
      <UpskillReward />
      <DummyText />
      <CoursesList />
      <GetStart />
    </>
  );
};

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#F4F4F4] to-white pt-[80px] pb-[40px] pl-[20px]">
      <Container>
        <Flex direction="column" className="max-w-[500px]">
          <p className="text-[60px] font-extrabold text-[#1C4596] leading-[70px]">
            Bank Rewards
          </p>
          <p className="font-normal text-[20px] text-[#1B1B1B]">
            Investing in your own, and your teams, personal and professional
            development is a reward in itself, so at The Bank of Knowledge we
            encourage and support training and learning to develop new knowledge
            and skills by rewarding you on your training purchases.
          </p>
        </Flex>
      </Container>
    </div>
  );
};

const UpskillReward = () => {
  return (
    <Container>
      <Flex direction="column" className="pt-[55px]  px-auto justify-center">
        <p className="text-center">
          <span className="font-bold text-[48px] text-[#F18F02]">Upskill,</span>
          <span className="font-bold text-[48px] text-[#1D4596]">
            Earn Rewards
          </span>
        </p>
        <p className="text-center w-[900px] mx-auto">
          For every purchase and investment you make in your own, or your
          people&apos;s learning, you receive unique rewards which can be
          redeemed via your own dedicated rewards portal.{" "}
        </p>
      </Flex>
      <Grid
        columns={{ initial: "1", md: "3" }}
        className="w-[964px] mx-auto bg-[#D6EDFF] p-[30px] mt-[30px] mb-[50px]"
      >
        <Flex className="md:col-span-1" width="auto">
          <Image
            src="/bankRewards grid img.png"
            alt="bankRewards grid img"
            width={243}
            height={243}
          />
        </Flex>
        <Box className=" md:col-span-2">
          <Flex direction="column">
            <p className="font-bold text-20px] text-[#1C4596]">
              Best Implementation
            </p>

            <Flex>
              <p className="text-[16px] font-normal">
                When you get started with The Bank of Knowledge you will also be
                granted access to your own dedicated rewards platform, allowing
                you to redeem the rewards you have earned.
                <br /> For every purchase made within The Bank of Knowledge you
                will receive a percentage of your spend back by way of reward
                points* which can be redeemed in multiple ways via your
                dedicated rewards platform**.
                <br />
                <span className="text-[11px]">
                  *The rewards points awarded may vary depending on the product
                  or services purchased via The Bank of Knowledge.
                </span>
                <br />
                <span className="text-[11px]">
                  **The dedicated rewards platform is provided by a 3rd party
                  and may be subject to change inthe future at the discretion of
                  The Bank of Knowledge.
                </span>
              </p>
            </Flex>
          </Flex>
        </Box>
      </Grid>
    </Container>
  );
};

const DummyText = () => {
  return (
    <Container>
      <Grid
        columns={{ initial: "1", md: "2" }}
        className="p-[30px] mb-[10px]"
        gap="8"
      >
        <Flex direction="column" gap="4" className="mt-[50px]">
          <p>
            <span className="text-[48px] text-[#F18F02] font-bold leading-[64px]">
              Lorem Ipsum is
            </span>
            <span className="text-[48px] text-[#1D4596] font-bold leading-[64px]">
              {" "}
              simply dummy text
            </span>
          </p>
          <p className="text-[26px] text-[#1B1B1B] font-normal leading-[45px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution{" "}
          </p>
        </Flex>
        <Box>
          <Image
            src="/dummy text img.png"
            alt="bankRewards grid img"
            width={542}
            height={589}
          />
        </Box>
      </Grid>
    </Container>
  );
};

const GetStart = () => {
  return (
    <div className="bg-[#D6EDFFCC] p-[50px]">
      <Container>
        <Grid columns={{ initial: "1", sm: "3" }}>
          <Flex direction="column" className="md:col-span-2 py-[30px]">
            <p className="font-bold text-[42px] leading-[51px] text-[#1D4596]">
              Join the Bank Of Knowledge
            </p>
            <p className="font-normal text-[16px] leading-[26px] text-[#616161]">
              Click to get started on your learning adventure and open up
              opportunities to browse our training workshops while you Upskill,
              Earn Rewards for investing in you and your teams personal and
              professional development.{" "}
            </p>
          </Flex>
          <Flex direction="column" align="end" justify="center">
            <button className="inline-flex items-center  bg-[#F18F02] h-[60px]  text-white font-semibold hover:text-white py-auto px-4 rounded">
              Get Started
              <span className="mr-1"></span>
              <MdOutlineKeyboardArrowRight />
            </button>
          </Flex>
        </Grid>
      </Container>
    </div>
  );
};

export default page;
