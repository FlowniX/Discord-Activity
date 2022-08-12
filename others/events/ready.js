const rpc = require("discordrpcgenerator");
const config = require(".././status.json")

module.exports = async(client) => {
  const small = await rpc.getRpcImage(config.applicationid, config.assets.smallimage.key);
  rpc.getRpcImage(config.applicationid, config.assets.largeimage.key)
  .then(large => {
    let presence = new rpc.Rpc()
    .setApplicationId(config.applicationid)
    .setType(config.type)
    .setUrl(config.url)
    .setName(config.name)
    .setDetails(config.details)
    .setState(config.state)
    .setAssetsLargeImage(large.id)
    .setAssetsLargeText(config.assets.largeimage.text)
    .setAssetsSmallImage(small.id)
    .setAssetsSmallText(config.assets.smallimage.text)
    .setStartTimestamp(config.time || Date.now())
    client.user.setStatus(config.status);
    client.user.setPresence(presence.toDiscord()).catch(console.error);
  });
  console.log("\033[1;32m❯\033[1;37m Seu status de natividade foi iniciado com sucesso!");
}











