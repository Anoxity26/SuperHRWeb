import React, { useState, useRef, useEffect, use } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import { DialogContent, DialogDescription, DialogHeader } from "./Dialog";
import mixpanel from "mixpanel-browser";
import { DialogClose } from "./Dialog";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z
    .string()
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Phone number must contain only numbers.",
    })
    .refine((value) => value.length === 0 || value.length === 10, {
      message: "Phone number must be 10 digits long.",
    }),
  linkedIn: z.string()
    .refine((value) => {
      return value.length === 0 || /\bhttps:\/\/(?:www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?\b/.test(value);
    }, {
      message: "Please enter a valid LinkedIn profile link.",
    })
});
export function DetailsForm() {
  const CloseRef = useRef<HTMLButtonElement>(null);
  const [selectedOS, setSelectedOS] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      linkedIn: "",
    },
    // mode: "onChange",
  });
  function onSubmit() {
    const formData = form.getValues()
    const data = {
      ...formData,
      os: selectedOS,
    }
    mixpanel.track("sign_up_request_users", data);
    console.log(data);
    setTimeout(() => {
      CloseRef.current?.click(), form.reset();
      setSelectedOS("");
    }, 200);
    setIsSubmitted(true);
  }

  return (
    <div>{isSubmitted ? (
      <DialogContent className="max-w-[640px] bg-white h-64 flex flex-col items-center justify-center gap-6">
        <Image src={"/green_tick.svg"} alt='OK' width={100} height={100} className='w-16 items-baseline xl:w-16' />
        <DialogDescription className="text-xl w-full text-center">
          Thank you for signing up. Someone will reach out to you from our team.
        </DialogDescription>
      </DialogContent>) :
      (<DialogContent className="max-w-[1000px] bg-white">
        <DialogHeader className="m-4 w-full items-center font-bold">
          Book a Demo
        </DialogHeader>
        <hr className="mt-6" />
        <div className="flex gap-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mx-auto w-4/6 md:w-1/2"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium"><span>Full Name<span className="text-[#EB4432] ml-0.5">*</span></span></FormLabel>
                    <FormControl>
                      <input
                        className="border-2 rounded-md border-gray-200 outline-1 outline-[#ec6331] text-sm h-8 w-full p-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium">
                      <span>Contact Number<span className="text-[#EB4432] ml-0.5">*</span></span>
                    </FormLabel>
                    <FormControl>
                      <input
                        className="border-2 rounded-md border-gray-200 outline-1 outline-[#ec6331] text-sm h-8 w-full p-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium"><span>Email<span className="text-[#EB4432] ml-0.5">*</span></span></FormLabel>
                    <FormControl>
                      <input
                        className="border-2 rounded-md border-gray-200 outline-1 outline-[#ec6331] text-sm h-8 w-full p-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedIn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-lg font-medium">
                      Linkedin Profile
                    </FormLabel>
                    <FormControl>
                      <input
                        className="border-2 rounded-md border-gray-200 outline-1 outline-[#ec6331] text-sm h-8 w-full p-2"
                        {...field}

                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col">
                <div className="text-lg font-medium"><span>Do you use Android or iOS device?<span className="text-[#EB4432] ml-0.5">*</span></span></div>
                <div className="flex gap-6">
                  <div>
                    <input
                      required
                      type="radio"
                      id="css"
                      name="Phone"
                      value="Android"
                      onChange={() => setSelectedOS("Android")}
                      checked={selectedOS === "Android"}
                    />
                    <label className="ml-2">Android</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="iOS"
                      name="Phone"
                      value="iOS"
                      onChange={() => setSelectedOS("iOS")}
                      checked={selectedOS === "iOS"}
                    />
                    <label className="ml-2">iOS</label>
                  </div>
                </div>

              </div>
              <div className="flex justify-center ">
                <DialogClose ref={CloseRef}></DialogClose>
                <button type="submit" className="bg-[#EB4432] rounded-md w-full h-12 border text-white font-semibold ">SUBMIT</button>
              </div>
            </form>
          </Form>
          <Image src={"/early_access.svg"} width={1000} height={100} alt="" className="w-1/2 hidden sm:flex" />
        </div>

      </DialogContent>)}
    </div>


  );
}

export default DetailsForm;
