import { projectsConfig } from "@/config/projects";
import HeaderSection from "./header-section";
import MotionWrapper from "./motion-wrapper";
import CardProject from "./project-card";

const ProjectSection = () => {
  return (
    <section className="flex flex-col items-center justify-center mb-20">
      <MotionWrapper>
        <HeaderSection content="Projects" line="right" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projectsConfig.map((project, idx) => (
            <CardProject key={idx} {...project} />
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
};

export default ProjectSection;
