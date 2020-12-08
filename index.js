console.log(`Loading Bot...`)

const fs = require(`fs`)
const Discord = require(`discord.js`)
const client = new Discord.Client()

const config = JSON.parse(fs.readFileSync("./config.json"))

client.login(config.token)

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setPresence({ activity: { name: `Internal Testing | ${config.version}` }, status: 'online' })
})

client.on('message', message => {
    if (message.content == config.prefix + "test") {
        message.channel.send("test!")
    }
})