const { REST, Routes } = require("discord.js");
const { clientId, token } = require("../config.json");

const rest = new REST().setToken(token);

const commandId = "COMMAND_ID";

rest
  .delete(Routes.applicationCommand(clientId, commandId))
  .then(() => console.log("Successfully deleted application command"))
  .catch(console.error);
