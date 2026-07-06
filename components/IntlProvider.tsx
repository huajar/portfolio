"use client"

import dynamic from "next/dynamic";
const DynamicIntlProvider = dynamic(
  () => import("next-intl").then(mod => mod.NextIntlClientProvider),
  { ssr: false }
);
import { ReactNode, useState, useEffect } from 'react'

type Props = {
  children: ReactNode
}

export default function IntlProvider({ children }: Props) {
  const [locale, setLocale] = useState('en')
  const [messages, setMessages] = useState<Record<string, unknown> | null>(null)

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    }
    
    const savedLocale = getCookie('locale') || 'en'
    setLocale(savedLocale)
    
    import(`../messages/${savedLocale}.json`).then((localeModule) => {
      setMessages(localeModule.default)
    })
  }, [])

  const changeLocale = async (newLocale: string) => {
    setLocale(newLocale)
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`
    const localeModule = await import(`../messages/${newLocale}.json`)
    setMessages(localeModule.default)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as Window & typeof globalThis & { changeLocale?: (locale: string) => void }).changeLocale = changeLocale
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])


  if (!messages) {
    const defaultMessages = {
      navigation: {
        home: "Home",
        about: "About", 
        projects: "Projects",
        experience: "Experience"
      },
      header: {
        openToWork: "Open to work, let's connect!",
        menu: "Menu"
      },
      hero: {
        greeting: "👋 Hello!",
        title: "Full Stack",
        subtitle: "Developer",
        description: "A Systems Engineering student passionate about building end-to-end web solutions. I love experimenting with new technologies and constantly growing as a developer."
      },
      common: {
        loading: "Loading…",
        error: "An error occurred", 
        retry: "Try again",
        contact: "Contact",
        learnMore: "Learn more",
        viewProject: "View project",
        readMore: "Read more"
      }
    }
    return (
      <DynamicIntlProvider locale={locale} messages={defaultMessages}>
        {children}
      </DynamicIntlProvider>
    )
  }

  return (
    <DynamicIntlProvider locale={locale} messages={messages}>
      {children}
    </DynamicIntlProvider>
  )
}
