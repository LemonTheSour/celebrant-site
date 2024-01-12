"use client";

import { useForm } from "react-hook-form";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./modal";

export default function EmailContactForm() {
  interface HTMLInputTypeAttribute {
    from_name: String;
    email: String;
    message: String;
  }

  const [open, setOpen] = useState(false);

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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
      .then(
        (result: { text: string }) => {
          setOpen(true);
        },
        (error: { text: string }) => {
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
        className="flex flex-col items-start w-5/6 2xl:space-y-8"
      >
        <div className="flex flex-col w-full text-md 2xl:text-xl">
          <label>Name</label>
          <input
            {...register("from_name")}
            className="border-sunset border-2 rounded focus:outline-none focus:shadow-md"
          />
        </div>
        <div className="flex flex-col w-full text-md 2xl:text-xl">
          <label>Email Address</label>
          <input
            {...register("email")}
            className="border-sunset border-2 rounded focus:outline-none focus:shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center w-full text-md 2xl:text-xl">
          <label>Say Hi!</label>
          <textarea
            {...register("message")}
            className="border-sunset h-24 2xl:h-48 border-2 resize-none rounded focus:outline-none focus:shadow-md"
          />
        </div>

        <button
          type="submit"
          className="bg-sunset mt-2 w-1/2 h-9 2xl:w-4/6 2xl:h-12 hover:bg-sunset-light rounded"
        >
          Send
        </button>
      </form>
      <Modal
        open={open}
        onSuccess={() => setOpen(true)}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
