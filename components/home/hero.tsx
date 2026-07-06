"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Button } from "@/components/ui/button";

function NetworkDiagram() {
  return (
    <div className="w-[360px] sm:w-[340px] md:w-[380px] lg:w-[400px] xl:w-[500px]" aria-hidden="true">
      <DotLottieReact
        src="/animations/Chemistry.lottie"
        autoplay
        loop
        renderConfig={{ autoResize: true }}
        className="w-full"
      />
    </div>
  );
}

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="scroll-mt-24 py-16 md:py-28" id="about">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-16">
          <div className="flex-1 max-w-2xl space-y-5">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight text-text">
              {t("headline")}
            </h1>
            <p className="font-body text-base sm:text-lg text-accent max-w-[480px]">
              {t("tagline")}
            </p>
            <p className="font-body text-sm sm:text-base text-textSecondary/80 max-w-[460px]">
              {t("description")}
            </p>
            <p className="font-body text-xs sm:text-sm text-textSecondary pt-1">
              {t("location")} <span className="text-border mx-1">·</span>{" "}
              <span className="font-medium" style={{ color: '#2A7D6C' }}>{t("status")}</span>
              <span className="text-border mx-2">—</span>{" "}
              {t("years_active")}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://github.com/huajar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://www.linkedin.com/in/rhuaja/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="mailto:rhuajamaita@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <NetworkDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
