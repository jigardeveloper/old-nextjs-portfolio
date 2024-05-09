import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";
import { useLanguage } from "./Language/LanguageProvider";

export type TextProps = {
  size?: "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  useDarkMode?: boolean;
  gradient?: boolean;
  text?: LanguageProps;
};

export type LanguageProps = {
  English: string;
  Gujarati: string;
  Hindi: string;
};

export default function Text({
  size = "md",
  text,
  children,
  className,
  useDarkMode = true,
  gradient = false,
}: TextProps) {
  const { language } = useLanguage();

  return (
    <Slot
      className={clsx(
        "text-stone-900",
        {
          "text-sm": size === "sm",
          "text-md": size === "md",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
        },
        useDarkMode ? "dark:text-white" : "",
        gradient ? "gradient-text bg-clip-text" : "",
        className
      )}
    >
      {children != null ? (
        children
      ) : (
        // <p>{language === "English" ? text?.English : text?.Gujarati}</p>
        <p>
          {language === "English"
            ? text?.English
            : language === "ગુજરાતી"
            ? text?.Gujarati
            : language === "hindi"
            ? text?.Hindi
            : text?.English}
        </p>
      )}
    </Slot>
  );
}
