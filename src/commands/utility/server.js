const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Provides information about the server."),
  async execute(interaction) {
    const serverName = interaction.guild.name;
    const memberCount = interaction.guild.memberCount;

    await interaction.reply(
      `Esse comando foi executado no servidor ${serverName}, que tem ${memberCount} membros.`
    );
  },
};
