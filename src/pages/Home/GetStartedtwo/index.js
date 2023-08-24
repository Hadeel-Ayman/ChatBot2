import React from "react";
import "./style.css";
import man from "../../../assets/images/man.png";
import { useTranslation } from "react-i18next";
import facebook from "../../../assets/images/facebook (1).svg";
import whatsapp from "../../../assets/images/whatsapp.svg";
import instagram from "../../../assets/images/instagram.svg";
import messenger from "../../../assets/images/messenger.svg";
import imgg4 from "../../../assets/images/Fire.svg";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../../utils/motion";
import { AiOutlineArrowLeft } from "react-icons/ai";

const GetStartedtwo = () => {
  const { t } = useTranslation();
  return (
    <motion.section className="get-startedtwo"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div className="ll"
        variants={fadeIn("down", "tween", .6, .3)}
      >
        <div className="h">
          <div className="icon-flex">
            <img src={instagram} alt="" loading='lazy' />
            <img src={whatsapp} alt="" loading='lazy' />
            <img src={messenger} alt="" loading='lazy' />
            <img src={facebook} alt="" loading='lazy' />
          </div>

          <div className="button-contt getstart_icon">
            <div className="getstart_icon1">
              <span>Hi, what about my product ! 😎</span>
            </div>
          </div>
          <div className="button-contt getstart_icon2">
            <div className="getstart_icon22">
              <span>Hay, now you can check <br />the status of your order </span>
            </div>
          </div>
          <div className="button-contt getstart_icon3">
            <div className="getstart_icon33">
              <span>Track now please</span>
            </div>
          </div>
          <div className="button-contt getstart_icon4">
            <div className="rrrf">
              <span className="">Do you need anything else ?</span>
            </div>
          </div>
          <div className="button-cont button-conth">
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
        <div className="left"><img src={man} /></div>

      </motion.div>
      <motion.div className="containerb"
        variants={fadeIn("up", "tween", .6, .3)}
      >
        <div className="get-startedtwo-content">
          <h2 className="start-section-title">{t("business")}</h2>
          <p className="start-section-description">{t("AdsDes1")}</p>
          <div className="Register2">
            <button href="#" className="">
              {t("RegistNow")}
              <div className="raduis">
                <AiOutlineArrowLeft />
              </div>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default GetStartedtwo;
