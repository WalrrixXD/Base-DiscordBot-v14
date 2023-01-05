const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Latencia del bot."),

  execute(interaction, client) {
    interaction.reply({
      content: `__Mis latencias__\nAPI: \`${
        client.ws.ping
      }ms\`\nInteracciones: \`${Date.now() - interaction.createdTimestamp}ms\``,
    });
  },
};
