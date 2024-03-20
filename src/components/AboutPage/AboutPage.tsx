import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./index.css";
import CatCanvas from "../Cat3dModel/CatCanvas";
import { ScrollTrigger } from "gsap/all";
import { tech } from "../../constants";
import Experience from "../Experience/Experience";
import pdfFile from "../../assets/CV/CV.pdf";
import TelegramSVG from "../../assets/icons/telegram.png";
import CV from "../../assets/icons/CV.png";
// import { MdCircle } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const component = useRef(null);
  //   const mocl;

  const infoBlock = useRef(null);
  //   const mocl;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      const tl = gsap.timeline();

      tl.fromTo(
        ".info",
        {
          //   x: -100,
          opacity: 0,
          //   rotate: -10,
        },
        {
          //   x: 0,
          opacity: 1,
          //   rotate: 0,
          //   ease: "elastic.out(1, 0.3)",
          //   duration: 1,
          //   transformOrigin: "left top",
          //   stagger: {
          //     each: 0.1,
          //     from: "random",
          //   },
        }
      );
    }, infoBlock);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  const handleTgNavigate = () => {
    window.open("https://t.me/wond33");
  };

  const handleCVNavigate = () => {
    window.open(pdfFile, "_blank");
  };

  return (
    <>
      <div ref={infoBlock} style={{ padding: "40px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <h1 className="name">Обо мне</h1>
            <p className="info">Привет, меня зовут Артем!</p>
            <br />
            <p className="info">
              Осуществляю полный цикл разработки приложений любой сложности на
              стеке: ReactJS, Typescript, Node.js и Express/NestJS.
            </p>
            <br />
            <p className="info">
              Кроме того, имею опыт написания кода на Golang и Python.
            </p>
            <br />
            <p className="info">Также работаю с Docker и Nginx.</p>
            <br />
            <p className="info">
              Нравится работать с графикой, 3д моделями и динамическими
              интерфейсами. Люблю создавать визуализации высоконагруженных
              систем.
            </p>
            <p className="info">
              Мне приносит большое удовольствие создавать крутые приложения,
              оптимизировать процессы и делать жизнь разработчиков проще. Для
              меня важно не только писать код, но и делать его эффективным и
              масштабируемым.
            </p>
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
                <img
                  style={{ color: "white", width: "30px" }}
                  src={TelegramSVG}
                />
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
          </div>
          <div style={{ marginLeft: "150px" }}>
            <CatCanvas />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "150px" }} ref={component}>
        <h1 style={{ marginLeft: "40px" }} className="name">
          Мой стэк
        </h1>
        {tech.map(({ tech, color }, index) => (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
            className="tech-row"
            aria-label={tech || ""}
          >
            {Array.from({ length: 15 }, (_, index) => (
              <React.Fragment key={index}>
                <span
                  className={"tech-item"}
                  style={{
                    color: index === 7 && color ? color : "#67738d",
                    fontSize: "200px",
                    fontFamily: "Open Sans",
                    fontWeight: "700",
                    marginLeft: "40px",
                  }}
                >
                  {tech}
                </span>
                <span style={{ color: "#10162a" }} className="text-3xl">
                  {" "}
                  смысл
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <div>
        <h1 style={{ marginLeft: "40px" }} className="name">
          {" "}
          Опыт работы
        </h1>
        <Experience />
      </div>
    </>
  );
}
