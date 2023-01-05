const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { partials } = require("./discordPartials");
const config = require("../json/bot.json");

class Execute extends Client {
  constructor(
    options = {
      intents: 3276799,
      partials,
    }
  ) {
    super({ ...options });

    this.interactionCommands = new Collection();
    this.arrayForInteractions = [];
    this.color = config.color;

    this.bot();
  }

  bot() {
    for (const folder of readdirSync("./container/handlers")) {
      const files = readdirSync(`./container/handlers/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      for (const file of files) {
        require(`../handlers/${folder}/${file}`)(this);
      }
    }

    this.events();
    this.interactions();
    this.antiCrash();
    this.discordError();
    this.login(config.token);
  }
}

module.exports = { Execute };
