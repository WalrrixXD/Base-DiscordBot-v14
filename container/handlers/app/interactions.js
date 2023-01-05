const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { readdirSync } = require("fs");
const { app } = require("../../json/bot.json");

module.exports = (client) => {
  client.interactions = async () => {
    for (const folder of readdirSync("./container/commands")) {
      const files = readdirSync(`./container/commands/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      for (const file of files) {
        const interactions = require(`../../commands/${folder}/${file}`);
        client.interactionCommands.set(interactions.data.name, interactions);
        client.arrayForInteractions.push(interactions.data.toJSON());
      }
    }

    const rest = new REST({ version: "10" }).setToken(app.token);
    try {
      const data = await rest.put(Routes.applicationCommands(app.id), {
        body: client.arrayForInteractions,
      });
      console.log(`${data.length} interacciones cargadas.`);
    } catch (error) {
      console.error(error);
    }
  };
};
