import { subtitle, title } from "@/components/primitives";
import Reveal from "@/components/reveal";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import clsx from "clsx";

const AboutSection = () => {
  return (
    <section className="relative flex h-full flex-col items-center justify-center">
      <Reveal>
        <div className="relative flex w-full items-center justify-evenly">
          <Divider className="my-4 flex-1" />
          <h1 className={clsx(title(), "mx-4")}>About Me</h1>
          <Divider className="my-4 flex-1" />
        </div>
        <div className="flex items-center">
          <div className="relative">
            <Image
              alt="hero"
              src="/profile.jpg"
              isBlurred
              isZoomed
              className="w-[300px] max-md:w-[200px]"
            />
          </div>

          <h2 className={subtitle({ className: "ml-6 mt-6" })}>
            Dzaki is a bachelor of Information System at BINUS University since
            February 2022. A Software engineer that highly passionate and
            interest in technology but also have interest in product design.
            Experienced in software development process from the concept or
            problem statement through development and deliver the end product as
            solution. Capable to work effectively with a different roles and
            team in dynamic environment. An eager learner who dedicated to
            improve and maintain tools, also learn new things to maximize
            productivity so that could get a better result or performance of
            product.
          </h2>
        </div>
      </Reveal>
    </section>
  );
};

export default AboutSection;
