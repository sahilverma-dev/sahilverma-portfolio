"use server";

import { ContactFormSchema } from "@/lib/schema";
import { sendMessage } from "@/lib/discord";
import { z } from "zod";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendContact(data: ContactFormInputs) {
  const result = await ContactFormSchema?.safeParseAsync(data);

  if (result.error) {
    return {
      result,
      error: result.error.format(),
    };
  }

  try {
    const { data, error } = await sendMessage(result.data);

    if (!data || error) {
      throw new Error("Failed to send message");
    }

    return { success: true, data };
  } catch (error) {
    return { error };
  }
}
