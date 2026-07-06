"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MaxWidthWrapperNavbar from "./MaxWidthWrapperNavbar";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "@/hooks/useTranslations";

export function Header() {
  const pathname = usePathname();
  const t = useTranslations();

  const array = [
    {
      name: t("navigation.about"),
      href: "#about",
    },
    {
      name: t("navigation.experience"),
      href: "#experience",
    },
    {
      name: t("navigation.projects"),
      href: "#projects",
    },
  ];

  return (
    <MaxWidthWrapperNavbar className="sticky top-0 z-50 mt-2">
      <div className="w-full h-14 bg-surface border-b-2 border-border flex items-center xl:grid xl:grid-cols-3">
        <Link
          href="/"
          aria-label="Rodrigo home"
          className="block pl-5 text-2xl font-display font-extrabold tracking-tight text-text hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          rodrigo
        </Link>
        <nav aria-label="Primary" className="hidden xl:flex gap-8 items-center justify-center h-full">
          {array.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center w-fit justify-center max-sm:text-xs font-body font-medium text-textSecondary hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:flex gap-2 items-center justify-end">
          <LanguageSwitcher className="bg-transparent text-text border border-border hover:bg-surface mr-5" />
        </div>
        <div className="xl:hidden h-full ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="h-full rounded-none"
                aria-label={t("header.menu")}
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{t("header.menu")}</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile primary" className="grid mt-5 border border-border overflow-hidden">
                {array.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center h-14 px-4 font-body font-medium text-textSecondary hover:text-text hover:bg-accent/5 transition-colors border-l-0 border-t-0 border-r-0 border-b border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset",
                        pathname === item.href ? "text-text bg-accent/5" : ""
                      )}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetFooter className="mt-5 gap-4 md:flex md:flex-col">
                <LanguageSwitcher className="w-full bg-transparent text-text border border-border hover:bg-surface" />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </MaxWidthWrapperNavbar>
  );
}
