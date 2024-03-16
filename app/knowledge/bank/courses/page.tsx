import CoursesFilter from "@/app/Components/CoursesFilter";
import Pagination from "@/app/Components/Pagination";
import SearchBar from "@/app/Components/SearchBar";
import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const page = () => {
  return (
    <div>
      <Header />
      <CourseViewer />
      <PaginationComponent />
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
              All Courses
            </span>
            <br />
            <span className="text-[61px] font-extrabold leading-[82px] text-[#F18F02]">
              The Knowledge Bank
            </span>
          </p>
        </Flex>
      </Container>
    </div>
  );
};

const CourseViewer = () => {
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
    {
      id: 3,
      courseName: "Hybrid Working",
      category: "Category",
      desc: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
      courseUrl: "",
    },
    {
      id: 4,
      courseName: "Well-being in the Workplace",
      category: "Category",
      desc: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
      courseUrl: "",
    },
    {
      id: 5,
      courseName: "Hybrid Working",
      category: "Category",
      desc: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
      courseUrl: "",
    },
    {
      id: 6,
      courseName: "Hybrid Working",
      category: "Category",
      desc: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.",
      courseUrl: "",
    },
  ];
  return (
    <Container className="mb-[50px]">
      <Flex direction="column" className="text-center my-[40px]">
        <p>
          <span className="font-bold text-[48px] text-[#1C4596] leading-[58px]">
            All{" "}
          </span>
          <span className="font-bold text-[48px] text-[#F18F02] leading-[58px]">
            Courses
          </span>
        </p>
        <p className="font-normal text-[20px] leading-[30px] text-center px-[5px]">
          Our range of training courses and workshops, delivered by highly
          skilled trainers, guaranteed to enhance your knowledge and
          development. These courses are designed for up to 6 delegates per
          session and will be delivered online by a highly skilled trainer. All
          our material has been developed or approved by a certified NLP
          practitioner and experienced trainer to ensure they meet the highest
          of standards. All participants will receive a digital certificate of
          attendance for completing the courses from The Bank of Knowledge.{" "}
        </p>
      </Flex>
      <SearchBar />
      <CoursesFilter />
      <Grid columns="2" width="auto" gap="6" className="mt-[40px]">
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

const PaginationComponent = () => {
  return (
    <Flex justify="center" className="mb-[50px]">
      <Pagination currentPage={1} pageSize={10} itemCount={40} />
    </Flex>
  );
};

export default page;
