import { Box, Container, Flex, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";
import Logo from "./Components/Logo";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#1C4596] text-white py-3">
      <Container>
        <Grid columns={{ initial: "1", md: "4" }} className="py-5">
          <Intro />
          <Menu />
          <QuickLink />
          <Contact />
        </Grid>
      </Container>
      <Copyright />
    </footer>
  );
};

const Intro = () => {
  return (
    <Flex direction="column">
      <Logo />
      <Box className="mt-3">
        <Text>
          Unlocking a world of possibilities for your personal and professional
          development. Empowering you and your people to pave the way for a
          resilient future of unparalleled success.{" "}
        </Text>
      </Box>
    </Flex>
  );
};

const Menu = () => {
  const links = [
    { label: "Education", href: "/education" },
    { label: "Methodology", href: "/methodology" },
    { label: "Bank Rewards", href: "/bankRewards" },
    { label: "Log in", href: "/api/auth/signin" },
  ];
  return (
    <Flex direction="column" className="pl-24">
      <Text className="pb-2 text-[#F18F02] font-medium">Menu</Text>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </Flex>
  );
};

const QuickLink = () => {
  const qlinks = [
    { label: "The Knowledge Vault", href: "/knowledge/vault/video/catalog" },
    { label: "The Knowledge Society", href: "/knowledge/society" },
    { label: "The Knowledge Investor", href: "/knowledge/investor" },
    { label: "The Knowledge Bank", href: "/knowledge/bank/courses" },
  ];
  return (
    <Flex direction="column" className="pl-7">
      <Text className="pb-2 text-[#F18F02] font-medium">Quick Links</Text>
      <ul>
        {qlinks.map((qlink) => (
          <li key={qlink.href}>
            <Link href={qlink.href}>{qlink.label}</Link>
          </li>
        ))}
      </ul>
    </Flex>
  );
};

const Contact = () => {
  return (
    <Flex direction="column" className="">
      <Text className="pb-2 text-[#F18F02] font-medium">Contact</Text>
      <Flex>
        <input
          className="shadow appearance-none border w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter your email"
        />
        <button className="inline-flex items-center bg-[#F18F02]  text-white-700 font-semibold hover:text-white py-1 px-4 ">
          subscribe
        </button>
      </Flex>
      <Flex align="center" className="mt-3" gap="2">
        <IoCall /> <Text> 0203 714 8099</Text>
      </Flex>
      <Flex align="center" className="mt-2" gap="2">
        <MdOutlineEmail /> <Text>letstalk@thebankofknowledge.co.uk</Text>
      </Flex>
    </Flex>
  );
};

const Copyright = () => {
  return (
    <Box className="border-t border-opacity-10 pt-4 pb-2">
      <Container>
        <Flex justify="between">
          <Text>Copyright © 2023 The Bank Of Knowledge Limited</Text>
          <Text>Designed & Powered by Use Brandable</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
