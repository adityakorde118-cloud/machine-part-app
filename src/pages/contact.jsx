import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

import Form from "../components/Form";
import { Link } from "react-router-dom";

function contact() {
  const contactInfo = [
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+1 234 567 890",
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "support@example.com",
    },
    {
      icon: <MessageCircle size={18} />,
      label: "WhatsApp",
      value: "+1 234 567 891",
    },
    {
      icon: <Globe size={18} />,
      label: "Website",
      value: "www.example.com",
    },
  ];

  const socialLinks = [
    {
      name: "Website",
      icon: <Globe  />,
      url: "https://www.example.com",
    },
    {
      name: "Facebook",
      icon: <Facebook  />,
      url: "https://facebook.com/example",
    },
    {
      name: "Instagram",
      icon: <Instagram  />,
      url: "https://instagram.com/example",
    },
    {
      name: "Twitter",
      icon: <Twitter  />,
      url: "https://x.com/example",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin  />,
      url: "https://www.linkedin.com/company/example",
    },
    {
      name: "YouTube",
      icon: <Youtube  />,
      url: "https://youtube.com/@example",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle  />,
      url: "https://wa.me/1234567890",
    },
    {
      name: "Email",
      icon: <Mail  />,
      url: "mailto:example@gmail.com",
    },
  ];

  return (
    <div>
      <div className="p-4 text-center text-white sm:mt-20 bg-black w-full">
        <h1 className="text-xl md:text-4xl md:text-3xl font-bold  heding">Get in Touch</h1>
        <p className=" text-[14px] lg:text-lg discription md:text-sm leading-relaxed max-w-3xl mx-auto text-gray-300">
          Reach out to us using the details below. Our team replies within 24
          hours.
        </p>
        <div className="flex justify-center flex-col md:flex-row items-center gap-4 mt-8">
          {contactInfo.map((info) => (
            <div className="flex text-[14px] items-center gap-2">
              {info.icon}
              <p>{info.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-10  ">
        <Form
          style={
            "border border-[#a4a4a493]   md:w-[50%]  w-full p-2 cursor-pointer bg-white  mb-10 mr-4 z-20 app-Shadow rounded-xl"
          }
        />
      </div>
      <div className="flex w-full gap-10 items-center justify-center">
        {socialLinks.map((soc, i) => (
          <Link to={soc.url}>
          <div className="p-2 gap-2 bg-white  app-Shadow rounded-lg flex justify-center items-center border border-[#a4a4a493]">
            {soc.icon}
           
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default contact;
