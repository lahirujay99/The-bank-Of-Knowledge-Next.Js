import { Flex, Container, Grid, Box } from "@radix-ui/themes";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  return (
    <>
      <Header />
      <TheValueWeBring />
      <DevelopingKnowledge />
      <Statics />
      <OurHeadCoach />
    </>
  );
};

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#F4F4F4] to-white pt-[80px] pb-[40px] pl-[20px]">
      <Container>
        <Flex direction="column" className="max-w-[400px]">
          <p className="text-[60px] font-extrabold text-[#1C4596] leading-[70px]">
            The Value We Bring You
          </p>
          <p className="font-normal text-[20px] text-[#1B1B1B]">
            We reward you for investing in training, learning and knowledge
            while also helping you maximise your potential to be the best
            version of yourself and a leader in your own personal and
            professional development.
          </p>
        </Flex>
      </Container>
    </div>
  );
};

const TheValueWeBring = () => {
  return (
    <Container>
      <Grid columns={{ initial: "1", sm: "5" }} className="py-[50px]">
        <Box className="md:col-span-3">
          <p className="font-bold text-[50px] text-[#1C4596]">
            The Value We Bring You
          </p>
          <p className="font-normal text-[22px] max-w-[550px]">
            Empowering you, individuals, teams and businesses to pave the way
            for a resilient future of unparalleled success. Unlocking a world of
            possibilities for your personal and professional development by
            investing in our training packages and workshops, delivered through
            a variety of different training methods to suit your learning style.
          </p>
        </Box>
        <Box className="md:col-span-2">
          <Image
            src="/methodology page img.png"
            alt="image"
            width={700}
            height={659}
          />
        </Box>
      </Grid>
    </Container>
  );
};

const DevelopingKnowledge = () => {
  const steps = [
    {
      imgUrl: "/get started img.png",
      heading: "Get Started",
      desc: " Complete our simple sign up which gives you access to browse the full range of learning opportunities provided for your personal and professional development.",
    },
    {
      imgUrl: "/select training.png",
      heading: "Select Your Training",
      desc: "Identify and select the training and workshops which give you the skills and knowledge you want to develop, Check Out, and start learning.",
    },
    {
      imgUrl: "/bank reward.png",
      heading: "Bank Rewards",
      desc: "For every purchase and investment you make for your own, or your people’s learning, you receive unique rewards which can be redeemed via your own dedicated rewards portal.",
    },
  ];
  return (
    <Container>
      <Grid columns={{ initial: "1", md: "2" }} className="my-[30px]">
        <Box></Box>
        <Box className="space-y-5">
          <p className="font-bold text-[20px] text-[#F18F02] leading-6">
            Upskill, Earn Rewards
          </p>
          <p className="font-bold text-[48px] text-[#1D4596] leading-[58px]">
            Developing Knowledge to Empower Your Future
          </p>
          <p className="font-normal text-[16px] text[#1B1B1B] leading-[22px]">
            We are passionate about personal and professional development and
            thrive to enhance the skills and knowledge of individuals and
            organisations to empower them to achieve excellence in their chosen
            field. Our training packages and workshops are designed to offer a
            range of options to meet your unique needs and enhance you and your
            team through providing continual personal and professional
            development.{" "}
          </p>
          {steps.map((step) => (
            <Box
              className="border-l-[3px] border-[#F18F02] h-[108px] max-w-[677px]"
              key={step.imgUrl}
            >
              <Flex gap="4">
                <Image
                  src={step.imgUrl}
                  alt={step.heading}
                  width={40}
                  height={60}
                  className="my-auto ml-[16px]"
                />

                <Flex direction="column" gap="1">
                  <p className="font-bold text-[20px] text-[#1C4596]">
                    {step.heading}
                  </p>
                  <p className="text-[16px] font-normal">{step.desc}</p>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Box>
      </Grid>
    </Container>
  );
};

const Statics = () => {
  const statics = [
    {
      imgUrl: "/customer service.png",
      percentage: "80%",
      desc: "Increase in Customer Service",
    },
    { imgUrl: "/surge sale.png", percentage: "50%", desc: "Surge in Sale" },
    {
      imgUrl: "/rise in retention.png",
      percentage: "70%",
      desc: "Rise in Retention",
    },
    {
      imgUrl: "/individual earnings.png",
      percentage: "35%",
      desc: "Increase in Individual Earnings",
    },
  ];
  return (
    <div className="bg-[#D6EDFF] my-[70px]">
      <Container>
        <Grid columns={{ initial: "1", md: "4" }} className="py-[20px]">
          {statics.map((statistic) => (
            <Box className="max-w-[677px]" key={statistic.imgUrl}>
              <Flex gap="4">
                <Image
                  src={statistic.imgUrl}
                  alt={statistic.desc}
                  width={94}
                  height={94}
                  className="my-auto ml-[16px]"
                />
                <Flex direction="column" gap="1" justify="center">
                  <p className="font-bold text-[28px] text-[#1C4596] leading-[22px]">
                    {statistic.percentage}
                  </p>
                  <p className="text-[16px] font-medium text-[#F18F02] leading-[22px]">
                    {statistic.desc}
                  </p>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

const OurHeadCoach = () => {
  return (
    <Container>
      <Grid columns={{ initial: "1", md: "2" }} gap="5" className="mb-[40px]">
        <Flex direction="column" className="p-5">
          <p className="font-bold text-[60px] text-[#1C4596] leading-[82px]">
            Our Head Coach
          </p>
          <p>
            Chris Gault is a trained practitioner of NLP, experience coach and
            passionate trainer who encourages a fun, enjoyable and humanistic
            approach to personal and professional development.
            <br />
            <br /> Chris focuses on supporting individuals and teams to be the
            best version of themselves, by providing a variety of options for
            increasing knowledge and skills and empower those he works with to
            discover the right approach to learning in order to achieve a
            resilient and rewarding future.
            <br /> Chris actively encourages individuals and teams to work with
            an open mindset and focus on continuous development and improvement
            to achieve their outcome.{" "}
          </p>
        </Flex>
        <Box className="p-5">
          <Image
            src="/our head coach img.png"
            alt="coach image"
            width={649}
            height={511}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default page;
