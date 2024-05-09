import Avatar from "../../../assets/Avatar3.png";
// import Avatar from "../../../assets/Avatar.png";

import { motion } from "framer";
import Button from "../../Button/Button";
import Heading from "../../Heading";
import Text from "../../Text";
import ContainerCommom from "@/components/ContainerCommom";
import { TitleSection } from "@/components/CommomComponents";

const About = () => {
  return (
    <ContainerCommom id="Sobre">
      <div>
        <TitleSection
          title={{
            English: "About me",
            Gujarati: "મારા વિશે",
            Hindi: "मेरे बारे मेँ",
          }}
        />
        <div className="flex items-center justify-center w-full flex-col lg:flex-row">
          <motion.div
            className="flex w-full items-center justify-center lg:w-[45%]"
            initial={{ x: 110, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={Avatar.src}
              className="w-[270px] h-[270px] select-none my-4 rounded-[50%] shadow-lg border-gradient sm:w-[340px] sm:h-[340px] lg:my-0"
              alt="Meu avatar"
            />
          </motion.div>
          <motion.div
            className="flex w-[90%] flex-col items-center lg:w-[55%]"
            initial={{ y: 110, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Heading
              size="lg"
              className="mb-4"
              text={{
                English: "Who am I?",
                Gujarati: "હું કોણ છું?",
                Hindi: "मैं कौन हूँ?",
              }}
            />
            <Text
              className="px-0 text-center sm:px-4"
              size="lg"
              text={{
                English: `Hello, my name is Jigar Chandravadiya and I'm thrilled to have the opportunity to introduce myself to you.
                 As a technology industry, I have gained extensive experience in Front-end development, Back-end development, 
                 full-stack development which have enabled me to Developing responsive websites,
                  Implementing complex functionality, Ensuring website security, Improving website speed and performance. 
                 I am excited to apply my skills and knowledge to Improve coding skills,
                  Deliver high-quality work, Keep up with industry trends and Contribute to the web development community. 
                 I take great pride in my work and am committed to delivering high-quality results that exceed expectations.
                 Thank you for considering my candidacy and I look forward to connecting with you further.
                `,
                Gujarati: `નમસ્તે, મારું નામ જીગર ચંદ્રાવડિયા છે અને હું તમને મારી ઓળખાણ કરાવવાની તક મળતા રોમાંચિત છું. ટેક્નોલોજી ઉદ્યોગ તરીકે, મેં ફ્રન્ટ-એન્ડ ડેવલપમેન્ટ, બેક-એન્ડ ડેવલપમેન્ટ, ફુલ-સ્ટેક ડેવલપમેન્ટનો બહોળો અનુભવ મેળવ્યો છે
                 જેણે મને રિસ્પોન્સિવ વેબસાઇટ્સ વિકસાવવા, જટિલ કાર્યક્ષમતા લાગુ કરવા, વેબસાઇટ સુરક્ષા સુનિશ્ચિત કરવા,
                 વેબસાઇટની ઝડપ અને પ્રદર્શનમાં સુધારો કરવા સક્ષમ બનાવ્યો છે. કોડિંગ કૌશલ્યો સુધારવા, ઉચ્ચ-ગુણવત્તાવાળા કાર્ય પહોંચાડવા,
                 ઉદ્યોગના વલણો સાથે ચાલુ રાખવા અને વેબ વિકાસ સમુદાયમાં યોગદાન આપવા માટે મારી કુશળતા અને જ્ઞાનનો ઉપયોગ કરવા માટે હું ઉત્સાહિત છું. 
                હું મારા કાર્ય પર ખૂબ ગર્વ અનુભવું છું અને અપેક્ષા કરતાં વધુ ઉચ્ચ-ગુણવત્તાવાળા પરિણામો આપવા માટે પ્રતિબદ્ધ છું. 
                મારી ઉમેદવારી પર વિચાર કરવા બદલ તમારો આભાર અને હું તમારી સાથે આગળ જોડાવા માટે આતુર છું.
                `,
                Hindi: `हैलो, मेरा नाम जिगर चंद्रवाडिया है और मैं आपको अपना परिचय देने का अवसर पाकर रोमांचित हूं।
                एक प्रौद्योगिकी उद्योग के रूप में, मैंने फ्रंट-एंड डेवलपमेंट, बैक-एंड डेवलपमेंट, में व्यापक अनुभव प्राप्त किया है।
                पूर्ण-स्टैक विकास जिसने मुझे उत्तरदायी वेबसाइटों को विकसित करने में सक्षम बनाया है,
                 जटिल कार्यक्षमता को लागू करना, वेबसाइट की सुरक्षा सुनिश्चित करना, वेबसाइट की गति और प्रदर्शन में सुधार करना।
                मैं कोडिंग कौशल में सुधार करने के लिए अपने कौशल और ज्ञान को लागू करने के लिए उत्साहित हूं,
                 उच्च-गुणवत्ता वाला कार्य डिलीवर करें, उद्योग के रुझानों के साथ बने रहें और वेब विकास समुदाय में योगदान करें।
                मुझे अपने काम पर बहुत गर्व है और मैं अपेक्षाओं से अधिक उच्च गुणवत्ता वाले परिणाम देने के लिए प्रतिबद्ध हूं।
                मेरी उम्मीदवारी पर विचार करने के लिए धन्यवाद और मैं आगे भी आपके साथ जुड़ने की आशा करता हूं।`,
              }}
            />
            <Button
              href={"/jigar-ahir.pdf"}
              text={{ Gujarati: "રેસુમે", English: "Resume", Hindi: "रिज्यूम" }}
              styles="text-xl mt-6"
            />
          </motion.div>
        </div>
      </div>
    </ContainerCommom>
  );
};

export default About;
