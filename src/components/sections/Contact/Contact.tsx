import { useRef, useState } from "react";

import { motion } from "framer";
import { SMTPClient } from "emailjs";
import emailjs from "@emailjs/browser";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

import ContainerCommom from "@/components/ContainerCommom";
import Heading from "@/components/Heading";
import { Input } from "@/components/Input/Input";
import Text from "@/components/Text";
import Button from "@/components/Button/Button";
import {
  LinearGradientIcon,
  TitleSection,
} from "@/components/CommomComponents";
import ContactModel from "./ContactModel";

interface FormValues {
  Nome: string;
  Email: string;
  Mensagem: string;
}
const Contact = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValues>({
    Nome: "",
    Email: "",
    Mensagem: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs
      .send(
        "service_srjthp6",
        "template_cbnbou4",
        { ...formValues },
        "PujN_50evgSZEa8tS"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmit(true);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    setFormValues({ Nome: "", Email: "", Mensagem: "" });
  };
  return (
    <ContainerCommom id="Contato">
      <div>
        <TitleSection
          title={{
            English: "Contact",
            Gujarati: "સંપર્ક કરો",
            Hindi: "संपर्क",
          }}
        />
        <div className="flex items-center flex-col justify-center w-full p-4 pb-2 md:flex-row lg:p-6">
          {/* <ContactModel open={isSubmit} /> */}
          <motion.div
            className="w-full flex flex-col my-6 items-center gap-3 md:items-start md:my-0 md:pr-6"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Heading
              text={{
                Gujarati: "મારી સાથે સંપર્કમાં રહો",
                English: "Get in contact with me",
                Hindi: "मेरे साथ संपर्क करें",
              }}
              className="text-center md:text-start"
              size="md"
              gradient={true}
            />
            <Text
              text={{
                Gujarati:
                  "જો તમે મારી સાથે સંપર્કમાં રહેવા માંગતા હો, તો મને એક સંદેશ મોકલો, મને તે ગમશે 💖.",
                English:
                  "If you'd like to get in touch with me, send me a message, I'd love it 💖.",
                Hindi:
                  "यदि आप मुझसे संपर्क करना चाहते हैं, तो मुझे एक संदेश भेजें, मुझे अच्छा लगेगा 💖।",
              }}
              className="text-center px-4 sm:px-12 md:text-start md:px-0"
              size="md"
            />
            <div className="flex flex-col gap-4 items-center justify-start mt-8">
              <div className="flex gap-2 items-center justify-start w-full">
                <LinearGradientIcon id={"6"} Icon={MdEmail} size={28} />
                <Text
                  text={{
                    English: "jigarahir0147@gmail.com",
                    Gujarati: "jigarahir0147@gmail.com",
                    Hindi: "jigarahir0147@gmail.com",
                  }}
                  className="text-md xs:text-lg"
                  size="md"
                />
              </div>
              <div className="flex gap-2 items-center justify-start w-full">
                <LinearGradientIcon id={"6"} Icon={MdLocationOn} size={30} />
                <Text
                  text={{
                    English: "Bhatiya, Gujarat 361315",
                    Gujarati: "ભાટિયા, ગુજરાત 361315",
                    Hindi: "भाटिया, गुजरात 361315",
                  }}
                  className="text-md xs:text-lg"
                  size="md"
                />
              </div>

              {/* 
              <div className={`flex Card-Gradient z-[1] relative transition-all duration-300 before:rounded-lg after:rounded-lg hover:scale-[1.02] ${className}`} {...rest}>
            <div className="flex w-full ml-[6px] mt-[6px] flex-col gap-3 px-4 py-6 rounded-md bg-gray-200 items-center justify-center dark:bg-zinc-900">
                <LinearGradientIcon
                    id="10"
                    Icon={icon}
                    size={60}
                />
                <Heading text={titleElement} size="md" className="text-center" gradient={true} />
                <Text text={text} size="md" className="text-center px-2" />
            </div>
        </div>
         */}
            </div>
          </motion.div>
          <motion.form
            onSubmit={HandleSubmit}
            className="w-full flex flex-col items-center justify-center gap-5 px-2 xs:px-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <label
              htmlFor="Nome"
              className="flex flex-col gap-3 w-full items-center md:items-start"
            >
              <Text
                text={{ Gujarati: "નામ:", English: "Name:", Hindi: "नाम:" }}
                size="lg"
              />
              <Input.Root>
                <Input.Icon>
                  <div>
                    <LinearGradientIcon id={"7"} Icon={FaUserAlt} size={18} />
                  </div>
                </Input.Icon>
                <Input.Input
                  type={"text"}
                  name="Nome"
                  id="Nome"
                  value={formValues.Nome}
                  onChange={handleChange}
                  PlaceHolderComponent={{
                    Gujarati: "તમારું નામ દાખલ કરો...",
                    English: "Enter your name...",
                    Hindi: "अपना नाम दर्ज करें...",
                  }}
                  required
                />
              </Input.Root>
            </label>
            <label
              htmlFor="Email"
              className="flex flex-col gap-3 w-full items-center md:items-start"
            >
              <Text
                text={{ Gujarati: "ઈમેલ:", English: "Email:", Hindi: "ईमेल:" }}
                size="lg"
              />
              <Input.Root>
                <Input.Icon>
                  <div>
                    <LinearGradientIcon id={"7"} Icon={MdEmail} size={20} />
                  </div>
                </Input.Icon>
                <Input.Input
                  type={"email"}
                  name="Email"
                  id="Email"
                  value={formValues.Email}
                  onChange={handleChange}
                  PlaceHolderComponent={{
                    Gujarati: "તમારું ઈમેલ એડ્રેસ લખો...",
                    English: "Enter your email...",
                    Hindi: "अपना ईमेल दर्ज करें...",
                  }}
                  required
                />
              </Input.Root>
            </label>
            <label
              htmlFor="Mensagem"
              className="flex flex-col gap-3 w-full items-center md:items-start"
            >
              <Text
                text={{
                  Gujarati: "સંદેશ:",
                  English: "Message:",
                  Hindi: "संदेश:",
                }}
                size="lg"
              />
              <Input.Root textArea={true}>
                <Input.TextArea
                  id="Mensagem"
                  name="Mensagem"
                  value={formValues.Mensagem}
                  onChange={handleChange}
                  PlaceHolderComponent={{
                    Gujarati: "સંદેશ દાખલ કરો...",
                    English: "Enter the message...",
                    Hindi: "संदेश दर्ज करें...",
                  }}
                  required
                />
              </Input.Root>
            </label>
            <Button
              text={{ Gujarati: "મોકલો", English: "Send", Hindi: "भेजें" }}
              styles="text-xl mt-4"
              type="submit"
            />
          </motion.form>
        </div>
        <div
          className={`flex Card-Gradient z-[1] relative transition-all duration-300 before:rounded-lg after:rounded-lg`}
        >
          {/* <div className="flex w-full ml-[6px] mt-[6px] flex-col gap-3 px-4 py-6 rounded-md bg-gray-200 items-center justify-center dark:bg-zinc-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d138613.48708088757!2d69.25888383904991!3d22.146238985740794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39568d4493118237%3A0xe6be309688af8645!2sMahadeviya%2C%20Gujarat%20361315!5e0!3m2!1sen!2sin!4v1679128002243!5m2!1sen!2sin"
              width="1050"
              height="440"
              loading="lazy"
            ></iframe>
          </div> */}
        </div>
      </div>
    </ContainerCommom>
  );
};

export default Contact;
