const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Testeando los embed papu :vvVV"),

  execute(interaction, client) {
    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setAuthor({
            name: `Autor`,
            iconURL: client.user.displayAvatarURL({ extension: "png" }),
            url: "https://discordjs.guide/popular-topics/embeds.html#embed-preview",
          })
          .setTitle("Título")
          .setURL("https://discord.js.org/#/docs/discord.js/main/class/Embed")
          .setDescription("Descripción")
          .setThumbnail("https://media.discordapp.net/attachments/918531482090348644/1040845504323530853/unknown.png?width=473&height=473")
          .addFields({
            name: "Título del campo",
            value: "Valor del campo",
          })
          .setImage(
            "https://media.discordapp.net/attachments/918531482090348644/1040845577157623909/unknown.png?width=473&height=473"
          )
          .setFooter({
            text: "Pié de página",
            iconURL: interaction.guild.iconURL(),
          })
          .setColor(client.color),
      ],
    });
  },
};
