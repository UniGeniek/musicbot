const fs = require("fs");
let config;

try {
  config = require("../config.json");
} catch (error) {
  config = null;
}

module.exports = {
  name: "pruning",
  description: "Переключить на очистку сообщений бота",
  execute(message) {
    if (!config) return;
    config.PRUNING = !config.PRUNING;

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), (err) => {
      if (err) {
        console.log(err);
        return message.channel.send("Произошла ошибка в добавление БД.").catch(console.error);
      }

      return message.channel
        .send(`Message pruning is ${config.PRUNING ? "**включено**" : "**отключено**"}`)
        .catch(console.error);
    });
  }
};
