import { ProjectConfigProps } from "@/config/projects";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Code } from "@nextui-org/code";
import { Image } from "@nextui-org/image";
import { useDisclosure } from "@nextui-org/modal";
import ModalProject from "./project-modal";

const CardProject = (props: ProjectConfigProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { thumbnail, title, description, category, type, skills } = props;
  return (
    <>
      <Card isPressable isHoverable className="w-full" onClick={onOpen}>
        <CardBody className="box-border flex-1 overflow-hidden bg-default-50/70 p-0">
          <Image
            removeWrapper
            isZoomed
            alt="Thumbnail"
            className="h-full w-full object-fill"
            src={thumbnail}
          />
        </CardBody>

        <CardFooter className="flex h-full flex-1 flex-col justify-between p-4">
          <div className="flex flex-col items-center gap-2">
            <div className="mb-2 flex gap-4">
              <Code color="secondary" size="sm">
                <p className="text-xs">{type}</p>
              </Code>
              <Code color="primary" size="sm">
                <p className="text-xs">{category}</p>
              </Code>
            </div>

            <p className="text-sm font-semibold">{title}</p>
            <p className="line-clamp-3 text-xs text-neutral-400">
              {description}
            </p>
          </div>
          <p className="mt-5 text-xs text-neutral-500">{skills.join(" • ")}</p>
        </CardFooter>
      </Card>
      <ModalProject isOpen={isOpen} onClose={onClose} {...props} />
    </>
  );
};

export default CardProject;
