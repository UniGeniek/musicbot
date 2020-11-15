const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "Продолжить музыку.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Ничего не играет.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶ продолжил игру на балалайке! КАК ДЕЛА КАК ДЕЛА!`).catch(console.error);
    }

    return message.reply("Плейлист не на паузе.").catch(console.error);
  }
};
