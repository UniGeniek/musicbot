const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "loop",
  aliases: ["l"],
  description: "Повторяет музыку до тех пор пока не выключат.",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Здесь ничего не играет.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel.send(`Повтор сейчас: ${queue.loop ? "**вкл**" : "**выкл**"}`).catch(console.error);
  }
};
