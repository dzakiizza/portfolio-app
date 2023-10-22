"use client";

import ParticlesContainer from "@/components/particles-container";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-between max-md:flex-col lg:flex-row">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="z-20 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg justify-center text-center">
            <h1 className={title()}>Hi, I am Dzaki Izza</h1>
            <br />
            <h1 className={title({ color: "yellow" })}>
              <TypeAnimation
                sequence={["Web Developer", 1500, "UI/UX Designer", 1500]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />{" "}
            </h1>
            <h2 className={subtitle({ className: "mt-4" })}>
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
      </motion.div>
      <ParticlesContainer />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          alt="hero"
          src="/profile.jpg"
          isBlurred
          isZoomed
          className="w-[400px] max-md:w-[300px]"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
