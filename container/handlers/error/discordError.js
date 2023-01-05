module.exports = (client) => {
  client.discordError = () => {
    client.on("shardError", (error) => {
      console.log(" [Anti-crash] :: Shard Error/Catch (Discord) ");
      console.error(error);
    });

    client.on("error", (error) => {
      console.log(" [Anti-crash] :: Error/Catch (Discord) ");
      console.error(error);
    });
  };
};
