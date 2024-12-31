"use client";

import { z } from "zod";

import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContact } from "@/actions/sendContact";
import { ContactFormSchema } from "@/lib/schema";

type Inputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
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

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await sendContact(data);

    console.log({ result });

    if (result?.error) {
      toast.error("An error occurred! Please try again.");
      return;
    }

    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <section className="relative isolate">
      {/* Form */}
      <div className="relative">
        <form
          onSubmit={handleSubmit(processForm)}
          className="mt-16 lg:flex-auto"
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name */}
            <div>
              <Input
                id="name"
                type="text"
                disabled={isSubmitting}
                placeholder="Name"
                autoComplete="given-name"
                className="!py-7 border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 focus:border-orange-600 text-gray-200 border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed outline-none"
                {...register("name")}
              />

              {errors.name?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <Input
                type="email"
                id="email"
                disabled={isSubmitting}
                autoComplete="email"
                placeholder="Email"
                className="!py-7 border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 focus:border-orange-600 text-gray-200 border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed outline-none"
                {...register("email")}
              />

              {errors.email?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <Textarea
                rows={4}
                disabled={isSubmitting}
                placeholder="Message"
                className="!py-4 border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 focus:border-orange-600 text-gray-200 border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed outline-none"
                {...register("message")}
              />

              {errors.message?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className=" disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
