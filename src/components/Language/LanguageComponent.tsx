import { IoLanguage } from "react-icons/io5";

import Text from "../Text";
import { useLanguage } from "./LanguageProvider";

const LanguageComponent = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      onClick={() =>
        // setLanguage(language === "ગુજરાતી" ? "English" : "ગુજરાતી")
        {
          if (language === "English") {
            setLanguage("ગુજરાતી");
          } else if (language === "ગુજરાતી") {
            setLanguage("hindi");
          } else {
            setLanguage("English");
          }
        }
      }
      className="flex cursor-pointer text-stone-900 bg-gray-300 items-center gap-1 justify-center rounded-lg dark:bg-slate-900 dark:text-white px-2 py-1 mb-3 transition-all duration-200 hover:scale-105"
    >
      <IoLanguage size={20} />
      <Text
        text={{
          English: language,
          Gujarati: language,
          Hindi: language,
        }}
        size="md"
      />
    </div>
  );
};

export default LanguageComponent;
