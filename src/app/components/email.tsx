"use client";

import { useForm } from "react-hook-form";
import { FormEvent, HTMLInputTypeAttribute, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailContactForm() {
  interface HTMLInputTypeAttribute {
    from_name: String;
    email: String;
    messageContent: String;
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
        "service_pnwts59",
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
    <div className="flex justify-center p-20">
      <form
        onSubmit={onSubmit}
        ref={formRef}
        className="flex flex-col items-start p-10 border-sunset border-4 w-1/2 h-3/4 bg-white"
      >
        <div className="flex flex-col w-3/4">
          <label>Name</label>
          <input
            {...register("from_name")}
            className="border-sunset border-2"
          />
        </div>
        <div className="flex flex-col w-3/4">
          <label>Email Address</label>
          <input {...register("email")} className="border-sunset border-2" />
        </div>
        <div className="flex flex-col justify-center w-3/4">
          <label>Say Hi!</label>
          <textarea
            {...register("messageContent")}
            className="border-sunset border-2 resize-none"
          />
        </div>

        <button type="submit" className="bg-sunset mt-2 w-1/4">
          Send
        </button>
      </form>
    </div>
  );
}
