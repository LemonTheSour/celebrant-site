"use client";

import { useForm } from "react-hook-form";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function EmailContactForm() {
  interface HTMLInputTypeAttribute {
    from_name: String;
    email: String;
    message: String;
  }

  const {
    register,
    reset,
    formState: { errors },
  } = useForm<HTMLInputTypeAttribute>();

  // @ts-ignore
  const formRef = useRef<HTMLFormElement>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_4wcjxcy",
        "template_zxhdy06",
        formRef.current,
        "9uyhLgylxvHhWYuXX"
      )
      .then(
        (result: { text: any }) => {
          console.log("Success!");
        },
        (error: { text: any }) => {
          console.log("Error!");
        }
      );
    reset();
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={onSubmit}
        ref={formRef}
        className="flex flex-col items-start w-5/6 space-y-8"
      >
        <div className="flex flex-col w-full text-2xl">
          <label>Name</label>
          <input
            {...register("from_name")}
            className="border-sunset border-4"
          />
        </div>
        <div className="flex flex-col w-full text-2xl">
          <label>Email Address</label>
          <input {...register("email")} className="border-sunset border-4" />
        </div>
        <div className="flex flex-col justify-center w-full text-2xl">
          <label>Say Hi!</label>
          <textarea
            {...register("message")}
            className="border-sunset h-48 border-4 resize-none"
          />
        </div>

        <button type="submit" className="bg-sunset mt-2 w-4/6 h-12">
          Send
        </button>
      </form>
    </div>
  );
}
