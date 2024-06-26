import { ReactNode } from "react";
import { clsx } from "clsx";

import { Slot } from "@radix-ui/react-slot";

import { useLanguage } from "./Language/LanguageProvider";
import { LanguageProps } from "./Text";

type HeadingProps = {
  size?: "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  useDarkMode?: boolean;
  gradient?: boolean;
  text?: LanguageProps;
};

export default function Heading({
  size = "md",
  text,
  children,
  className,
  useDarkMode = true,
  gradient = false,
}: HeadingProps) {
  const { language } = useLanguage();

  return (
    <Slot
      className={clsx(
        {
          "text-xl": size === "sm",
          "text-xxl": size === "md",
          "text-2xl": size === "lg",
          "text-xlg": size === "xl",
        },
        useDarkMode ? "text-stone-900 dark:text-white" : "text-white",
        gradient ? "gradient-text bg-clip-text" : "",
        className
      )}
    >
      {children != null ? (
        children
      ) : (
        // <h2>{language === "English" ? text?.English : text?.Gujarati}</h2>
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
