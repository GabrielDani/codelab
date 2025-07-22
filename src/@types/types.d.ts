type Course = import("@/generated/prisma").Course;
type CourseTag = import("@/generated/prisma").CourseTag;
type CourseModule = import("@/generated/prisma").CourseModule;
type CourseLesson = import("@/generated/prisma").CourseLesson;
type CompletedLessons = import("@/generated/prisma").CompletedLesson;
type LessonComment = import("@/generated/prisma").LessonComment;
type User = import("@/generated/prisma").User;

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

type LessonCommentWithUserAndReplies = LessonComment & {
  user: User;
  replies?: LessonCommentWithUserAndReplies[];
};
