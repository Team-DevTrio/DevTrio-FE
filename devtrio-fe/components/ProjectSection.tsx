import React from "react";
import Image from "next/image";
import ProjectCardIcon from "@/public/images/projectCardIcon.png";
import WorkSectionIcon from "@/public/images/WorkSection.png";

interface Project {
  title: string;
  subTitle: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Sample Project 1",
    subTitle: "Sub Title",
    tags: ["Web Master", "Web Design", "Animation", "Motion Design"],
    link: "#",
  },
  {
    title: "Sample Project 2",
    subTitle: "Sub Title",
    tags: ["Web Master", "Web Design", "Animation", "Mobile Design"],
    link: "#",
  },
  {
    title: "Sample Project 3",
    subTitle: "Sub Title",
    tags: ["Web Master", "Web Design", "Animation", "Motion Design"],
    link: "#",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="bg-secondary-400 p-1 mt-10 ">
      <h2 className="text-5xl font-bold text-center mb-4 text-black">
        What we have done
      </h2>
      <div className="flex justify-center items-center mb-10">
        <Image
          src={WorkSectionIcon}
          alt="logo-lg"
          height="12"
          width="12"
          priority
        />
        <h2 className="text-base font-normal text-center text-black mx-2">
          Our Work
        </h2>
        <Image
          src={WorkSectionIcon}
          alt="logo-lg"
          height="12"
          width="12"
          priority
        />
      </div>

      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-box flex flex-col">
            <div
              key={index}
              className={`project-box ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="project-card flex flex-col justify-between h-full px-4 py-8 ">
                <div className="flex items-center mb-4">
                  <div className="w-full">
                    <div className="flex justify-between items-center project-title text-xl font-bold">
                      <div>{project.title}</div>
                      <Image
                        src={ProjectCardIcon}
                        alt={"ProjectCardIcon"}
                        height="24"
                        width="24"
                        className="flex-shrink-0"
                      />
                    </div>
                    <div className="project-subTitle pt-2 text-sm text-gray-500 text-start">
                      {project.subTitle}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-1">
                    <ul className="space-y-2 text-start">
                      {project.tags.map((tag, idx) => (
                        <li key={idx} className="text-base text-black">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 flex justify-end items-end">
                    <a
                      href={project.link}
                      className="explore-button bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                      Explore ➔
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="flex justify-center mt-10 text-base text-gray-500 font-light">
          {`From our most innovative solutions to the creative projects we've
          crafted, explore everything we're proud to showcase.`}
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="#"
            className="explore-button bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            All projects ➔
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
