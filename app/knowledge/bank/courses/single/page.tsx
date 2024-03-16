import CoursesList from "@/app/Components/CourseList";
import { Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <VideoScreen />
      <Description />
      <CoursesList />
      <BottomHeroSection />
    </div>
  );
};

const VideoScreen = () => {
  return (
    <Container>
      <Flex className="bg-[#F0F0F0] py-[200px] my-[40px]">
        <Image
          src="/play button.png"
          alt="play btn"
          width={100}
          height={125}
          className="mx-auto"
        />
      </Flex>
    </Container>
  );
};

const Description = () => {
  return (
    <Container>
      <Flex direction="column">
        <p className="font-semibold text-[40px] text-[#1C4596]">
          Sales & Service
        </p>
        <p className="font-normal  text-[24px] leading-[40px] text-[#1B1B1B]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered <br />
          <br />
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered There are many variations of passages of
          Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don&apos;t
          look even slightly believable. There are many variations of passages
          of Lorem Ipsum available, but the majority have suffered <br />
          <br />
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered Categories: [categories]
        </p>
      </Flex>
    </Container>
  );
};

const BottomHeroSection = () => {
  return (
    <div className="bg-[#D6EDFFCC]">
      <Container>
        <Grid
          columns={{ initial: "1", sm: "5" }}
          className="py-[70px] px-[20px]"
        >
          <Flex direction="column" className="md:col-span-4" gap="5">
            <p className="font-bold text-[32px] text-[#1D4596]">
              Want to Develop Your Training Further?
            </p>
            <p className="font-normal text-[16px]">
              Click to get started on your learning adventure and open up
              opportunities to browse our training workshops while you Upskill,
              Earn Rewards for investing in you and your teams personal and
              professional development.{" "}
            </p>
          </Flex>
          <Flex direction="column">
            <button className="inline-flex items-center bg-[#F18F02] w-[130px] text-white font-semibold hover:text-white py-1 px-4 ml-auto my-auto rounded">
              Contact Us
            </button>
          </Flex>
        </Grid>
      </Container>
    </div>
  );
};

export default page;
