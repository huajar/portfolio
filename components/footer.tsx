"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-surface border-t border-border px-6 md:px-28 py-6 mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <p className="font-body text-sm font-medium text-textSecondary">
          {t("contact")}
        </p>
        <div className="flex items-center gap-1">
          <Button size="icon" variant="ghost" asChild>
            <Link href="https://www.linkedin.com/in/rhuaja/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <Link href="mailto:rhuajamaita@gmail.com" aria-label="Email">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2 font-body text-sm text-textSecondary">
        <span>{t("builtWith")}</span>
        <span className="mx-1">·</span>
        <span>{t("sourceCode")}</span>
        <Link
          href="https://github.com/huajar/neobrutalism-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#2A7D6C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}
