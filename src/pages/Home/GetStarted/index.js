import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import imgg from "../../../assets/images/Chart 13.svg";
import imgg2 from "../../../assets/images/Group 37348.svg";
import imgg4 from "../../../assets/images/Fire.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { fadeIn, staggerChildren } from "../../../utils/motion";
import { motion } from "framer-motion";

const GetStarted = () => {
  const { t } = useTranslation();
  return (
    <motion.section className="get-started"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div className="flex-container"
        variants={fadeIn("down", "tween", .6, .3)}>
        <div className="left-content">
          <div className="get-started-content">
            <h2 className="section-title">{t("sign")}</h2>
            <p className="section-description">{t("AdsDes1")}</p>
            <div className="Register">
              <button href="#" className="">
                {t("RegistNow")}
                <div className="raduis">
                  <AiOutlineArrowLeft />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="divChart" style={{ display: "flex" }}>
            <div className="tt">
              <img src={imgg} alt="Chart" />
            </div>
            <div className="tt2">
              <img src={imgg2} alt="Chart" />
            </div>
          </div>

          <div className="button-cont">
            <div className="rrr">
              <img className="ee" src={imgg4} alt="Chart" />
              <div className="l">
                <span className="f">
                  345.23 K SALES <br /> <span className="m">Increase 70%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default GetStarted;
