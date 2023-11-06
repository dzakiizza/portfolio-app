import { Divider } from "@nextui-org/divider";
import React from "react";
import { title } from "../app/lib/primitives";
import clsx from "clsx";

const HeaderSection = ({
  content = "section",
  line = "left",
}: {
  content?: string;
  line?: "left" | "right";
}) => {
  return (
    <div className="relative my-10 flex w-full items-center justify-evenly">
      {line === "left" && <Divider className="my-4 flex-1" />}
      <h1 className={clsx(title(), "mx-4")}>{content}</h1>
      {line === "right" && <Divider className="my-4 flex-1" />}
    </div>
  );
};

export default HeaderSection;
