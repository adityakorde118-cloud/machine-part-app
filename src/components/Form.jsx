import React from "react";
import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MessageSquare,
  Contact,
  User,
  X,
  Loader2,
  MapPin,
} from "lucide-react";

import { motion } from "motion/react";

import axios from "axios";
function Form({ setIsOn, style }) {
  const [isLoding, setisLoding] = useState(false);
  const [Error, setError] = useState("");

  const [formData, setformData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const onSubmit = async (e) => {
    try {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const phoneRegex = /^[6-9]\d{9}$/;

      e.preventDefault();
      if (
        formData.Name === "" ||
        formData.Email === "" ||
        formData.Phone === ""
      ) {
        return setError("All fields are required");
      }

      if (!emailRegex.test(formData.Email)) {
        return setError("Not a vald email");
      }

      if (!phoneRegex.test(formData.Phone)) {
        return setError("Not a vald mobile no");
      }

      setformData({
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
      });

      setisLoding(true);
      const res = await axios.post(
        import.meta.env.VITE_GOOGLE_SHEET_API_URL,
        JSON.stringify(formData)
      );

      setisLoding(false);

      if (res.data.success) {
        setisFormOpen(false);
        alert("Form submitted successfully!");
      }
    } catch (error) {
      setisLoding(false);
      setError("Some thing want wrong");
    }
  };

  useEffect(() => {
    const t1 = setTimeout(() => {
      setError("");
    }, [4000]);
    return () => clearTimeout(t1);
  }, [Error]);

  return (
    <motion.div
      layoutId={setIsOn && "form"}
      transition={{
        duration: 0.3,
      }}
      className={style}
    >
      <h1 className="text-center heding">Contact Form</h1>
      {setIsOn && (
        <div className="flex justify-end">
          <X
            size={20}
            onClick={() => setIsOn(false)}
            color="#000"
            className=" -translate-y-6"
          />
        </div>
      )}
      <form
        action=""
        onSubmit={(e) => onSubmit(e)}
        className="p-4 flex flex-col gap-4"
      >
        <div className="w-full ">
          <label
            htmlFor="name"
            className="discription text-[12px] ml-1 text-black "
          >
            Name
          </label>
          <input
            value={formData.Name}
            onChange={(e) =>
              setformData((prev) => ({ ...prev, Name: e.target.value }))
            }
            type="text"
            className="w-full border rounded-lg h-8 mt-1 text-[12px] p-2 outline-none border-[#a4a4a493]"
          />
        </div>
        <div className="w-full ">
          <label
            htmlFor="name"
            className="discription text-black text-[12px] ml-1 "
          >
            Email
          </label>
          <input
            value={formData.Email}
            onChange={(e) =>
              setformData((prev) => ({ ...prev, Email: e.target.value }))
            }
            type={"email"}
            className="w-full border rounded-lg h-8 text-[12px] mt-1 p-2 outline-none border-[#a4a4a493]"
          />
        </div>
        <div className="w-full ">
          <label
            htmlFor="name"
            className="discription text-black text-[12px] ml-1  "
          >
            mobile No{" "}
          </label>
          <input
            value={formData.Phone}
            onChange={(e) =>
              setformData((prev) => ({ ...prev, Phone: e.target.value }))
            }
            type="text"
            className="w-full border rounded-lg  text-[12px] h-8 mt-1 p-2 outline-none border-[#a4a4a493]"
          />
        </div>
        <div className="w-full ">
          <label
            htmlFor="name"
            className="discription text-black text-[12px] ml-1 "
          >
            Message
          </label>
          <textarea
            value={formData.Message}
            onChange={(e) =>
              setformData((prev) => ({ ...prev, Message: e.target.value }))
            }
            type="text"
            className="w-full border resize-none text-[12px] rounded-lg h-26 mt-1 p-2 outline-none border-[#a4a4a493]"
          />
        </div>
        {Error && <p className="text-red-600 text-[12px]">{Error}</p>}
        {isLoding ? (
          <div className="flex items-center justify-center">
            <Loader2 className="text-center animate-spin" />
          </div>
        ) : (
          <button className="w-full p-2 cursor-pointer bg-black rounded-lg text-white text-[14px] flex justify-center items-center">
            Submit
          </button>
        )}
      </form>
    </motion.div>
  );
}

export default Form;
