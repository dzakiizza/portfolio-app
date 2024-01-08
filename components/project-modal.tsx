import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { ProjectConfigProps } from "@/config/projects";
import { Image } from "@nextui-org/image";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { AiFillGithub, AiTwotoneFileAdd } from "react-icons/ai";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { BiLinkExternal } from "react-icons/bi";

const ModalProject = ({
  title,
  thumbnail,
  description,
  type,
  category,
  skills,
  links,
  isOpen,
  onClose,
}: ProjectConfigProps & { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal
      backdrop={"blur"}
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      placement="bottom-center"
      scrollBehavior="inside"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 py-6">
              {title}
            </ModalHeader>
            <ModalBody>
              {/* <iframe
                height={400}
                src="https://www.youtube.com/embed/rjmTeHsRziw?si=aFePmZpPKcICCuCB"
                title="YouTube video player"
                allowFullScreen
              /> */}
              <Image
                alt="Thumbnail"
                className="h-full w-full object-fill"
                src={thumbnail}
              />
              <div className="flex gap-4">
                <Code color="secondary" size="sm">
                  <p className="text-xs">{type}</p>
                </Code>
                <Code color="primary" size="sm">
                  <p className="text-xs">{category}</p>
                </Code>
              </div>
              <p>{description}</p>
              <p className="mt-5 text-sm text-neutral-500">
                {skills.join(" • ")}
              </p>
            </ModalBody>
            <ModalFooter className="flex flex-col gap-4 py-6">
              {links.github && (
                <Link
                  isExternal
                  as={NextLink}
                  className={buttonStyles({
                    variant: "light",
                    radius: "full",
                  })}
                  href={links.github}
                >
                  <AiFillGithub size={20} />
                  GitHub
                </Link>
              )}

              {links.detail && (
                <Link
                  isExternal
                  as={NextLink}
                  className={buttonStyles({
                    radius: "full",
                    variant: "faded",
                  })}
                  href={links.detail}
                >
                  <AiTwotoneFileAdd size={20} />
                  Detail
                </Link>
              )}

              {links.visit && (
                <Link
                  isExternal
                  as={NextLink}
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "solid",
                  })}
                  href={links.visit}
                >
                  <BiLinkExternal size={20} />
                  Visit
                </Link>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalProject;
