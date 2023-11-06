"use client";

import ParticlesContainer from "@/components/particles-container";
import { subtitle, title } from "@/app/lib/primitives";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import MotionWrapper from "./motion-wrapper";

const HeroSection = () => {
  return (
    <section className="relative flex items-center max-sm:h-1/6 max-sm:flex-col max-sm:justify-start md:h-1/4 lg:h-screen max-sm:mt-20">
      <MotionWrapper>
        <div className="relative z-20 flex flex-col items-center justify-center gap-10 py-8 md:py-1">
          <div className="inline-block max-w-lg justify-center text-center">
            <h1 className={title()}>Hi, I am Dzaki Izza</h1>
            <br />
            <h1 className={title({ color: "violet" })}>
              <TypeAnimation
                sequence={["Web Developer", 1500, "UI/UX Designer", 1500]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />{" "}
            </h1>
            <h2 className={subtitle({ className: "mt-6" })}>
              A Software engineer that highly passionate and interest in
              technology but also have interest in product design.
            </h2>
          </div>

          <div className="flex gap-3">
            <Link
              isExternal
              as={NextLink}
              target="_blank"
              href={siteConfig.links.resume}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              Check Resume
            </Link>
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <AiFillGithub size={20} />
              GitHub
            </Link>
          </div>
        </div>
      </MotionWrapper>
      <ParticlesContainer />
    </section>
  );
};

export default HeroSection;
