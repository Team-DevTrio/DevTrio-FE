import React from "react";
import Image from "next/image";
import ProjectCardIcon from "@/public/images/projectCardIcon.png";
import WorkSectionIcon from "@/public/images/WorkSection.png";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";


interface Project {
  title: string;
  subTitle: string;
  tags: string[];
  link: string;
  images: any; // Add an images field for the carousel
}

const projects: Project[] = [
  {
    title: "Binge",
    subTitle:
      "The Online Golf League Platform allows golfers to register, submit gameplay videos, and compete in virtual tournaments. Using OpenCV for video analysis and Stripe for secure payments, it offers real-time leaderboards and fosters an engaging online community.",
    tags: [
      "JavaScript",
      "React.js",
      "Tailwindcss",
      "Redux",
      "React Router",
      "Python",
      "Django",
      "MongoDB",
      "Stripe",
      "OpenCV",
    ],
    link: "#",
    images: ["/path/to/image1.jpg", "/path/to/image2.jpg", "/path/to/image3.jpg"],
  },
  {
    title: "StyleFusion",
    subTitle:
      "This app is a fabric selection tool that lets users choose various garment styles and preview combinations in real time. It integrates with Firebase for image storage and uses SQLite for local data management, allowing users to download their customized designs easily.",
    tags: [
      "Xamarin.Forms",
      "C#",
      "Firebase Storage",
      "SQLite",
      "XAML",
      "Microsoft Visual Studio",
    ],
    link: "#",
    images: ["/path/to/image4.jpg", "/path/to/image5.jpg"],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="bg-secondary-400 p-1 mt-10 ">
      <h2 className="text-5xl font-bold text-center mb-4 text-black">What we have done</h2>
      <div className="flex justify-center items-center mb-10">
        <Image src={WorkSectionIcon} alt="logo-lg" height="12" width="12" priority />
        <h2 className="text-base font-normal text-center text-black mx-2">Our Work</h2>
        <Image src={WorkSectionIcon} alt="logo-lg" height="12" width="12" priority />
      </div>

      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-box flex flex-col mb-10">
            <div className="project-box flex">
              {index % 2 === 0 ? (
                <>
                  <div className="project-card flex flex-col justify-between h-full px-4 py-8 mx-2 ">
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
                        <div className="project-subTitle pt-4 text-sm text-gray-500 text-justify">
                          {project.subTitle}
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-1">
                        <ul className="space-y-2 text-start">
                          {project.tags.map((tag, idx) => (
                            <li key={idx} className="text-base text-black">{tag}</li>
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
                  <div className="project-card2 flex flex-col justify-between h-full px-4 py-8 mx-2">
                    {/* <Carousel>
                      <CarouselPrevious />
                      <CarouselContent>
                        {project.images.map((image, idx) => (
                          <CarouselItem key={idx}>
                            <Image src={image} alt={`Project image ${idx + 1}`} width={400} height={300} className="object-cover" />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselNext />
                    </Carousel> */}
                  </div>
                </>
              ) : (
                <>
                  <div className="project-card2 flex flex-col justify-between h-full px-4 py-8 mx-2">
                    {/* <Carousel>
                      <CarouselPrevious />
                      <CarouselContent>
                        {project.images.map((image, idx) => (
                          <CarouselItem key={idx}>
                            <Image src={image} alt={`Project image ${idx + 1}`} width={400} height={300} className="object-cover" />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselNext />
                    </Carousel> */}
                  </div>
                  <div className="project-card flex flex-col justify-between h-full px-4 py-8 mx-2 ">
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
                        <div className="project-subTitle pt-4 text-sm text-gray-500 text-justify">
                          {project.subTitle}
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-1">
                        <ul className="space-y-2 text-start">
                          {project.tags.map((tag, idx) => (
                            <li key={idx} className="text-base text-black">{tag}</li>
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
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="flex justify-center mt-10 text-base text-gray-500 font-light">
          {`From our most innovative solutions to the creative projects we've crafted, explore everything we're proud to showcase.`}
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
