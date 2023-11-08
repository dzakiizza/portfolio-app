import { projectsConfig } from "@/config/projects";
import HeaderSection from "./header-section";
import MotionWrapper from "./motion-wrapper";
import CardProject from "./project-card";
import { Tab, Tabs } from "@nextui-org/tabs";


const ProjectSection = () => {

  return (
    <section className="mb-20 flex flex-col items-center justify-center" id="project">
      <MotionWrapper>
        <HeaderSection content="Projects" line="right" />
        <div className="flex flex-col items-center gap-10">
          <Tabs aria-label="Projects">
            <Tab key="all" title="All">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {projectsConfig.map((project, idx) => (
                  <CardProject key={idx} {...project} />
                ))}
              </div>
            </Tab>
            <Tab key="design" title="Design">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {projectsConfig
                  .filter((item) => item.category === "Design")
                  .map((project, idx) => (
                    <CardProject key={idx} {...project} />
                  ))}
              </div>
            </Tab>
            <Tab key="tech" title="Tech">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {projectsConfig
                  .filter((item) => item.category === "Tech")
                  .map((project, idx) => (
                    <CardProject key={idx} {...project} />
                  ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </MotionWrapper>
    </section>
  );
};

export default ProjectSection;
