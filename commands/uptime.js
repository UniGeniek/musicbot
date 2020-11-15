module.exports = {
  name: "uptime",
  aliases: ["u"],
  description: "Посмотреть время произведения крутого исполнителя MORGENSHTERN",
  execute(message) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return message
      .reply(`Время: \`${days} день(дней),${hours} часов, ${minutes} минут, ${seconds} секунд\``)
      .catch(console.error);
  }
};
