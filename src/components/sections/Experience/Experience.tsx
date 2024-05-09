import Avatar from "../../../assets/Avatar3.png";
// import Avatar from "../../../assets/Avatar.png";

import { motion } from "framer";
import Button from "../../Button/Button";
import Heading from "../../Heading";
import Text from "../../Text";
import ContainerCommom from "@/components/ContainerCommom";
import {
  LinearGradientIcon,
  TitleSection,
} from "@/components/CommomComponents";
import { Player } from "@lottiefiles/react-lottie-player";
import { MdDeveloperMode } from "react-icons/md";

const Experience = () => {
  return (
    <ContainerCommom id="Sobre">
      <div>
        <TitleSection
          title={{
            English: "Experience",
            Gujarati: "અનુભવ",
            Hindi: "अनुभव",
          }}
        />
        <div className="flex items-center justify-center w-full flex-col lg:flex-row mt-12">
          <motion.div
            className="flex w-full items-center justify-center mt-12 lg:w-[25%]"
            initial={{ x: 110, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_4rq0nvpt.json"
              style={{ height: 420, width: 520 }}
            ></Player>
          </motion.div>
          <motion.div
            className="flex w-[90%] flex-col justify-center items-center lg:w-[45%]"
            initial={{ y: 110, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div
              style={{ marginLeft: "190px" }}
              className={`mt-6 mb-6 flex Card-Gradient z-[1] relative transition-all duration-300 before:rounded-lg after:rounded-lg hover:scale-[1.02] `}
            >
              <div className="flex ml-[6px] mt-[6px] flex-col px-6 py-3 rounded-md bg-gray-200 items-center justify-center dark:bg-zinc-900">
                <Heading
                  text={{
                    Gujarati: "બેકએન્ડ ડેવલપમેન્ટ",
                    English: "Software Engineer",
                    Hindi: "बैकएंड विकास",
                  }}
                  size="md"
                  className="text-center"
                  gradient={true}
                />
                <Text
                  text={{
                    Gujarati: "બેકએન્ડ ડેવલપમેન્ટ",
                    English: "Teton Private Limited",
                    Hindi: "बैकएंड विकास",
                  }}
                  size="md"
                  className="text-center px-2"
                />
              </div>
            </div>
            <div
              style={{ marginLeft: "190px" }}
              className={`mb-6 flex Card-Gradient z-[1] relative transition-all duration-300 before:rounded-lg after:rounded-lg hover:scale-[1.02] `}
            >
              <div className="flex ml-[6px] mt-[6px] flex-col px-6 py-3 rounded-md bg-gray-200 items-center justify-center dark:bg-zinc-900">
                <Heading
                  text={{
                    Gujarati: "બેકએન્ડ ડેવલપમેન્ટ",
                    English: "Full-Stack Developer",
                    Hindi: "बैकएंड विकास",
                  }}
                  size="md"
                  className="text-center"
                  gradient={true}
                />
                <Text
                  text={{
                    Gujarati: "બેકએન્ડ ડેવલપમેન્ટ",
                    English: "Fiverr(freelance)",
                    Hindi: "बैकएंड विकास",
                  }}
                  size="md"
                  className="text-center px-2"
                />
              </div>
            </div>
            <div
              style={{ marginLeft: "190px" }}
              className={`flex Card-Gradient z-[1] relative transition-all duration-300 before:rounded-lg after:rounded-lg hover:scale-[1.02] `}
            >
              <div className="flex ml-[6px] mt-[6px] flex-col px-6 py-3 rounded-md bg-gray-200 items-center justify-center dark:bg-zinc-900">
                <Heading
                  text={{
                    Gujarati: "બેકએન્ડ ડેવલપમેન્ટ",
                    English: "Self Learning",
                    Hindi: "बैकएंड विकास",
                  }}
                  size="md"
                  className="text-center"
                  gradient={true}
                />
                <Text
                  text={{
                    Gujarati: "બેકએન્ડ ડેવલપમેન્ટ",
                    English: "Learning New Technology For Everyday",
                    Hindi: "बैकएंड विकास",
                  }}
                  size="md"
                  className="text-center px-2"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ContainerCommom>
  );
};

export default Experience;
