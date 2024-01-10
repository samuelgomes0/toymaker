const { SlashCommandBuilder } = require("discord.js");

const debts = {};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cobrar")
    .setDescription("Cobra dinheiro de outro usuário.")
    .addNumberOption((option) =>
      option
        .setName("valor")
        .setDescription("O valor a ser cobrado.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("nome")
        .setDescription("Nome da pessoa a ser cobrada.")
        .setRequired(true)
    ),
  async execute(interaction) {
    const username = interaction.user.globalName;
    const value = interaction.options.getNumber("valor");
    const debtor = interaction.options.getString("nome");

    if (value <= 0) {
      await interaction.reply("O valor deve ser maior que zero.");
      return;
    }

    if (!debts[debtor]) {
      debts[debtor] = 0;
    }

    debts[debtor] += value;

    await interaction.reply(
      `${username} cobrou R$ ${value} de ${debtor}. Total devido: R$ ${debts[debtor]}.`
    );
  },
};
