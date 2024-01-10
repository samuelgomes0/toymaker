const { SlashCommandBuilder } = require("discord.js");
const formatDate = require("../../utils/formatDate.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Fornece informações sobre o usuário."),
  async execute(interaction) {
    const username = interaction.user.username;
    const formattedDate = formatDate(interaction.member.joinedAt);

    await interaction.reply(
      `Esse comando foi executado por ${username}, que entrou no servidor em ${formattedDate}.`
    );
  },
};
