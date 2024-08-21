import Image from "next/image";
import Typewriter from "typewriter-effect";
import { PlayCircle } from "lucide-react";
import TopBar from "./TopBar";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";

interface LandingPageTopProps {
  openForm: () => void;
  openBlog: () => void;
  openSignUp: () => void;
}

const LandingPageTop = ({
  openForm,
  openBlog,
  openSignUp,
}: LandingPageTopProps) => {
  return (
    <div className="h-[100vh] relative overflow-hidden">
      <TopBar />
      <div className="relative">
        <div className="grid justify-items-center p-4 items-cener justify-center relative fold:mt-10 w-full phone:mt-32 lg:mt-6 xl:mt-4 3xl:mt-32">
          <div className="font-extrabold text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl text-center items-center w-full mb-0 sm:mb-6 flex flex-col lg:flex-row lg:justify-start justify-center lg:pl-[100px] xl:pl-[230px]">
            <span className="text-black">Talent management</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#ed6c31] to-[#ec5c32] ml-3 mr-3">
              {" "}
              for{" "}
            </span>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                cursor: "|",
                cursorClassName: "typeWriter-cursor",
                deleteSpeed: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("")
                  .typeString(
                    '<span class="bg-clip-text text-transparent bg-gradient-to-b from-[#ed6c31] to-[#ec5c32]"> Recruiters</span>'
                  )
                  .pauseFor(1500)
                  .deleteChars(11)
                  .typeString(
                    '<span class="bg-clip-text text-transparent bg-gradient-to-b from-[#ed6c31] to-[#ec5c32]"> Individuals</span>'
                  )
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <span className="text-md sm:text-xl w-full md:w-3/5 text-center font-medium mt-8 sm:mt-0 mb-8 text-black">
            Our recruiting CRM supports personal email sign-ups, ensuring your
            talent network remains yours, no matter where your career takes you.
          </span>
          <div>
            <button
              className="join-button relative phone:text-base phone:h-16 sm:w-auto sm:h-12 sm:text-xs lg:text-base xl:h-14 p-16 md:mr-8 mr-2"
              // onClick={openSignUp}
            >
              <span className="font-medium ">Sign up for Free</span>
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <button className="phone:text-base phone:h-16 bg-white hover:bg-[#ede7e7] sm:w-auto sm:h-12 sm:text-xs lg:text-base xl:h-14 px-4 py-2 border border-[#d0d0d0] rounded-full shadow-md ml-6">
                  <span className="font-medium flex">
                    <PlayCircle size={20} className="absolute" />
                    <span className="ml-6">Watch Demo</span>
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:fixed sm:left-[50%] sm:translate-x-[-50%]">
                <iframe
                  src="https://www.loom.com/embed/89305f61365c478b8cb12ed9f1128f44?sid=08848247-5e17-4023-9d2d-81928e20ee93"
                  allowFullScreen
                  className="sm:w-[40vw] sm:h-[40vh] max-w-[840px]  max-h-[480px] w-full h-[30vh]"
                ></iframe>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="flex justify-center mx-auto">
        <Image
          src="/flagship_creative.png"
          alt=""
          width={1000}
          height={500}
          className="absolute bottom-0 w-full sm:w-1/4 md:w-[45%] max-w-[1000px] -z-10"
          priority
        />
      </div>
    </div>
  );
};

export default LandingPageTop;
