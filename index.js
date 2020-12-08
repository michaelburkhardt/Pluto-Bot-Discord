console.log(`Loading Bot...`)

const fs = require(`fs`)
const Discord = require(`discord.js`)
const client = new Discord.Client()

const config = JSON.parse(fs.readFileSync("./config.json"))

client.login(config.token)

client.on('ready', () => {
    console.log(`Registered as ${client.user.tag}`)
    client.user.setPresence({ activity: { name: 'test' }, status: 'online' })
})

client.on('message', message => {
    message.channel.send("Michael Peroxaan")
})