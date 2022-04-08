const { Client, Intents, Message } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const fs = require('fs');


client.on('ready', async() => {
  console.log(`Logged in as ${client.user.tag}!`);

  var text = fs.readFileSync("./id.txt", 'utf-8');
var IDs = text.split('\n')
for (var ID of IDs) {
    var fetchedUser = await client.users.fetch(ID).then(u => u).catch(undefined)
    if (!fetchedUser) continue;
    await fetchedUser.send("coucou la street").then(m => {
        if(m){
            console.log(`Send ${fetchedUser.username}`)
        }
    }).catch(err => console.log(`Block ${fetchedUser.username}`))
}
})



client.login("") 