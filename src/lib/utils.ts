import { defaultLang, ui } from "@/i18n/ui";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLangFromUrl(url: URL | Location) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) {
    return lang as keyof typeof ui;
  }
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof lang], ...values: string[]) {
    const translation = ui[lang][key] || ui[defaultLang][key];
    if (!values) return translation;
    return translation
      ? translation.replace(/{}/g, () => values.shift() || "")
      : "";
  };
}
