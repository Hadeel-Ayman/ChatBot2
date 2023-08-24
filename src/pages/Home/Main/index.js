import React from "react";
import "./style.css";
import { BiMessageRoundedDots } from "react-icons/bi";
import hero from "../../../assets/images/Artboard 2.svg";
import { useTranslation } from "react-i18next";
import uu from "../../../assets/images/Group 55016.svg";
import { fadeIn, staggerChildren } from "../../../utils/motion";
import { motion } from "framer-motion";

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="overlay">
        <img className="gg" src={uu} alt="gg" loading='lazy'/>
      </div>
      <motion.section className="hero_section"
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="containerz">
          <div className="hero_wrapper">
            <motion.div className="hero_content"
              variants={fadeIn("up", "tween", .6, .3)}
            >
              <div>
                <h2>
                  <span className="bot">IQ.bot</span> {t("mainTitle")}
                </h2>
                <p className="description">{t("subTitle")}</p>
              </div>
              <div className="hero_btns">
                <a href="#Subscription">

                  <button className="primary_btn start">
                    {t("start")}
                    <button className="backIcon rounded-circle">
                      <BiMessageRoundedDots className="icon" />
                    </button>
                  </button>
                </a>
              </div>
            </motion.div>
            <motion.div className="hero_img" style={{ position: "relative" }}
              variants={fadeIn("down", "tween", .6, .3)}
            >
              <img src={hero} alt="hero_img" loading='lazy'/>
              <div
                className="main1"
                style={{
                  position: "absolute",
                 
                  left: 0,
                  width: "100%",
                  zIndex: 1,
                }}
              >
                <div className="a">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <hr className="hr" />
      </motion.section>
    </>
  );
};

export default Main;
