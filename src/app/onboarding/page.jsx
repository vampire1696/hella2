import CustomContainer from "@/components/CustomContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Onboarding = () => {
  return (
    <section>
      <CustomContainer className="bg-customgray">
        <div className="w-full flex text-black">
          <div className="w-[70%] space-y-5 justify-start rounded-lg">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/onboarding">Onboarding</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h6 className="text-2xl font-bold">Onboarding</h6>
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
              src="/Onboarding-1.png"
              alt="home banner"
              width={286 * 1.5}
              height={190 * 1.5}
              className="rounded-lg "
            />
          </div>
        </div>
      </CustomContainer>
      {/* ------------------Accordion----------------------- */}
      <CustomContainer className="bg-white mt-16 ">
        <Accordion
          type="single"
          defaultValue="item-2"
          collapsible
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Get in touch with Hella</AccordionTrigger>
            <AccordionContent>
              <p>Get in touch with Hella</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Onboarding for each domain</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-4 gap-x-20 gap-y-10 py-5">
                <Button variant="customblue">Mechanical Design</Button>
                <Button variant="customblue">Hardware</Button>
                <Button variant="customblue">Software</Button>
                <Button variant="customblue">System</Button>
                <Button variant="customblue">Testing</Button>
                <Button variant="customblue">Project Management</Button>
                <Button variant="customblue">Product Safety</Button>
                <Button variant="customblue">Quality Development</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>FAQs</AccordionTrigger>
            <AccordionContent>
              Yes. Its animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CustomContainer>
    </section>
  );
};

export default Onboarding;
