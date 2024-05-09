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
import { HTMLAttributes, LiHTMLAttributes, ReactNode } from "react";
import { HiXMark } from "react-icons/hi2";
import { AiOutlineMenu } from "react-icons/ai";

const ContactModel = (open: boolean) => {
  const handleClose = () => {};

  return (
    <div className="transition-all flex items-center justify-center">
      <div
        className={`flex Card-Gradient z-[1] relative transition-all duration-300 before:rounded-lg after:rounded-lg`}
      >
        thank you for contact with me
        {
          <LinearGradientIcon
            Icon={open ? HiXMark : AiOutlineMenu}
            id={"3"}
            size={22}
          />
        }
        <div className="flex w-full ml-[6px] mt-[6px] flex-col gap-3 px-4 py-6 rounded-md bg-gray-200 items-center justify-center dark:bg-zinc-900"></div>
      </div>
    </div>
  );
};

export default ContactModel;
