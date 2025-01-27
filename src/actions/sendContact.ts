/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const sendContact = async (formData: FormData) => {
  const rawFormEntries = Object.fromEntries(formData);

  try {
    await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: rawFormEntries?.name,
        avatar_url:
          "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
        content: rawFormEntries?.message,
        embeds: [
          {
            fields: [
              {
                name: "Email",
                value: rawFormEntries?.email,
                inline: true,
              },
            ],
          },
        ],
      }),
    });
    return {
      success: true,
      message: "Your message has been sent successfully.",
    };
  } catch (err: any) {
    return {
      success: false,
      message: `Problem in sending message: ${err.message}`,
    };
  }
};
