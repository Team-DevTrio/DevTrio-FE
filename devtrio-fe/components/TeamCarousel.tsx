import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { EmployeeCard } from "./EmployeeCard";
import { employeeList } from "@/data/employees";

export function TeamCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className="gap-2">
        {employeeList.map((employee) => (
          <CarouselItem key={employee.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <EmployeeCard
                name={employee.name}
                description={employee.description}
                imgSrc={employee.imgSrc}
                url={employee.url}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
