"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "@/hooks/useTranslations";

export default function FeaturedProjects() {
  const t = useTranslations("projects");
  const projects = [
    {
      title: t("0.title"),
      description: t("0.description"),
      image: "/AlKitab.webp",
      technologies: ["Django", "PostgreSQL", "HTML5", "CSS"],
      deployLink: "",
      demoLink: "https://alkitab.media/",
      repoLink: "",
      completedDate: t("0.completedDate"),
    },
    {
      title: t("1.title"),
      description: t("1.description"),
      image: "/ediciones-lucentia.webp",
      technologies: ["WordPress"],
      deployLink: "https://edicioneslucentia.com/",
      demoLink: "",
      repoLink: "",
      completedDate: t("1.completedDate"),
    },
    {
      title: t("2.title"),
      description: t("2.description"),
      image: "/AOTM.webp",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      deployLink: "https://adventistonthemap.com/",
      demoLink: "",
      repoLink: "",
      completedDate: t("2.completedDate"),
    },
    {
      title: t("3.title"),
      description: t("3.description"),
      image: "/Profeteia.webp",
      technologies: ["WordPress", "WooCommerce"],
      deployLink: "https://profeteia.com/",
      demoLink: "",
      repoLink: "",
      completedDate: t("3.completedDate"),
    },
    {
      title: t("4.title"),
      description: t("4.description"),
      image: "/friendslanguage.webp",
      technologies: [
        "Next.js",
        "MongoDB",
        "Prisma",
        "Tailwind CSS",
        "TypeScript",
      ],
      deployLink: "",
      demoLink: "https://friendslanguage.club/",
      repoLink: "",
      completedDate: t("4.completedDate"),
    },
  ];

  return (
    <section className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="w-10 h-0.5 bg-accent mb-4" />
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-text">
            {t("title")}
          </h2>
          <p className="font-body text-sm sm:text-base text-textSecondary mt-2 max-w-[480px]">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col">
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-40 object-cover object-top border-b border-border"
                />
                {project.completedDate && (
                  <div className="absolute bottom-1.5 right-1.5 bg-surface/80 px-1.5 py-0.5 font-mono text-xs text-secondary">
                    {project.completedDate}
                  </div>
                )}
              </div>
              <CardContent className="flex-grow flex flex-col gap-2 pt-3">
                <h3 className="font-display font-extrabold text-lg sm:text-xl leading-tight text-text">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-textSecondary leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {(() => {
                  const link = project.deployLink || project.demoLink;
                  if (link) {
                    return (
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title}`}
                        className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-secondary hover:text-secondary/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      >
                        Visit site
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    );
                  }
                  return null;
                })()}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
