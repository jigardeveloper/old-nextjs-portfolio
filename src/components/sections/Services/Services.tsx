import { BsGearFill } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";

import { MdPhoneAndroid, MdDeveloperMode } from "react-icons/md";
import { ServiceCard } from "./ServicesStyled";

import { motion } from "framer";

import ContainerCommom from "@/components/ContainerCommom";
import { TitleSection } from "@/components/CommomComponents";

const Services = () => {
  return (
    <ContainerCommom id="Servicos">
      <div>
        <TitleSection
          title={{
            English: "Services",
            Gujarati: "સેવાઓ",
            Hindi: "सेवाएं",
          }}
          className="mb-4"
        />
        <motion.div
          className="grid grid-cols-1 gap-6 w-full px-3 content-center mt-4 sm:grid-cols-2 md:grid-cols-3 lg:px-8"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <ServiceCard
            icon={BsGearFill}
            titleElement={{
              Gujarati: "ઓટોમેશન",
              English: "Automation",
              Hindi: "स्वचालन",
            }}
            text={{
              Gujarati: "બૉટોનું નિર્માણ અને પુનરાવર્તિત કાર્યોનું ઓટોમેશન.",
              English: "Creation of bots and automation of repetitive tasks",
              Hindi: "बॉट्स का निर्माण और दोहराए जाने वाले कार्यों का स्वचालन",
            }}
          />
          <ServiceCard
            icon={RiCodeSSlashFill}
            titleElement={{
              Gujarati: "વેબસાઇટ બનાવટ",
              English: "Website creation",
              Hindi: "वेबसाइट निर्माण",
            }}
            text={{
              Gujarati: "વેબસાઇટ ડિઝાઇન અને કાર્યક્ષમતાનું નિર્માણ.",
              English: "Construction of website design and functionality",
              Hindi: "वेबसाइट डिजाइन और कार्यक्षमता का निर्माण",
            }}
          />
          <ServiceCard
            icon={MdDeveloperMode}
            titleElement={{
              Gujarati: "બેકએન્ડ ડેવલપમેન્ટ",
              English: "Backend development",
              Hindi: "बैकएंड विकास",
            }}
            text={{
              Gujarati: "ડેવલપ Apis",
              English: "Development of apis.",
              Hindi: "एपिस का विकास.",
            }}
          />
        </motion.div>
      </div>
    </ContainerCommom>
  );
};

export default Services;
