type Course = import("@/generated/prisma").Course;
type CourseTag = import("@/generated/prisma").CourseTag;
type CourseModule = import("@/generated/prisma").CourseModule;
type CourseLesson = import("@/generated/prisma").CourseLesson;
type CompletedLessons = import("@/generated/prisma").CompletedLesson;

type CourseWithTagsAndModules = Course & {
  tags: CourseTag[];
  modules: CourseModule[];
};

type CourseModulesWithLessons = CourseModule & {
  lessons: CourseLesson[];
};

type CourseWithModulesAndLessons = Course & {
  modules: CourseModulesWithLessons[];
};
