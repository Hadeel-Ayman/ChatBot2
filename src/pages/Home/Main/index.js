import React from "react";
import "./style.css";
import { BiMessageRoundedDots } from "react-icons/bi";
import hero from "../../../assets/images/Artboard 2.svg";
import { useTranslation } from "react-i18next";
import uu from "../../../assets/images/Group 55016.svg";
const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="overlay">
        <img className="gg" src={uu} />
      </div>
      <section className="hero_section">
        <div className="containerz">
          <div className="hero_wrapper">
            <div className="hero_content">
              <div>
                <h2>
                  <span className="bot">IQ.bot</span> {t("mainTitle")}
                </h2>
                <p className="description">{t("subTitle")}</p>
              </div>
              <div className="hero_btns">
                <a href="#Subscription">

                  <button className="primary_btn start" >
                    {t("start")}
                    <button className="backIcon rounded-circle">
                      <BiMessageRoundedDots className="icon" />
                    </button>
                  </button>
                </a>

              </div>
            </div>
            <div className="hero_img" style={{ position: "relative" }}>
              <img src={hero} alt="hero_img" />
              <div
                className="main1"
                style={{
                  position: "absolute",
                  bottom: 0,
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
            </div>
          </div>
        </div>
        <hr className="hr" />
      </section>
    </>
  );
};

export default Main;
