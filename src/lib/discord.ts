"use server";

import { ContactFormInputs } from "@/actions/sendContact";
import {
  ChannelType,
  Client,
  GatewayIntentBits,
  EmbedBuilder,
} from "discord.js";

const DISCORD_TOKEN = process.env.DISCORD_TOKEN!;
const CHANNEL_ID = process.env.CHANNEL_ID!;

export async function sendMessage(data: ContactFormInputs) {
  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  });

  try {
    await client.login(DISCORD_TOKEN);
    const channel = await client.channels.fetch(CHANNEL_ID);

    if (!channel || channel.type !== ChannelType.GuildText) {
      throw new Error("Invalid channel");
    }

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(`Message from ${data.name}`)
      .addFields(
        { name: "Name", value: data.name },
        { name: "Email", value: data.email },
        { name: "Message", value: data.message }
      )
      .setTimestamp();

    const message = await channel.send({ embeds: [embed] });
    await client.destroy();
    return { data: message };
  } catch (error) {
    console.log(error);
    await client.destroy();
    return { error: "Failed to send message" };
  }
}
