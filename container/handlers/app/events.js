const { readdirSync } = require("fs");

module.exports = (client) => {
  client.events = () => {
    for (const folder of readdirSync("./container/events")) {
      const files = readdirSync(`./container/events/${folder}`).filter((file) =>
        file.endsWith(".js")
      );

      switch (folder) {
        case "client":
          {
            for (const file of files) {
              const event = require(`../../events/${folder}/${file}`);
              if (event.once) {
                client.once(event.name, (...args) => {
                  event.execute(...args, client);
                });
              } else {
                client.on(event.name, (...args) => {
                  event.execute(...args, client);
                });
              }
            }
          }
          break;

        case "server":
          {
            for (const file of files) {
              const event = require(`../../events/${folder}/${file}`);
              if (event.once) {
                client.once(event.name, (...args) => {
                  event.execute(...args, client);
                });
              } else {
                client.on(event.name, (...args) => {
                  event.execute(...args, client);
                });
              }
            }
          }
          break;
      }
    }
  };
};
