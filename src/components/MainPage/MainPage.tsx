import React, { useEffect, useRef } from "react";
import "./index.css";
import gsap from "gsap";
import Shapes from "../Shapes/Shapes";
import TelegramSVG from "../../assets/icons/telegram.png";
import CV from "../../assets/icons/CV.png";
import pdfFile from "../../assets/CV/CV.pdf";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const component: any = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".first_name",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1, 0.3)",
          duration: 1,
          transformOrigin: "left top",
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      tl.fromTo(
        ".job-title",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scale: 1,
          ease: "elastic.out(1,0.3)",
        }
      );

      tl.fromTo(
        ".contacts",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      );

      tl.fromTo(
        ".button-6",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  const renderLetters = (text: string) => {
    return text.split("").map((letter: string, index: number) => (
      <h1 className="first_name" key={index}>
        {letter}
      </h1>
    ));
  };

  const handleTgNavigate = () => {
    window.open("https://t.me/wond33");
  };

  const handleCVNavigate = () => {
    window.open(pdfFile, "_blank");
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "6% 15%" }}
      ref={component}
    >
      <div style={{ position: "relative", width: "50%" }}>
        <div style={{ display: "flex" }}>{renderLetters("Artem")}</div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 100,
          }}
        >
          {renderLetters("Smirnov")}
        </div>
        <div>
          <h1 className="job-title">FullStack developer</h1>
        </div>
        <div
          className="contacts"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            columnGap: "50px",
          }}
        >
          <div
            onClick={handleTgNavigate}
            style={{ display: "flex", columnGap: "10px" }}
          >
            <img style={{ color: "white", width: "30px" }} src={TelegramSVG} />
            <span className="telegram">Telegram</span>
          </div>
          <div
            onClick={handleCVNavigate}
            style={{ display: "flex", columnGap: "10px" }}
          >
            <img style={{ color: "white", width: "30px" }} src={CV} />
            <span className="CV">Resume</span>
          </div>
        </div>
        <div
          style={{
            marginTop: "40px",
          }}
        >
          <button
            onClick={() => navigate("/about")}
            className="button-6"
            role="button"
          >
            Обо мне
          </button>
        </div>
      </div>
      <div>
        <Shapes />
      </div>
    </div>
  );
}

export default MainPage;
