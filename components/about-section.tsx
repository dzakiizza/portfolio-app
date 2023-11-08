import { subtitle } from "@/app/lib/primitives";
import MotionWrapper from "@/components/motion-wrapper";
import { aboutEduConfig, aboutSkillConfig } from "@/config/about";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";
import { Tab, Tabs } from "@nextui-org/tabs";
import Carousel from "./carousel";
import HeaderSection from "./header-section";
import { SwiperSlide } from "swiper/react";

const AboutSection = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center mb-20" id="about">
      <MotionWrapper>
        <HeaderSection content="About Me" line="right" />
        <div className="flex items-start max-md:flex-col max-md:items-center">
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
                      <Carousel>
                        {aboutEduConfig.map((content, idx) => (
                          <SwiperSlide
                            style={{ width: "100%", maxWidth: "100%" }}
                            key={idx}
                          >
                            <div className="flex h-full w-full flex-col">
                              <div className="mb-1 flex flex-wrap items-center justify-between max-sm:mb-2">
                                <p className="whitespace-normal text-lg font-semibold text-blue-400 max-md:text-base">
                                  {content?.title}
                                </p>
                                <p className="text-gray-400">
                                  {content?.period}
                                </p>
                              </div>
                              <div className="flex flex-wrap items-center justify-between">
                                <p className="whitespace-normal text-base font-semibold max-md:text-sm">
                                  {content?.subtitle}
                                </p>
                                <p className="text-gray-400">
                                  {content?.status}
                                </p>
                              </div>
                              <p className="mt-5 whitespace-normal max-lg:mt-3">
                                {content.desc}
                              </p>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Carousel>
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
};

export default AboutSection;
