"use client";

import { z } from "zod";

import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimationContainer from "../animated/animated-container";
import { Loader2Icon, SendIcon } from "lucide-react";
import { sendContact } from "@/actions/sendContact";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .min(2, { message: "Must be at least 2 characters." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Invalid email."),
  message: z.string().min(1, { message: "Message is required." }),
});

type Inputs = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),

    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async ({
    message,
    email,
    name,
  }) => {
    if (!message) {
      toast.error("Please enter all felids");
      return;
    }
    const formData = new FormData();

    formData.append("message", message);
    formData.append("email", email);
    formData.append("name", name);

    const result = await sendContact(formData);
    console.log({ result });
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div className="bg-white/5 backdrop-blur w-full rounded-2xl shadow-xl p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit(processForm)} className="space-y-4">
        {/* Name */}
        <AnimationContainer invert>
          <Input
            id="name"
            className="px-3 py-6 border border-white/50 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors duration-200"
            type="text"
            disabled={isSubmitting}
            placeholder="Name"
            autoComplete="given-name"
            {...register("name")}
          />

          {errors.name?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.name.message}
            </p>
          )}
        </AnimationContainer>

        {/* Email */}
        <AnimationContainer invert>
          <Input
            type="email"
            className="px-3 py-6 border border-white/50 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors duration-200"
            id="email"
            disabled={isSubmitting}
            autoComplete="email"
            placeholder="Email"
            {...register("email")}
          />

          {errors.email?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.email.message}
            </p>
          )}
        </AnimationContainer>

        {/* Message */}
        <AnimationContainer invert>
          <Textarea
            rows={4}
            disabled={isSubmitting}
            placeholder="Message"
            className="px-3  border border-white/50 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition-colors duration-200"
            {...register("message")}
          />

          {errors.message?.message && (
            <p className="ml-1 mt-2 text-sm text-rose-400">
              {errors.message.message}
            </p>
          )}
        </AnimationContainer>

        <AnimationContainer className="mt-6 flex items-center justify-center md:justify-end">
          <Button
            type="submit"
            disabled={isSubmitting}
            className=" disabled:opacity-50 bg-blue-500 hover:bg-blue-600 rounded-full "
          >
            {isSubmitting ? (
              <>
                <Loader2Icon className="animate-spin h-5 aspect-square mr-1" />{" "}
                Submitting
              </>
            ) : (
              <>
                <SendIcon className="h-5 aspect-square mr-2" /> Send Message
              </>
            )}
          </Button>
        </AnimationContainer>
      </form>
    </div>
  );
};

export default ContactForm;
