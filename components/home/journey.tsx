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

export default function Journey() {
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

  const allTechnologies = [
    ...new Set(experiences.flatMap((exp) => exp.technologies)),
  ].sort();

  return (
    <section className="scroll-mt-24 py-16 md:py-24" id="experience">
      <div className="container px-4 md:px-6">
        <div className="mb-12">
          <div className="w-10 h-0.5 bg-accent mb-4" />
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-text">
            {t("experience.title")}
          </h2>
          <p className="font-body text-sm sm:text-base text-textSecondary mt-2 max-w-[480px]">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id}>
              <p className="font-mono text-xs mb-1.5 text-secondary">{exp.period}</p>
              <Card className="border-l-2 border-l-accent">
                <CardHeader className="pb-2">
                  <div>
                    <CardTitle className="text-lg sm:text-xl font-display font-extrabold">
                      {exp.title}
                    </CardTitle>
<CardDescription className="text-xs text-secondary font-medium">
                  {exp.company}
                </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-body text-sm text-text/80 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-1 list-disc list-inside font-body text-sm text-textSecondary">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="mb-4">
            <h3 className="font-display font-bold text-sm text-text">
              {t("experience.toolkit")}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech, i) => (
              <Badge key={i} className="font-mono text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
