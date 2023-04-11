import type { CommandInteraction } from "discord.js";
import { ApplicationCommandOptionType } from "discord.js";
import { Discord, Slash, SlashChoice, SlashOption } from "discordx";

const govContractAddress = "0x81e7fA0a7Fc2Ad0Fde1947d67aD7965038CEde83";
const network = "Optimism"

@Discord()
export class Example {
  @Slash({ description: "play" })
  play(
    @SlashChoice(govContractAddress)
    @SlashOption({
      description: "Which contract, please?",
      name: "address",
      required: true,
      type: ApplicationCommandOptionType.String,
    })
    address: string,
    interaction: CommandInteraction
  ): void {
    interaction.reply(`Hello, this your DAO official address: **${address}**. You're on **${network}**.`);
  }
}
