import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Testimonial from "../Components/Testimonial";

const page = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <Testimonial />
    </>
  );
};

const HeroSection = () => {
  return (
    <Container>
      <Grid columns={{ initial: "1", md: "2" }} className="py-[50px]">
        <Flex direction="column" className="py-[70px]">
          <span className="font-extrabold text-[#1C4596] text-[61px]">
            Upskill With
          </span>
          <span className="font-extrabold text-[#F18F02] text-[61px]">
            The Bank Of The Knowledge
          </span>
        </Flex>
        <Image
          src="/education page hero img.png"
          alt="hero image"
          width={409}
          height={420}
          className="ml-[100px]"
        />
      </Grid>
    </Container>
  );
};

const OurServices = () => {
  const services = [
    {
      imageUrl: "knowledge vault.png",
      title: "The Knowledge Vault",
      desc: "The Knowledge Vault grants you access to our bank of bite size,pre-recorded training presentations where the learning never ends.",
    },
    {
      imageUrl: "knowledge society.png",
      title: "The Knowledge Society",
      desc: "Webinars, seminars and other high value events provide further learning opportunities for your personal and professional development. ",
    },
    {
      imageUrl: "knowledge investor.png",
      title: "The Knowledge Investor",
      desc: "Access a series of learning courses or extended training workshops and invest in you, your team and your business and receive more for your money by bulk buying training hours.",
    },
    {
      imageUrl: "knowledge bank.png",
      title: "The Knowledge Bank",
      desc: "Our range of training courses and workshops, delivered by highly skilled trainers, guaranteed to enhance your knowledge and development. ",
    },
  ];
  return (
    <Container className="mt-5 mb-[50px]">
      <div className="text-center">
        <p>
          <span className="font-bold text-[#1C4596] text-[48px]">Our </span>
          <span className="font-bold text-[#F18F02] text-[48px]">Services</span>
        </p>
        <p className="w-[770px] mx-auto text-[16px] font-normal">
          Our training packages and workshops are designed to offer a range of
          options to meet your unique needs and enhances skills to empower you
          and your people for a resilient and rewarding future, through
          providing continual personal and professional development.{" "}
        </p>
      </div>
      <Grid columns="2" gap="3" width="auto" className="mt-[30px]">
        {services.map((service) => (
          <Box
            className="text-center space-y-5 bg-[#D6EDFF] p-5"
            key={service.title}
          >
            <Image
              src={`/${service.imageUrl}`}
              alt={service.title}
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="font-bold text-[28px] text-[#1C4596]">
              {service.title}
            </p>
            <p className="font-normal text-[16px]">{service.desc}</p>
            <button className="inline-flex items-center bg-[#F18F02]  text-white font-medium py-2 px-4 rounded text-[18px]">
              Learn More
              <span className="mr-1"></span>
              <MdOutlineKeyboardArrowRight />
            </button>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default page;
