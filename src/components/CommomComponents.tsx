import { IconBaseProps, IconType } from "react-icons/lib";
import Heading from "./Heading";
import { useLanguage } from "./Language/LanguageProvider";
import { LanguageProps } from "./Text";

type GradientIcon = IconBaseProps & {
  Icon: IconType;
  id: string;
  size: number;
};

export const LinearGradientIcon = ({
  Icon,
  id,
  size,
  ...rest
}: GradientIcon) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      className="flex items-center justify-center"
    >
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="var(--first)" />
        <stop offset="50%" stopColor="var(--second)" />
        <stop offset="100%" stopColor="var(--third)" />
      </linearGradient>
      <Icon style={{ fill: `url(#${id})` }} size={size} {...rest} />
    </svg>
  );
};

export const TitleSection = ({
  title,
  className = "",
}: {
  title: LanguageProps;
  className?: string;
}) => {
  return (
    <Heading
      text={{
        English: title.English,
        Gujarati: title.Gujarati,
        Hindi: title.Hindi,
      }}
      size="xl"
      gradient={true}
      className={`text-center ${className}`}
    />
  );
};
