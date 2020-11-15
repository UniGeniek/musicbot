module.exports = {
  canModifyQueue(member) {
    const { channelID } = member.voice;
    const botChannel = member.guild.voice.channelID;

    if (channelID !== botChannel) {
      member.send(":negative_squared_cross_mark: || Зайди в канал сначало, а потом уже запускай команду!").catch(console.error);
      return;
    }

    return true;
  }
};
