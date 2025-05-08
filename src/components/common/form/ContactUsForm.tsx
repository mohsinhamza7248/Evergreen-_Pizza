'use client'
import { Button, Input, Textarea } from "@nextui-org/react";
import { FormEvent, useMemo, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const ContactUsForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [emailValue, setEmailValue] = useState('');

  const validateEmail = (email: string) => {
    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const isInvalid = useMemo(() => {
    if (emailValue === '') return false;
    return validateEmail(emailValue) ? false : true;
  }, [emailValue]);

  const form = useRef<HTMLFormElement>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Sending the form data using emailjs
    const submitPromise = new Promise(async (resolve, reject) => {
      await emailjs.sendForm('service_de0hxhc', 'template_gjaui9l', form.current as HTMLFormElement, 'QA_Og2366XQeFgVlP')
        .then((result) => {
          if (result.status === 200) {
            resolve(result.text);
            toast.success('Your inquiry has been submitted!');  // Success toast
          } else {
            reject();
            toast.error('Error submitting inquiry. Please try again!'); // Error toast
          }
        });
    });

    // Displaying loading, success, or error toast
    await toast.promise(submitPromise, {
      loading: "Sending email...",
      success: "Email sent successfully!",
      error: "Error sending email"
    });

    // Reset form and stop submitting state
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  };

  return (
    <form className="flex flex-col gap-8" ref={form} onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          isRequired
          label="First Name"
          labelPlacement="outside"
          name="firstName"
          placeholder=" "
          type="text"
        />
        <Input
          isRequired
          label="Last Name"
          labelPlacement="outside"
          name="lastName"
          placeholder=" "
          type="text"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          isRequired
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder=" "
          type="email"
          isInvalid={isInvalid}
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
          errorMessage={isInvalid && "Please enter a valid email"}
        />
        <Input
          label="Phone Number"
          labelPlacement="outside"
          name="phoneNumber"
          placeholder=" "
          type="tel"
        />
      </div>
      <Textarea
        isRequired
        label="Message"
        labelPlacement="outside"
        name="message"
        placeholder="Enter your inquiry..."
        rows={3}
      />
      <div>
        <Button type="submit" className="bg-blue-500 text-white" radius="sm" size="md" isLoading={submitting}>Send Inquiry</Button>
        <p className="text-gray-400 mt-3">We&apos;ll get back to you in 3-4 business days.</p>
      </div>
    </form>
  );
}

export default ContactUsForm;
