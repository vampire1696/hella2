import CustomContainer from "@/components/CustomContainer";
import FormUpload from "@/components/FormUpload";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import React from "react";

const NewProposals = () => {
  return (
    <div>
      {/* -----------------Banner --------------- */}
      <CustomContainer className="bg-lightblue">
        <div className="w-full flex text-black">
          <div className="w-[70%] space-y-5 justify-start rounded-lg">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/new-proposals">
                    New Proposals
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h6 className="text-2xl font-bold">New Proposals</h6>
            <p className="text-sm font-semibold">
              Welcome to our Onboarding portal for D&D and PjM in the business
              group Electronics. This site will give you clear guidance, which
              topics are important for employees during the first three months.
            </p>
            <p className="text-sm font-semibold">
              On the one site, direct links to trainings in My Talent Compass
              are highlighted. These have to assigned by the group leaders.
            </p>
            <p className="text-sm font-semibold">
              On the other site, linkages to guidelines are given which can be
              used as flexible self-studies.
            </p>
          </div>
          <div className="w-[30%] p-4 flex-col flex rounded-lg items-center">
            <Image
              src="/pexels.jpg"
              alt="home banner"
              width={286 * 1.5}
              height={190 * 1.5}
              className="rounded-lg "
            />
          </div>
        </div>
      </CustomContainer>
      <div className="pt-7">
        <FormUpload />
      </div>
    </div>
  );
};

export default NewProposals;
