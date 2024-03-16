import { Avatar, Container, Flex } from "@radix-ui/themes";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const page = () => {
  return (
    <Container size="3">
      <div className="bg-[#D6EDFF] my-[40px] pb-[30px]">
        <Flex
          justify="center"
          direction="column"
          align="center"
          className="p-[30px]"
        >
          <Avatar
            size="5"
            src="/confirmation vector.png"
            fallback="A"
            radius="full"
          />
          <p className="font-medium text-[36px] leading-[43px] text-[#101010]">
            Confirmation
          </p>
        </Flex>
        <p className="font-medium text-[34px] leading-[49px] text-[#1C4596] px-[30px]">
          Thank you for placing your order with The Bank of Knowledge, please
          find your order details below:
        </p>
        <hr className="border-t border-gray-400" />
        <Flex direction="column" className="px-[30px]">
          <Flex justify="between" className=" pt-5">
            <Label value="[Product Name]" />
            <Value value="The Bank of Knowledge" />
          </Flex>
          <Hr />
          <Flex justify="between" className=" pt-5">
            <Label value="[Product Name]" />
            <Value value="The Bank of Knowledge" />
          </Flex>
          <Hr />
          <hr className="border-t border-gray-400 mt-[100px]" />
          <Flex justify="between" className=" pt-5">
            <Label value="Payment Reference" />
            <Value value="123456" />
          </Flex>
          <Hr />
          <Flex justify="between" className=" pt-5">
            <Label value="Subtotal" />
            <Value value="£75" />
          </Flex>
          <Hr />
          <Flex justify="between" className=" pt-5">
            <Label value="VAT" />
            <Value value="£5" />
          </Flex>
          <Hr />
          <Flex justify="between" className=" pt-5">
            <Label value="Total" />
            <Value value="£80" />
          </Flex>
          <Hr />
        </Flex>
        <Flex className="px-[30px]" direction="column">
          <p className="font-normal text-[25px] leading-[38px] text-[#0D0D0D] mt-[50px]">
            When completing your one-off payment and/or setting up a monthly
            standing order, please ensure the correct payment reference is
            quoted: [123456]
          </p>
          <Hr />

          <p className="font-medium text-[29px] leading-[25px] text-[#1C4596] mt-[30px]">
            Please make payment to:
          </p>
          <Flex
            className="w-[600px] mt-[28px]"
            justify="between"
            align="center"
          >
            <Label value="Account Name" />
            <Value value="The Bank of Knowledge" />
          </Flex>
          <Flex
            className="w-[600px] mt-[28px]"
            justify="between"
            align="center"
          >
            <Label value="Account Number" />
            <Value value="13724223" />
          </Flex>
          <Flex
            className="w-[600px] mt-[28px]"
            justify="between"
            align="center"
          >
            <Label value="Sort Code" />
            <Value value="52-10-30" />
          </Flex>

          <p className="font-normal text-[25px] leading-[38px] text-[#0D0D0D] mt-[60px] ">
            You are expected to pay 1 payment of (sub total amount £75) + ( VAT
            £5). This totals (total amount £80) for training services as
            requested. To complete your order and avoid any delays in your
            transaction you must ensure that the payment reference is quoted on
            the electronic transfer instruction submitted to your bank/building
            society.
          </p>
          <Hr />
          <p className="font-normal text-[25px] leading-[38px] text-[#0D0D0D] mt-[40px]">
            Your LinkPoints will be available within your LinkPoint account, and
            your purchased services activated within 2 working days of payment
            being received and processed.
          </p>
          <Hr />
        </Flex>
        <Flex className="px-[30px] mt-[30px]" direction="column">
          <p className="font-normal text-[25px] text-[#1C4596]">
            If you have any questions, please contact us on:
          </p>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "3px" }}
          >
            <IoCall style={{ marginRight: "5px" }} />
            <span>0203 714 8099</span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "2px" }}
          >
            <MdEmail style={{ marginRight: "5px" }} />
            <span>letstalk@thebankofknowledge.co.uk</span>
          </div>
        </Flex>
        <Flex className="px-[30px] mt-[50px]" justify="center">
          <button className="inline-flex items-center bg-[#F18F02] text-white font-semibold hover:text-white py-2 px-4 rounded">
            Return to Home
          </button>
        </Flex>
      </div>
    </Container>
  );
};

const Hr = () => {
  return <hr className="border-t border-gray-300 mt-1" />;
};

const Label = ({ value }: { value: string }) => {
  return (
    <p className="font-medium text-[29px] leading-[25px] text-[#0D0D0D]">
      {value}:{" "}
    </p>
  );
};

const Value = ({ value }: { value: string }) => {
  return (
    <p className="font-medium text-[25px] leading-[20px] text-[#616161]">
      {value}
    </p>
  );
};

export default page;
