import Text from "@/components/Text";
import clsx from "clsx";

import { BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";

import { IconFooter } from "./FooterStyled";

const Footer = ({ theme }: { theme: "dark" | "light" }) => {
  return (
    <footer
      className={clsx(
        "relative h-full flex items-center justify-center",
        theme == "dark" ? "dark bg-zinc-800" : "bg-gray-300"
      )}
    >
      <div className="w-full h-[2px] border-gradient-animate absolute make-animate left-0 top-0"></div>
      <div className="pt-4">
        <div className="flex items-center gap-5 justify-center mb-2 mt-2">
          <IconFooter
            href="https://www.linkedin.com/in/jigar-ahir-335073202/"
            Icon={BsLinkedin}
            color={"#2362c0"}
          />
          <IconFooter
            href="https://api.whatsapp.com"
            // href="https://api.whatsapp.com/send/?phone=5511993346502&type=phone_number"
            Icon={BsWhatsapp}
            color={"#0bcc15"}
          />
          <IconFooter
            href="https://twitter.com"
            // href="https://twitter.com/Iluminights"
            Icon={BsTwitter}
            color={"#14ade9"}
          />
        </div>
        <Text
          text={{
            Gujarati: "જીગર આહીર 2023 ©",
            English: "Jigar Ahir 2023 ©",
            Hindi: "जिगर अहीर 2023 ©",
          }}
          size="lg"
        />
      </div>
    </footer>
  );
};

export default Footer;
