"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "@/hooks/useTranslations";

export default function Experience() {
  const t = useTranslations();

  const experiences = [
    {
      id: 1,
      title: t("experience.experiences.1.title"),
      company: t("experience.experiences.1.company"),
      period: t("experience.experiences.1.period"),
      description: t("experience.experiences.1.description"),
      achievements: [
        t("experience.experiences.1.achievements.0"),
        t("experience.experiences.1.achievements.1"),
      ],
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "HTML",
        "CSS",
        "Nginx",
        "Docker",
      ],
    },
    {
      id: 2,
      title: t("experience.experiences.2.title"),
      company: t("experience.experiences.2.company"),
      period: t("experience.experiences.2.period"),
      description: t("experience.experiences.2.description"),
      achievements: [
        t("experience.experiences.2.achievements.0"),
        t("experience.experiences.2.achievements.1"),
        t("experience.experiences.2.achievements.2"),
        t("experience.experiences.2.achievements.3"),
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "WordPress",
        "WooCommerce",
      ],
    },
    {
      id: 3,
      title: t("experience.experiences.3.title"),
      company: t("experience.experiences.3.company"),
      period: t("experience.experiences.3.period"),
      description: t("experience.experiences.3.description"),
      achievements: [
        t("experience.experiences.3.achievements.0"),
        t("experience.experiences.3.achievements.1"),
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "MongoDB",
        "Prisma",
      ],
    },
  ];

  return (
    <section className="scroll-mt-24 py-24" id="experience">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-4">
            <Badge
              variant="neutral"
              className={`text-base font-medium justify-center items-center py-0 [box-shadow:4px_4px_0px_0px_#000] border-black border-4 `}
            >
              {t("experience.badge")}
            </Badge>
            <h2
              className={`text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:2px_2px_0px_#FD9745]`}
            >
              {t("experience.title")}
            </h2>
            <p className="text-base font-base max-w-[600px]">
              {t("experience.subtitle")}
            </p>
          </div>
        </div>
        <div className="mt-0 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id}>
              <Card className="border-4">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className={`text-2xl font-black`}>
                        {exp.title}
                      </CardTitle>
                      <CardDescription
                        className={`text-lg font-medium text-primary`}
                      >
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div
                      className={`text-sm font-medium text-muted-foreground bg-muted mt-1 rounded-full w-fit`}
                    >
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-4 font-base">{exp.description}</p>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">
                      {t("experience.keyAchievements")}
                    </p>
                    <ul className="space-y-1 list-disc list-inside font-base text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="neutral"
                        className={`font-base border-4`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
