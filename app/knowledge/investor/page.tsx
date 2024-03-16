import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <InvestmentDesc />
      <DummySection />
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-[#1C4596] pt-[80px] pb-[40px] pl-[20px] mb-[20px]">
      <Container>
        <Flex direction="column" className="max-w-[500px]">
          <p>
            <span className="text-[61px] font-extrabold leading-[82px] text-white">
              Investments
            </span>
            <br />
            <span className="text-[61px] font-extrabold leading-[82px] text-[#F18F02]">
              The Knowledge Investor
            </span>
          </p>
          <button className="inline-flex items-center bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded w-[180px] mt-[40px]">
            Get Started
            <span className="mr-1"></span>
            <MdOutlineKeyboardArrowRight />
          </button>
        </Flex>
      </Container>
    </div>
  );
};

const InvestmentDesc = () => {
  const investmentTypes = [
    {
      installments: "12 Monthly Installments",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
      purchaseUrl: "",
    },
    {
      installments: "24 Hours Investment",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
      purchaseUrl: "",
    },
    {
      installments: "60 Monthly Installments",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
      purchaseUrl: "",
    },
    {
      installments: "120 Monthly Installments",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
      purchaseUrl: "",
    },
  ];
  return (
    <Container className="mb-[50px]">
      <Flex direction="column" className="text-center my-[40px]">
        <p>
          <span className="font-bold text-[48px] text-[#1C4596] leading-[58px]">
            Investment{" "}
          </span>
          <span className="font-bold text-[48px] text-[#F18F02] leading-[58px]">
            Description
          </span>
        </p>
        <p className="font-normal text-[24px] leading-[38px] text-center px-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>
      </Flex>
      <Flex className="mb-[40px]">
        <div className="shadow appearance-none border border-[#F18F02] w-[350px] h-12 bg-transparent leading-tight rounded flex mx-auto">
          <div className="flex-2 flex items-center justify-center px-5">
            <p className="font-semibold text-[15px] text-[#1C4596]">
              12 Monthly Installments
            </p>
          </div>
          <div className="flex-1 bg-[#F18F02] flex items-center justify-center">
            <p className="text-[15px] text-white">Paid Upfront</p>
          </div>
        </div>
      </Flex>
      <Grid columns="2" width="auto" className="rounded border">
        {investmentTypes.map((investment) => (
          <Box
            className="space-y-5 px-9 py-7 border"
            key={investment.installments}
          >
            <p className="font-bold text-[28px] text-[#1C4596] leading-[34px]">
              {investment.installments}
            </p>
            <p className="font-normal text-[16px] leading-[30px] text-[#757574]">
              {investment.desc}
            </p>
            <Flex align="center" justify="between">
              <button className="inline-flex items-center bg-[#F18F02]  text-white  hover:text-white py-1 px-4 text-[18px] font-medium rounded">
                Purchase
                <span className="mr-1"></span>
              </button>
              <p>
                <span className="font-medium text-[26px] leading-[24px] text-[#4A4A4A]">
                  Was{" "}
                </span>
                <span className="font-medium text-[18px] leading-[24px] text-[#4A4A4A] line-through">
                  £100{" "}
                </span>
                <span className="font-medium text-[26px] leading-[24px] text-[#F18F02]">
                  Now £80
                </span>
              </p>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

const DummySection = () => {
  return (
    <div className="bg-[#D6EDFF] py-[30px]">
      <Container>
        <Grid columns={{ initial: "1", sm: "3" }}>
          <Flex direction="column" className="md:col-span-2 mt-[60px]" gap="5">
            <p className="text-[38px] font-bold text-[#1C4596]">
              Lorem Ipsum is simply dummy text
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <button className="inline-flex items-center bg-[#F18F02] text-white font-semibold hover:text-white py-2 px-4 w-[180px] rounded">
              Learn More
              <span className="mr-1"></span>
              <MdOutlineKeyboardArrowRight />
            </button>
          </Flex>
          <Box className="p-5">
            <Image
              src="/investor page dummy img.png"
              alt="investor page dummy img"
              width={409}
              height={453}
            />
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default page;
