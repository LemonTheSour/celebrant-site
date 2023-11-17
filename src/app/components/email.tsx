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
    <form onSubmit={onSubmit} ref={formRef}>
      <div>
        <label>Name</label>
        <input {...register("from_name")} />
      </div>
      <div>
        <label>Email Address</label>
        <input {...register("email")} />
      </div>
      <div>
        <textarea {...register("messageContent")} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
