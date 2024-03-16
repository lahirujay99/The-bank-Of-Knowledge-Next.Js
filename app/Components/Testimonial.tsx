import { Grid, Flex, Card, Container, Text } from "@radix-ui/themes";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      dummyName: "Dummy Name",
      TestimonialType: "Business",
      rate: "⭐⭐⭐⭐⭐",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the &apos; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s",
    },
    {
      id: 2,
      dummyName: "Dummy Name",
      TestimonialType: "Business",
      rate: "⭐⭐⭐⭐⭐",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the &apos; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s",
    },
  ];
  return (
    <Container>
      <Grid columns={{ initial: "1", md: "1" }} className="mb-[70px]">
        <Grid columns={{ initial: "1", md: "1" }}>
          <Flex justify="center" className="mb-5 ">
            <Text className="font-bold text-[48px] text-[#1C4596]">
              Testimonial
            </Text>
          </Flex>
        </Grid>
        <Grid columns={{ initial: "1", md: "2" }} gap="4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="cursor-pointer">
              <Flex direction="column" align="center" gap="3">
                <p className="pt-3 text-[#1C4596] font-bold text-[20px]">
                  {testimonial.dummyName}
                </p>
                <p className="font-normal text-[16px] text-[#8F8F8F]">
                  {testimonial.TestimonialType}
                </p>
                <p>{testimonial.rate}</p>
                <p className="font-normal text-[16px] text-center leading-6 pb-5">
                  {testimonial.desc}
                </p>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
