"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const sendMail = async () => {
    console.log("cli");
    
    if ([email, name, number, message].some((f) => f.trim() === "")) {
      return;
    }
    console.log("ss");

    try {
      const response = await axios("/api/sendmail", {
        method: "POST",
        data: {
          name,
          email,
          message,
          number,
        },
      });
      console.log(response.data);
      setEmail("");
      setName("");
      setMessage("");
      setNumber("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-[90%] max-w-4xl mx-auto p-6 rounded-md shadow-md space-y-4 mt-0 flex flex-col justify-center items-center relative " // Ensure form is not clipped
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-md mx-auto mt-12 p-6 rounded-lg text-center"
      >
        <div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4">
          <Mail className="h-4 w-4" />
        </div>
        <p className="text-sm font-medium text-foreground mb-1">
          Still Have a Question ?
        </p>
      </motion.div>

      <div className="w-full flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:gap-x-2">
        <Input
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          className="w-full z-50"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          className="w-full z-50"
        />
      </div>

      <Input
        value={number}
        name="number"
        onChange={(e) => setNumber(e.target.value)}
        type="text"
        placeholder="Phone Number"
        className="w-full z-50"
      />

      <textarea
        value={message}
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        className="w-full h-32 p-2 border rounded-md bg-transparent z-50"
      ></textarea>

      <Button
        size="sm"
        cursor="pointer"
        className="w-fit z-50 mt-10" // Ensure button is above other elements
        onClick={sendMail}
      >
        Contact Support
      </Button>
    </form>
  );
};

export default ContactForm;
