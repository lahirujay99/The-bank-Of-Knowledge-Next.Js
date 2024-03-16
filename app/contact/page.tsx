import {
  Blockquote,
  Box,
  Container,
  Flex,
  Grid,
  TextArea,
} from "@radix-ui/themes";
import React from "react";

const Enquire = () => {
  return (
    <>
      <Header />
      <GetInTouch />
    </>
  );
};

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#F4F4F400] to-white pt-[80px] pb-[40px] pl-[20px]">
      <Container>
        <Flex direction="column" className="max-w-[300px]">
          <p className="text-[60px] font-extrabold text-[#1C4596]">Lets Talk</p>
          <p className="font-normal text-[20px] text-[#1B1B1B]">
            Have a question? Speak to our Knowledge Experts and discover the
            options for your training and learning needs.
          </p>
        </Flex>
      </Container>
    </div>
  );
};

const GetInTouch = () => {
  return (
    <Container>
      <Grid columns={{ initial: "1", sm: "3" }} gap="4" className="pb-[40px]">
        <Flex className="md:col-span-1 py-[60px]" direction="column" gap="4">
          <p className="text-[48px] font-bold text-[#1C4596]">Get in Touch</p>
          <Blockquote className="bg-[#F4F4F4] text-black py-4 text-[20px]">
            0203 714 8099
          </Blockquote>
          <Blockquote className="bg-[#F4F4F4] text-black py-4 text-[20px]">
            letstalk@thebankofknowledge.co.uk
          </Blockquote>
        </Flex>
        <Form />
      </Grid>
    </Container>
  );
};

const Form = () => {
  return (
    <Box className="md:col-span-2 p-9">
      <form>
        <Grid columns={{ initial: "1", md: "2" }} gap="4">
          <Flex direction="column">
            <div className="mb-4">
              <label
                className="block font-semibold text[16px] text-[#1B1B1B] mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1B1B1B] leading-tight focus:outline-none focus:shadow-outline bg-[#F4F4F4] "
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-semibold text[16px] text-[#1B1B1B] mb-2"
                htmlFor="company"
              >
                Company Name
              </label>
              <input
                className="shadow appearance-none border bg-[#F4F4F4]  rounded w-full py-2 px-3 text-[#1B1B1B] leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="Your company name"
              />
            </div>
          </Flex>
          <Flex direction="column">
            <div className="mb-4">
              <label
                className="block font-semibold text[16px] text-[#1B1B1B] mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#1B1B1B] leading-tight focus:outline-none focus:shadow-outline bg-[#F4F4F4] "
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                className="block font-semibold text[16px] text-[#1B1B1B] mb-2"
                htmlFor="contact"
              >
                Contact Number
              </label>
              <input
                className="shadow appearance-none border bg-[#F4F4F4]  rounded w-full py-2 px-3 text-[#1B1B1B] leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="number"
                placeholder="Your contact number"
              />
            </div>
          </Flex>
        </Grid>
        <Flex direction="column" gap="3">
          <label
            htmlFor="feedback"
            className="font-semibold text[16px] text-[#1B1B1B]"
          >
            Tell Us More
          </label>
          <TextArea
            size="3"
            id="feedback"
            placeholder="Enter any further details"
            className="bg-[#F4F4F4]"
          />
        </Flex>
      </form>
    </Box>
  );
};

export default Enquire;
