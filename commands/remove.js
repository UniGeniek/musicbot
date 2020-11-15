const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "remove",
  aliases: ["rm"],
  description: "Убрать песню из плейлиста",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Здесь нету песни.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`Исп: ${message.client.prefix}remove <число песни>`);
    if (isNaN(args[0])) return message.reply(`Исп: ${message.client.prefix}remove <число песни>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ убрал **${song[0].title}** из плейлиста.`);
  }
};
