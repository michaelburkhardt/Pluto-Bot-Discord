console.log(`Loading Bot...`)

const fs = require(`fs`)
const Discord = require(`discord.js`)
const client = new Discord.Client()

const config = JSON.parse(fs.readFileSync("./config.json"))

