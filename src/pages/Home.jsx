import React from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import {} from "lucide-react";
import {
  Cog,
  Box,
  Wrench,
  ShieldCheck,
  Layers,
  Brush,
  Cpu,
  LifeBuoy,
  PackageSearch,
  Leaf,
} from "lucide-react";

import { p } from "motion/react-client";
import UserdataForm from "../components/userdataForm";

function Home() {
  const products = [
    {
      name: "Precision Engine Gear",
      company: "AutoCore Engineering",
      logo: "https://static.vecteezy.com/system/resources/thumbnails/047/656/219/small/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg",
      image:
        "data:image/jpeg;base64,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",
      description:
        "High-precision gear designed for automotive and industrial engines, ensuring smooth torque transfer and exceptional durability.",
    },
    {
      name: "Hydraulic Piston Assembly",
      logo: "https://img.freepik.com/premium-vector/creative-elegant-abstract-minimalistic-logo-design-vector-any-brand-company_1253202-136744.jpg?semt=ais_incoming&w=740&q=80",
      company: "HydroMax Solutions",
      image:
        "https://www.schilthornprecision.com/ast/uploads/2022/03/precision-machined-components.jpg",
      description:
        "Durable piston assembly for heavy-duty hydraulic systems, crafted for reliability under high pressure and continuous use.",
    },
    {
      name: "CNC Machined Shaft",
      company: "Titan Works Pvt Ltd",
      logo: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg",
      image:
        "https://themachiningworld.com/wp-content/uploads/2024/06/Engine-Parts-Machining.jpg",
      description:
        "High-strength titanium alloy shaft produced through advanced CNC machining for precision motion applications.",
    },
  ];

  const services = [
    {
      title: "CNC Machining & Fabrication",
      description:
        "High-precision CNC milling, turning, and drilling for custom metal and alloy components. Guaranteed accuracy and performance.",
      icon: Cog,
    },
    {
      title: "Product Design & Prototyping",
      description:
        "Transforming ideas into functional prototypes with 3D modeling, simulation, and rapid prototyping.",
      icon: Box,
    },
    {
      title: "Custom Component Manufacturing",
      description:
        "Tailor-made mechanical parts designed to meet your specific performance and durability needs.",
      icon: Wrench,
    },
    {
      title: "Quality Inspection & Testing",
      description:
        "Rigorous dimensional and material testing using advanced inspection tools to ensure precision.",
      icon: ShieldCheck,
    },
    {
      title: "Assembly & Integration Services",
      description:
        "Complete component assembly solutions for faster production and reliable system integration.",
      icon: Layers,
    },
  ];

  return (
    <div className="relative ">
      <UserdataForm />
      <Slider />
      <div className=" px-6  mt-22">
        <div className="grid grid-cols-2 gap-4">
          <section className="py-12   bg-white app-Shadow  rounded-2xl border-2 border-[#e6e6e693] ">
            <div className=" max-w-full mx-auto px-6  gap-10 items-center">
              <div className="flex">
                <div className="max-w-full h-full px-10">
                  <h2 className=" text-lg md:text-3xl font-bold mb-4 heding text-gray-800">
                    About Our Company
                  </h2>
                  <p className=" text-[12px] sm:text-smw-full discription leading-relaxed text-gray-500 mb-6">
                    MechaParts Industries is a global leader in precision part
                    manufacturing, providing high-quality solutions for
                    automotive, aerospace, and energy industries.
                  </p>
                  <Link
                    to="/About"
                    className="text-blue-600 discription font-semibold hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="py-12 mt-2 w-full col-span-2   bg-white app-Shadow  rounded-2xl border-2 border-[#e6e6e693] ">
            <div className="max-w-6xl max-h-80 mx-auto px-6  gap-10 items-center">
              <div>
                <h2 className="text-lg md:text-3xl font-bold mb-4 heding text-gray-800">
                  Our Process / Workflow
                </h2>
                <p className="text-[12px] sm:text-sm discription leading-relaxed text-gray-500 mb-6">
                  Our workflow is designed for precision, efficiency, and
                  quality assurance at every stage. From initial concept and
                  design to prototyping, machining, assembly, and final
                  inspection — every part we produce follows a carefully
                  optimized process. Using advanced CNC technology and automated
                  quality control systems, we ensure every component meets exact
                  specifications and exceeds client expectations.
                </p>
                <Link
                  to="/About"
                  className="text-blue-600 discription font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </section>
          <div className="flex gap-2  col-span-4 w-full">
            <section className="py-12 max-w-full mt-2   bg-white app-Shadow  rounded-2xl border-2 border-[#e6e6e693] ">
              <div className=" mx-auto px-6  gap-10 items-center">
                <div className="">
                  <h2 className=" text-xl sm:text-3xl font-bold mb-4 heding text-gray-800 ml-3">
                    Projects
                  </h2>
                  <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4   justify-center items-center
                  "
                  >
                    {products.map((product, index) => (
                      <div
                        key={index}
                        className="p-3 border border-[#e6e6e693] bg-white app-Shadow rounded-xl"
                      >
                        <img
                          src={product.image}
                          alt=""
                          className=" w-full h-40 object-cover rounded-xl"
                        />
                        <h4 className="mt-3 heding text-sm text-gray-800">
                          {product.name}
                        </h4>
                        <div className="flex items-center justify-start -translate-x-2">
                          <img src={product.logo} alt="" className="h-10" />
                          <p className="text-[12px]  text-gray-600 discription font-semibold">
                            {product.company}
                          </p>
                        </div>
                        <p className="text-[12px] mt-2 text-gray-400 discription">
                          {product.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/About"
                    className="text-blue-600 ml-3  discription font-semibold hover:underline"
                  >
                    View More →
                  </Link>
                </div>
              </div>
            </section>
          </div>
          <div className="h-full max-w-full col-span-4  bg-white app-Shadow rounded-2xl border-2 border-[#e6e6e693] md:p-4 p-2">
            <h2 className=" text-xl sm:text-3xl font-bold mb-4 heding text-gray-800 ml-3">
              Servises
            </h2>
            <div className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className=" items-start w-full mb-4 bg-blue-50 rounded-xl heding w-1/2 p-3"
                >
                  {" "}
                  <div className="flex">
                    <div className="lg:p-3 p-3 bg-blue-100 rounded-lg mr-3">
                      <service.icon className=" h-6 w-6  text-blue-600" />
                    </div>
                    <h4 className=" font-semibold heding text-gray-800 heding text-sm">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-sm mt-2 text-gray-500 w-full discription text-[12px]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="py-12 mt-10   bg-white app-Shadow  rounded-2xl border-2 border-[#e6e6e693] ">
          <div className=" max-w-full mx-auto px-6  gap-10 items-center">
            <div className="flex">
              <div className="max-w-full h-full px-10">
                <h2 className="text-xl md:text-3xl font-bold mb-4 heding text-gray-800">
                  Our Partners
                </h2>
                <p className="text-sm w-full discription leading-relaxed text-gray-500 mb-6">
                  We collaborate with trusted industry leaders who share our
                  commitment to quality, innovation, and reliability. Together,
                  we deliver better solutions and stronger results.
                </p>
                <div class="grid grid-cols-2 md:grid-cols-4 justify-center items-center w-full flex-wrap gap-6 discription text-sm">
                  <div class="bg-white   text-[12px] md:text-sm  md:p-4 p-2 app-Shadow  border-2 border-[#e6e6e693]  rounded-lg">
                    TechNova Industries
                  </div>
                  <div class="bg-white  text-[12px] md:text-sm  md:p-4 p-2 app-Shadow  border-2 border-[#e6e6e693] rounded-lg">
                    PrimeMach Engineering
                  </div>
                  <div class="bg-white  text-[12px] md:text-sm  md:p-4 p-2 app-Shadow  border-2 border-[#e6e6e693] rounded-lg">
                    MetalForge Solutions
                  </div>
                  <div class="bg-white   text-[12px] md:text-sm md:p-4 p-2 app-Shadow border-2 border-[#e6e6e693]  rounded-lg">
                    IronAxis Manufacturing
                  </div>
                  <div class="bg-white   text-[12px] md:text-sm md:p-4 p-2 app-Shadow border-2 border-[#e6e6e693]  rounded-lg">
                    MechaCore Systems
                  </div>
                  <div class="bg-white   text-[12px] md:text-sm md:p-4 p-2 app-Shadow border-2 border-[#e6e6e693]  rounded-lg">
                    SteelWave Dynamics
                  </div>
                  <div class="bg-white   text-[12px] md:text-sm md:p-4 p-2 app-Shadow  border-2 border-[#e6e6e693] rounded-lg">
                    ProGear Automations
                  </div>
                  <div class="bg-white   text-[12px] md:text-sm md:p-4 p-2 app-Shadow border-2 border-[#e6e6e693]  rounded-lg">
                    FusionMach Tools
                  </div>
                  <div class="bg-white   text-[12px] md:text-sm md:p-4 p-2 app-Shadow border-2 border-[#e6e6e693]   rounded-lg">
                    TitanWorks Engineering
                  </div>
                  <div class="bg-white   text-[12px] md:text-sm md:p-4 p-2 app-Shadow border-2 border-[#e6e6e693]  rounded-lg">
                    PrecisionPlus Industries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
