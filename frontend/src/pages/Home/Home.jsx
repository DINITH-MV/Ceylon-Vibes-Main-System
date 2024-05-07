import React from "react";
import GradientOpen from "./Content/GradientOpen.js";
import HeaderText from "./Content/HeaderText.js";
import GradientClose from "./Content/GradientClose.js";
import Header from "./Header/Header.js";
import GradientOpen2 from "./Content/GradientOpen2.js";
import GradientClose2 from "./Content/GradientClose2.js";
import Footer from "../../components/Footer/Footer.jsx";
import { motion } from "framer-motion";
import HeaderText1 from "./Content/HeaderText1.js";
import HeaderText2 from "./Content/HeaderText2.js";
import HeaderText3 from "./Content/HeaderText3.js";
import HeaderText4 from "./Content/HeaderText4.js";
import GradientOpen3 from "./Content/GradientOpen3.js";
import HeaderText5 from "./Content/HeaderText5.js";
import HeaderText6 from "@/components/Home/Content/HeaderText6.jsx";

const Home = () => {

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 1 / 10,
        }}
      >
        <Header />
        <div>
          <HeaderText />
          <div className="bg-[#ffb372] h-[570px] w-[100%] mb-0 "></div>
          <GradientOpen />
          <HeaderText1 />
          <GradientClose />
          <div className="bg-[#ffb372] h-[440px] w-[100%] ">
            <HeaderText2 />
          </div>
          <GradientOpen2 />
          <HeaderText3 />
          <GradientClose2 />
          <div className="bg-[#ffb372] h-[455px] w-[100%] mb-0 relative">
            <HeaderText4 />
          </div>
          <GradientOpen3 />
          <HeaderText5 />
          <GradientClose/>
          <div className="bg-[#ffb372] h-[505px] w-[100%] mb-0 relative">
            <HeaderText6 />
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
