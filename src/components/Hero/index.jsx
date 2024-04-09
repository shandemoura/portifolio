// import { AvatarHero, AvatarImg } from "./styles"
import Avatar from "../../assets/images/profile.jpg"
import { FaDownload } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AnimatedBG } from "../AnimatedBG"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <>
      <div className="bg-slate-900 h-[100vh] items-center justify-center flex">
        <div className=" grid sm:grid-cols-2 grid-cols-1 gap-3">
          <div className="grid grid-cols-subgrid">
            <div className="relative flex items-center">
              <div className="sm:w-[90%] w-[120%] absolute">
                <AnimatedBG />
              </div>

              <img
                src={Avatar}
                alt="my avatar"
                className="relative sm:left-[25%] left-2 rounded-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-subgrid gap-4">
            <h1 className="text-slate-200 text-center sm:text-8xl text-5xl font-light">
              Shande Moura
            </h1>
            <h2 className="flex text-2xl sm:text-3xl text-slate-200 font-light mx-auto">
              <TypeAnimation
                sequence={[
                  "I'm a Web Designer", // Types 'One'
                  1000, // Waits 1s
                  "I'm a UX/UI Designer", // Deletes 'One' and types 'Two'
                  1500, // Waits 2s
                  "I'm a Front-End Dev", // Types 'Three' without deleting 'Two'
                  1500,
                  "I'm a Media Producer", // Types 'Three' without deleting 'Two'
                  1500,
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em" }}
              />
            </h2>
            <div className="flex justify-center items-center gap-5">
              <button className="text-white flex items-center gap-2 p-2 border-2 border-white rounded-md hover:bg-green-400 transition-all">
                <FaDownload />
                <p>Download CV</p>
              </button>

              <button className="text-white flex items-center gap-2 p-2 border-2 border-white rounded-md hover:bg-green-400 transition-all">
                <MdEmail />
                <p>Contact Me</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
