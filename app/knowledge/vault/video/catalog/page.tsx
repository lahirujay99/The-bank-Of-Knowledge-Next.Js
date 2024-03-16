import CoursesFilter from "@/app/Components/CoursesFilter";
import Pagination from "@/app/Components/Pagination";
import SearchBar from "@/app/Components/SearchBar";
import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";

const page = () => {
  return (
    <>
      <HeroSection />
      <VideoGallery />
    </>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-[#1C4596]">
      <Container>
        <Grid columns={{ initial: "1", md: "2" }} className="py-[20px]">
          <Flex direction="column" className="p-[20px] mt-[20px]">
            <span className="font-extrabold text-[#F18F02] text-[61px]">
              The Knowledge Vault
            </span>
            <p className="font-medium text-[32px] text-white leading-[50px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Flex>
          <Image
            src="/Hero Image.png"
            alt="hero image"
            width={409}
            height={420}
            className="ml-[100px]"
          />
        </Grid>
      </Container>
    </div>
  );
};

const VideoGallery = () => {
  return (
    <div className="bg-[#DEF1FF] pb-[30px]">
      <Container>
        <SearchBar />
        <CoursesFilter />
        <Flex className="mt-2 mb-4">
          <p className="font-semibold text-[24px] text[#3A3A3A] leading-[39px]">
            Showing 48 of 508 results
          </p>
        </Flex>
        <VideoCard />
        <Flex className="py-[30px]" justify="center">
          <Pagination currentPage={2} itemCount={100} pageSize={10} />
        </Flex>
      </Container>
    </div>
  );
};

const VideoCard = () => {
  const videoList = [
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imgUrl: "/video card image.png",
      title: " The Bank Of The Knowledge",
      category: "Leadership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <Container>
      <Grid columns="3" gap="5" width="auto">
        {videoList.map((video) => (
          <Box key={video.title} className="bg-white rounded">
            <Image
              src={video.imgUrl}
              alt={video.title}
              width={493}
              height={270}
            />
            <div className="p-5">
              <p className="font-semibold text-[23px] text-[#1C4596] leading-[39px]">
                {video.title}
              </p>
              <p className="font-bold text-[18px] text-[#F18F02] leading-[25px]">
                {video.category}
              </p>
              <p className="font-normal text-[14px] text-[#757574]">
                {video.desc}
              </p>
            </div>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default page;
