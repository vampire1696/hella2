import { CountUpAnimation } from "@/components/CountUpAnimation";
import CustomContainer from "@/components/CustomContainer";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <main className="min-h-screen w-full flex-col flex items-center bg-gray-100">
    <main className="flex-col flex items-center ">
      <div className=" w-full">
        <div className="container relative mx-auto max-w-[1500px] flex justify-center py-7 bg-black shadow-lg rounded-lg">
          <div className="flex max-w-[1300px] space-x-4">
            <div className="w-1/2 space-y-5 justify-start text-white rounded-lg">
              <h6 className="text-base font-bold">
                GLOBAL ENGINEERING ACADEMY ELECTRONICS
              </h6>
              <p className="font-bold text-2xl">
                Welcome to our lerning platform, where we link all existing
                learning content for you as Engineering and Project Manager at
                HELLA Electronics
              </p>
              <div className="py-5">
                <Button variant="lightblue">EXPLORE MORE</Button>
              </div>
            </div>
            <div className="w-1/2 p-4 flex-col flex rounded-lg items-center">
              <Image
                src="/Academy_1.jpg"
                alt="home banner"
                width={286 * 1.5}
                height={190 * 1.5}
                className="absolute rounded-lg -bottom-4"
              />
            </div>
          </div>
        </div>
      </div>
      {/* max-w-[1300px] */}
      <CustomContainer className="">
        <div className="w-full flex ">
          <div className="w-1/2 ">
            <p className="font-bold text-2xl text-black py-14">
              What can you expect from our training plattform ?
            </p>

            <div className="relative bg-customblue w-[400px] h-[260px] rounded-md">
              <Image
                className="absolute bottom-2 left-3 rounded-sm"
                alt="image1"
                src="/Academy_3.jpg"
                width={429}
                height={285}
              />
            </div>
          </div>
          <div className="flex items-center w-1/2 justify-center py-14 pl-2">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/onboarding">
                <CustomCard
                  icon="gis:route"
                  title="Onboarding"
                  desc="Clear guidance for your first three month @Hella DE"
                />
              </Link>
              <Link href="/onboarding">
                <CustomCard
                  icon="gis:route"
                  title="Onboarding"
                  desc="Clear guidance for your first three month @Hella DE"
                />
              </Link>
              <Link href="/onboarding">
                <CustomCard
                  icon="gis:route"
                  title="Onboarding"
                  desc="Clear guidance for your first three month @Hella DE"
                />
              </Link>
              <Link href="/onboarding">
                <CustomCard
                  icon="gis:route"
                  title="Onboarding"
                  desc="Clear guidance for your first three month @Hella DE"
                />
              </Link>
            </div>
          </div>
        </div>
      </CustomContainer>

      <CustomContainer className="bg-white">
        <div className="flex justify-center">
          <CountUpAnimation start={0} end={100} text="Counter 1" />
          <CountUpAnimation start={0} end={100} text="Counter 1" />
          <CountUpAnimation start={0} end={100} text="Counter 1" />
          <CountUpAnimation start={0} end={100} text="Counter 1" />
        </div>
      </CustomContainer>

      <CustomContainer>
        <h1></h1>
      </CustomContainer>
    </main>
  );
}

const CustomCard = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col rounded-sm p-2 bg-customblue w-[205px]">
      <div className="flex justify-end ">
        <div className="bg-white rounded-full w-[40px] h-[40px] items-center justify-center flex">
          <Icon height={25} width={25} icon={icon} />
        </div>
      </div>
      <h6 className="font-bold text-lg text-white py-3">
        {title.toUpperCase()}
      </h6>
      <p className="text-sm text-white py-3">{desc}</p>
    </div>
  );
};
