import { subtitle, title } from "@/components/primitives";
import Reveal from "@/components/reveal";
import { aboutEduConfig, aboutSkillConfig } from "@/config/about";
import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";
import { Tab, Tabs } from "@nextui-org/tabs";
import clsx from "clsx";
import Carousel from "./carousel";

const AboutSection = () => {
  return (
    <section className="relative flex lg:h-1/2 flex-col items-center justify-center">
      <Reveal>
        <div className="relative flex w-full items-center justify-evenly">
          <h1 className={clsx(title(), "mx-4")}>About Me</h1>
          <Divider className="my-4 flex-1" />
        </div>
        <div className="flex items-start max-md:my-10 max-md:flex-col max-md:items-center">
          <Image
            alt="hero"
            src="/profile.jpg"
            isBlurred
            className="mt-6 w-[300px] max-md:w-[300px]"
            removeWrapper
          />
          <div className="container mx-auto flex-col space-y-6 overflow-hidden whitespace-nowrap p-6 max-md:flex max-md:p-0">
            <Card isBlurred>
              <CardBody className="whitespace-normal bg-default-50/70">
                <h2 className={subtitle({ className: "italic" })}>
                  {aboutSkillConfig.desc}
                </h2>
              </CardBody>
            </Card>
            <div className="flex w-full flex-col">
              <Tabs aria-label="Options" variant="underlined">
                <Tab key="skills" title="Skills">
                  <Card isBlurred>
                    <CardBody className="h-60 w-full max-w-full bg-default-50/70 max-lg:h-80 max-sm:h-96">
                      <ul className="grid grid-cols-3 gap-2 max-md:grid-cols-2">
                        {aboutSkillConfig.skill_list.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <item.icon />
                            <Spacer x={2} />
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="education" title="Educations">
                  <Card isBlurred>
                    <CardBody className="h-60 w-full max-w-full bg-default-50/70 max-lg:h-80 max-sm:h-96">
                      <Carousel contents={aboutEduConfig} />
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default AboutSection;
