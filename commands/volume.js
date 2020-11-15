const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Поменять громкость.",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("Ничего не играет.").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("Тебе надо зайти в канал сначало!").catch(console.error);

    if (!args[0]) return message.reply(`🔊 Громкость: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Напиши на какую громкость поставить это всё.").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.reply("Используй числа от 0 до 100.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`Громкость: **${args[0]}%**`).catch(console.error);
  }
};
