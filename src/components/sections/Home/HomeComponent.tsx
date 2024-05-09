import LanguageComponent from "@/components/Language/LanguageComponent";
import { useLanguage } from "@/components/Language/LanguageProvider";
import { Player } from "@lottiefiles/react-lottie-player";

import { motion } from "framer";

import Typewriter from "typewriter-effect";

import Button from "../../Button/Button";
import ContainerColors from "../../ColorPicker/ContainerColors";
import Heading from "../../Heading";

const HomeComponent = () => {
  const { language } = useLanguage();

  return (
    <>
      <div
        className="h-screen w-full flex items-center justify-center pt-[12vh] p-0 xs:p-4 sm:px-12 relative"
        id="home"
      >
        <motion.div
          className="flex items-center mt-12 flex-col h-full w-full justify-center md:w-[50%] md:items-start"
          initial={{ x: -350, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <LanguageComponent />
          <Heading size="md" className="text-center md:text-start sm:text-xlg">
            <h1>
              {language === "English"
                ? "Welcome!"
                : language === "ગુજરાતી"
                ? "સ્વાગત છે!"
                : language === "hindi"
                ? "स्वागत!"
                : ""}
            </h1>
          </Heading>
          <Heading
            size="md"
            className="mb-6 text-center md:text-start sm:text-xlg"
          >
            <h2>
              {language === "English"
                ? "My name is Jigar"
                : language === "ગુજરાતી"
                ? "મારું નામ જીગર છે"
                : language === "hindi"
                ? "मेरा नाम जिगर है"
                : ""}
            </h2>
          </Heading>
          <h2 className="text-stone-900 dark:text-white sm:text-xlg">
            {language === "English"
              ? "I'm"
              : language === "ગુજરાતી"
              ? "હું"
              : language === "hindi"
              ? "मैं हूँ"
              : ""}
          </h2>
          <ContainerColors />
          <Typewriter
            options={{
              strings: [
                language === "English"
                  ? "Developer"
                  : language === "ગુજરાતી"
                  ? "ડેવલપર છું"
                  : language === "hindi"
                  ? "डेवलपर"
                  : "",
                "FullStack",
                "Junior",
                "Freenlancer",
                "Gamer",
              ],
              autoStart: true,
              loop: true,
              cursorClassName: "text-xlg bg-clip-text gradient-text",
              wrapperClassName: "text-xlg bg-clip-text gradient-text",
            }}
          />

          <Button
            href="https://www.linkedin.com/in/jigar-ahir-335073202/"
            text={{
              Gujarati: "Encontre-me",
              English: "Find me",
              Hindi: "मुझे ढूढ़ें",
            }}
            styles="mt-8 text-lg md:text-xl"
          />
        </motion.div>
        <motion.div
          className="w-[50%] items-center justify-center hidden md:flex"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {/* <video id="myVideo" controls>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          <Player
            autoplay
            loop
            // src="https://assets3.lottiefiles.com/packages/lf20_v9riyrep.json"
            id="firstLottie" src="https://assets9.lottiefiles.com/packages/lf20_6c4q0CWf6g.json"             
            style={{ height: 520, width: 620 }}
          ></Player>          
        </motion.div>
      </div>
    </>
  );
};

export default HomeComponent;
