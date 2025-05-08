'use client'
import { Button, Input, Textarea } from "@nextui-org/react";
import { FormEvent, LegacyRef, useMemo, useRef, useState } from "react";
import Map from "../common/Map";
import { SectionProps } from "@/types/SectionProps";
import ContactUsForm from "../common/form/ContactUsForm";

const ContactSecton = ({ className }: SectionProps) => {
  return (
    <section id="contact" className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="flex justify-center items-center">
          <Map />
        </div>

        {/* Contact Form Section */}
        <div className="container py-12 md:py-20 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="mb-2 text-xl sm:text-2xl md:text-3xl">Contact Us</h1>
            <p className="text-gray-400">We&apos;d love to talk about how we can help you.</p>
          </div>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSecton;
