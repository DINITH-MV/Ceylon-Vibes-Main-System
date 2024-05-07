import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Home/Header/Header";
import HeaderText from "../../components/Home/Content/HeaderText";

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
