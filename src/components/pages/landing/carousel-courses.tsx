import { CheckCircle, Laptop, GraduationCap } from "lucide-react";
import { DraggableScroll } from "@/components/shared/draggable-scroll";
import Image from "next/image";

type CarouselCoursesProps = {
  courses: Course[];
};

export const CarouselCourses = ({ courses }: CarouselCoursesProps) => {
  const items = [
    { icon: Laptop, text: "Aprenda com projetos reais" },
    { icon: CheckCircle, text: "Suporte individual" },
    { icon: GraduationCap, text: "Certificado de conclusão" },
  ];

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg text-muted-foreground">Cursos Disponíveis</h2>
      <DraggableScroll className="w-full flex gap-5 overflow-auto scroll-hidden mask-r-from-80% pr-28 outline-none">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex-shrink-0 border rounded-lg bg-card overflow-hidden hover:border-primary transition-all"
          >
            <Image
              src={course.thumbnail}
              alt={`Thumbnail do curso ${course.title}`}
              width={400}
              height={200}
              className="w-full h-[160px] min-w-[250px] object-cover"
            />
            <h3 className="my-5 font-bold text-sm text-center select-none">
              {course.title}
            </h3>
          </div>
        ))}
      </DraggableScroll>
      <ul className="mt-2 flex flex-col md:flex-row md:justify-between gap-4 text-muted-foreground">
        {items.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-primary" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
