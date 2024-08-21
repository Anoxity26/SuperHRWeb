import { Menu } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Dialog, DialogTrigger } from "@/components/Dialog";
import DetailsForm from "@/components/DetailsForm";
import { useRef } from "react";
import router from "next/router";

const TopBar = () => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const openForm = () => {
    triggerRef.current?.click();
  };
  const openBlog = () => {
    window.open("link", "_blank");
  };
  const openSignUp = () => {
    window.open("link", "_blank");
  };
  const openPricing = () => {
    router.push("/pricing");
  };

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-[70%] bg-gray-100 transform origin-top-left -skew-y-12"></div>
      <div className="md:bg-white md:rounded-tl-none md:rounded-tr-none md:rounded-bl-[50px] md:rounded-br-[50px] top-0 flex flex-row md:justify-between md:px-12 2xl:px-8 py-4 place-items-end relative max-w-[1240px] mx-auto">
        <Image
          src={"/betaLogo.svg"}
          alt="HR"
          width={214}
          height={226}
          className="w-45  items-baseline mt-4 md:mt-0 md:mx-0 md:w-28 xl:w-36 md:relative ml-6 p-2 cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className="flex">
          <div className="flex flex-row-reverse">
            <div className="hidden md:flex md:flex-grow">
              <button
                className="text-lg text-black mr-6 p-1hover:bg-gray-100 hover:text-[#ec5c32] rounded-md transition-all duration-200"
                // onClick={openBlog}
              >
                Blog
              </button>
              <button
                className="text-lg text-black mr-6 p-1 hover:bg-gray-100 hover:text-[#ec5c32] rounded-md transition-all duration-200"
                // onClick={openForm}
              >
                Book Demo
              </button>
              <button
                className="text-lg text-black mr-6 p-1 hover:bg-gray-100 hover:text-[#ec5c32] rounded-md transition-all duration-200"
                // onClick={openPricing}
              >
                Pricing
              </button>
            </div>

            <div className="md:hidden mr-5 relative">
              <DropdownMenu>
                <DropdownMenuTrigger
                  onClick={(e) => e.stopPropagation()}
                  asChild
                >
                  <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-2">
                  <DropdownMenuItem
                    className="text-lg text-black "
                    // onClick={openBlog}
                  >
                    Blog
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-lg text-black"
                    // onClick={openForm}
                  >
                    Book Demo
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-lg text-black"
                    // onClick={openPricing}
                  >
                    Pricing
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <button
            className="join-button md:w-auto md:h-9 xl:w-auto xl:h-14 hidden md:flex "
            // onClick={openSignUp}
          >
            <span className="text-sm font-medium">Sign up for Free</span>
          </button>
        </div>
      </div>
      <Dialog>
        <DialogTrigger ref={triggerRef} className="hidden h-0 w-0" asChild>
          <button>Open Dialog</button>
        </DialogTrigger>
        <DetailsForm />
      </Dialog>
    </div>
  );
};

export default TopBar;
