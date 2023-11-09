"use client";

import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import NextLink from "next/link";

import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleClick = React.useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <NextUINavbar
      maxWidth="xl"
      className="fixed  bg-default-50/70"
      shouldHideOnScroll={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <p className="font-bold text-inherit">DZAKI IZZA</p>
          </NextLink>
        </NavbarBrand>
        <ul className="ml-2 hidden justify-start gap-4 lg:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <p
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "hover:cursor-pointer"
                )}
                color="foreground"
                onClick={() => {
                  handleClick(item.href);
                }}
              >
                {item.label}
              </p>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <AiFillGithub className="text-default-500" size={22} />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin} aria-label="Github">
            <AiFillLinkedin className="text-default-500" size={22} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <p
                className="hover:cursor-pointer"
                onClick={async () => {
                  setTimeout(() => {
                    handleClick(item.href);
                  }, 100);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </p>
            </NavbarMenuItem>
          ))}
          <div className="flex gap-5 mt-10">
            <Link isExternal href={siteConfig.links.github} aria-label="Github">
              <AiFillGithub className="text-default-500" size={22} />
            </Link>
            <Link
              isExternal
              href={siteConfig.links.linkedin}
              aria-label="Github"
            >
              <AiFillLinkedin className="text-default-500" size={22} />
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
