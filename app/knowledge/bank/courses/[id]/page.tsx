import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const page = () => {
  return (
    <div>
      <ItemDescription />
      <RelatedCourses />
    </div>
  );
};

const ItemDescription = () => {
  return (
    <Container className="mb-[40px]">
      <Grid columns={{ initial: "1", md: "2" }} className="pt-[70px]">
        <Box className="px-[26px]">
          <Image
            src="/single item img.png"
            alt="single item img"
            width={693}
            height={704}
          />
        </Box>
        <Flex direction="column" className="px-[50px]">
          <p className="font-semibold text-[45px] text-[#1C4596] leading-[60px]">
            Sales & Marketing
          </p>
          <p className="font-semibold text-[26px] text-[#616161] leading-[30px] mt-[20px]">
            [Tags]
          </p>
          <p className="font-medium text-[23px] text-[#5B5B5B] leading-[50px] mb-[10px]">
            Lorem Ipsum available
          </p>
          <p className="mb-3">
            <span className="font-medium text-[29px] text-[#3D3D3D] leading-[30px]">
              Duration:{" "}
            </span>
            <span className="font-medium text-[23px] text-[#F18F02] leading-[30px]">
              30 days
            </span>
          </p>
          <p className="font-normal text-[21px] text-[#1B1B1B] leading-[40px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <button className=" items-center text-center bg-[#1C4596]  text-white font-semibold hover:text-white py-2 px-4 mt-4 mb-3">
            Enquire
          </button>
          <button className=" items-center text-center bg-[#F18F02]  text-white font-semibold hover:text-white py-2 px-4 ">
            Add to cart
          </button>
        </Flex>
      </Grid>
      <Flex direction="column" className="px-[26px] mt-[50px]">
        <p className="font-medium text-[32px] text-[#323232]">Description</p>
        <p className="font-normal text-[24px] text-[#323232] leading-[40px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered There are many variations of
          passages of Lorem Ipsum available, but the majority have suffered{" "}
        </p>
        <hr />
      </Flex>
    </Container>
  );
};

const RelatedCourses = () => {
  const dummyCourses = [
    {
      id: 1,
      courseName: "Knowledge Bank CPT",
      category: "Category",
      desc: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
      courseUrl: "",
    },
    {
      id: 2,
      courseName: "Sales and Service",
      category: "Category",
      desc: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
      courseUrl: "",
    },
  ];
  return (
    <Container className="mb-[50px]">
      <p className="font-semibold text-[40px] text-[#1C4596] leading-[48px] px-[26px] ">
        Related Courses
      </p>
      <Grid columns="2" width="auto" gap="6" className="mt-[40px] px-[26px] ">
        {dummyCourses.map((course) => (
          <Box
            className="bg-[#D6EDFF] rounded px-[40px] py-[30px] space-y-2"
            key={course.id}
          >
            <p className="font-bold text-[28px] leading-[34px] text-[#1C4596]">
              {course.courseName}
            </p>
            <p className="font-semibold text-[22px] leading-[30px] text-[#616161]">
              {course.category}
            </p>
            <p>
              <span className="font-medium text-[20px] leading-[30px] text-[#3D3D3D]">
                Duration:
              </span>
              <span className="font-medium text-[20px] leading-[30px] text-[#F18F02]">
                {" "}
                25Hrs 52Mins
              </span>
            </p>
            <p className="font-normal text-[16px] leading-[30px] text-[#1B1B1B]">
              {course.desc}
            </p>
            <button className="inline-flex items-center bg-[#F18F02]  text-white font-semibold hover:text-white py-2 px-4   rounded">
              View Course
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
