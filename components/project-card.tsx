import { ProjectConfigProps } from "@/config/projects";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Code } from "@nextui-org/code";

const CardProject = ({
  thumbnail,
  title,
  description,
  category,
  type,
  skills,
}: ProjectConfigProps) => {
  return (
    <Card isPressable isHoverable className="w-full">
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
          <p className="text-xs text-neutral-400">{description}</p>
        </div>
        <p className="mt-5 text-xs text-neutral-500">{skills.join(" • ")}</p>
      </CardFooter>
    </Card>
  );
};

export default CardProject;
