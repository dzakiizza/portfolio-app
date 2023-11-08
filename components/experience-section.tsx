import { experienceConfig } from "@/config/experience";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import HeaderSection from "./header-section";
import MotionWrapper from "./motion-wrapper";

const CardExp = ({
  logo,
  position,
  company,
  period,
  desc,
  responsibilties,
  accomplishment,
}: {
  logo: string;
  position: string;
  company: string;
  period: string;
  desc: string;
  responsibilties: string[];
  accomplishment: string[];
}) => {
  return (
    <Card isBlurred className="w-full border-none h-full" shadow="sm">
      <CardBody className="relative flex w-full bg-default-50/70">
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-5 max-sm:items-center">
            <Avatar
              alt={company}
              src={logo}
              isBordered
              size="lg"
              radius="sm"
              color="secondary"
            />
            <div className="flex w-full justify-between gap-4 max-sm:flex-col">
              <div className="flex flex-col">
                <p className="text-xl font-semibold max-sm:text-lg">
                  {position}
                </p>
                <p className="text-lg text-gray-400 max-sm:text-sm">
                  {company}
                </p>
                <p className="text-md text-gray-500 max-sm:text-xs">{period}</p>
              </div>
            </div>
          </div>
          <p>{desc}</p>
          <Accordion selectionMode="multiple" isCompact>
            <AccordionItem
              key="1"
              aria-label="Responsibilities"
              title="Responsibilities"
              className="overflow-auto"
            >
              <ul className="list-inside list-disc">
                {responsibilties.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accomplishment"
              title="Accomplishment"
            >
              <ul className="list-inside list-disc">
                {accomplishment.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      </CardBody>
    </Card>
  );
};

const ExperienceSection = () => {
  return (
    <section className="relative flex flex-col items-center mb-20" id="experience">
      <MotionWrapper>
      <HeaderSection content="Experience" line="left"/>
        <div className="flex flex-col items-center gap-10">
          {experienceConfig.map((item, idx) => (
            <CardExp key={idx} {...item} />
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
};

export default ExperienceSection;
