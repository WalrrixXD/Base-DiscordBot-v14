const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("count")
    .setDescription("Contar del 1 al 10."),

  execute(interaction, client) {
    for (let i = 0; i <= 10; i++) {
      interaction.reply({ content: "Empezando...", ephemeral: true });
      interaction.channel.send({ content: `${i}` });
    }
  },
};
