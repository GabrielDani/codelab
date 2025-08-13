import { getAllCourses } from "@/actions/courses";
import { CarouselCourses } from "@/components/pages/landing/carousel-courses";
import { Testimonials } from "@/components/pages/landing/testimonials";
import { Header } from "@/components/pages/landing/header";
import { Hero } from "@/components/pages/landing/hero";
import { Separator } from "@/components/ui/separator";
import { LandingForm } from "@/components/pages/landing/landing-form";

export default async function LandingPage() {
  const courses = await getAllCourses();
  return (
    <>
      <Header />
      <main className="pt-[100px] max-w-6xl mx-auto overflow-auto p-10 flex flex-col gap-10">
        <Hero />
        <CarouselCourses courses={courses} />
        <Separator />
        <div className="w-full grid md:grid-cols-2 gap-10">
          <Testimonials />
          <LandingForm />
        </div>
      </main>
    </>
  );
}

// Mostrar a mensagem em notificação
