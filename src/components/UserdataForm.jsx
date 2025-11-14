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
import Form from "./Form";

function UserdataForm() {
  const [isFormOpen, setisFormOpen] = useState(false);
 

  return (
    <>
      {isFormOpen ? (
       <Form  style={" border border-[#a4a4a493] w-80 p-2 cursor-pointer bottom-0 right-0 fixed bg-white  mb-10 mr-4 z-20 app-Shadow rounded-xl"} setIsOn={setisFormOpen}/>
      ) : (
        <motion.div
          transition={{
            duration: 0.3,
          }}
          onClick={() => setisFormOpen(true)}
          layoutId="form"
          className="fixed  h-14 cursor-pointer flex items-center justify-center w-14 bg-white bottom-0 right-0 rounded-full mb-10 z-40 app-Shadow mr-4 border border-[#a4a4a493]"
        >
          <MessageSquare color="#000" />
        </motion.div>
      )}
    </>
  );
}

export default UserdataForm;
