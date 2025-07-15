import { cn, formatDuration } from "@/lib/utils";
import { CircleCheckBig, CircleX, Video } from "lucide-react";
import Link from "next/link";

type LesosnItemProps = {
  lesson: CourseLesson;
};

export const LessonItem = ({ lesson }: LesosnItemProps) => {
  const currentLessonId = "";
  const completed = false;

  const PrimaryIcon = completed ? CircleCheckBig : Video;
  const SecondaryIcon = completed ? CircleX : CircleCheckBig;

  return (
    <Link
      className={cn(
        "flex items-center gap-2 text-muted-foreground text-sm p-2 hover:bg-muted/50 transition-all rounded-md",
        lesson.id === currentLessonId && "text-white",
        completed && "text-primary"
      )}
      href={`/courses/course-slug/module-id/lesson/${lesson.id}`}
    >
      <button
        type="button"
        className="w-4 min-w-4 h-4 relative group/lesson-button"
      >
        <PrimaryIcon className="w-full h-full opaacity-100 group-hover/lesson-button:opacity-0" />
        <SecondaryIcon className="absolute inset-0 w-full h-full opacity-0 transition-all group-hover/lesson-button:opacity-100" />
      </button>
      <p className="line-clamp-1">{lesson.title}</p>
      <p className="text-xs text-muted-foreground ml-auto">
        {formatDuration(lesson.durationInMs)}
      </p>
    </Link>
  );
};
