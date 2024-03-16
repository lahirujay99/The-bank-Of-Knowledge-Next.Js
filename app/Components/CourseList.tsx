import { Container, Flex, Grid } from "@radix-ui/themes";
import Link from "next/link";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CoursesList = () => {
  const courses = [
    {
      courseType: "Traning Course",
      courseName: "Knowledge Bank CPT",
      courseDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      courseLink: "/courses/id",
      enquire: "course/enquare/id",
    },
    {
      courseType: "Traning Course",
      courseName: "Sales and Service",
      courseDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      courseLink: "/courses/id",
      enquire: "course/enquare/id",
    },
    {
      courseType: "Traning Course",
      courseName: "Hybrid Working",
      courseDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      courseLink: "/courses/id",
      enquire: "course/enquare/id",
    },
    {
      courseType: "Traning Course",
      courseName: "Well-being in the Workplace",
      courseDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      courseLink: "/courses/id",
      enquire: "course/enquire/id",
    },
  ];
  return (
    <div>
      <Container>
        <Grid
          columns={{ initial: "1", md: "4" }}
          className="pt-[70px] pb-[30px]"
          gap="5"
        >
          {courses.map((course) => (
            <Flex
              direction="column"
              key={course.courseLink}
              className="bg-[#1C4596] text-white pt-5 pl-5 pr-5"
              gap="4"
            >
              <p className="font-medium text-[16px]">{course.courseType}</p>
              <p className="font-bold text-[20px]">{course.courseName}</p>
              <p className="font-normal text-[16px]">{course.courseDesc}</p>
              <Flex justify="between" className="border-t mt-5 pt-5">
                <Link
                  href={course.courseLink}
                  className="text-[#F18F02] inline-flex items-center font-medium text-[18px] "
                >
                  View Course
                  <MdOutlineKeyboardArrowRight />
                </Link>
                <Link
                  href={course.courseLink}
                  className="text-[#F18F02]  font-medium text-[18px]"
                >
                  Enquire
                </Link>
              </Flex>
            </Flex>
          ))}
        </Grid>
        <Flex justify="center" className="pt-[20px] py-[70px]">
          <button className="inline-flex items-center bg-[#F18F02]  text-white font-medium text-[18px] py-2 px-4 rounded">
            View All Courses
          </button>
        </Flex>
      </Container>
    </div>
  );
};

export default CoursesList;
