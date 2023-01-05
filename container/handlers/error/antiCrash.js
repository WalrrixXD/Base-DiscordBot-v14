module.exports = (client) => {
  client.antiCrash = () => {
    process.on("unhandledRejection", (error) => {
      console.log(" [Anti-Crash] :: Unhandled Rejection/Catch ");
      console.error(error.stack);
    });

    process.on("uncaughtException", (error) => {
      console.log(" [Anti-Crash] :: Uncaught Exception/Catch ");
      console.error(error.stack);
    });

    process.on("uncaughtExceptionMonitor", (error) => {
      console.log(" [Anti-Crash] :: Uncaught Exception/Catch (MONITOR) ");
      console.error(error.stack);
    });

    process.on("beforeExit", (error) => {
      console.log(" [Anti-crash] :: Before Exit/Catch ");
      console.error(error);
    });

    process.on("exit", (error) => {
      console.log("  [Anti-crash] :: Exit/Catch ");
      console.error(error);
    });
  };
};
