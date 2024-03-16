import { Container, Flex } from "@radix-ui/themes";

const page = () => {
  return (
    <div>
      <Header />
      <KnowledgeSocietyIntro />
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-[#1C4596] pt-[80px] pb-[80px] pl-[20px] mb-[50px]">
      <Container>
        <Flex direction="column" className="max-w-[600px]">
          <p>
            <span className="text-[61px] font-extrabold leading-[82px] text-white">
              Knowledge Society
            </span>
            <br />
            <span className="text-[61px] font-extrabold leading-[82px] text-[#F18F02]">
              Coming Soon
            </span>
          </p>
        </Flex>
      </Container>
    </div>
  );
};

const KnowledgeSocietyIntro = () => {
  return (
    <Container className="mb-[50px]">
      <Flex direction="column" className="text-center my-[40px]">
        <p className="w-[600px] mx-auto mb-[30px]">
          <span className="font-bold text-[48px] text-[#1C4596] leading-[58px]">
            KNOWLEDGE SOCIETY{" "}
          </span>
          <span className="font-bold text-[48px] text-[#F18F02] leading-[58px]">
            COMMING SOON
          </span>
        </p>
        <p className="font-normal w-[850px] text-[20px] leading-[30px] text-center mx-auto px-[5px]">
          Taking learning out on the road, The Bank of Knowledge provides
          further learning through webinars, seminars, and other high value
          events. These offer the opportunity to hear and learn from a range of
          inspiring speakers across a range of topics which can be taken and
          implemented in an array of scenarios.{" "}
        </p>
      </Flex>
    </Container>
  );
};

export default page;
