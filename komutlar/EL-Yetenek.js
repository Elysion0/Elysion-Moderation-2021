const Discord = require('discord.js')
const config = require("../config.js")

exports.run = async (client, message, args) => {
        message.channel.send(new Discord.MessageEmbed().setDescription(`\

Öncelikle bir rol vermek istiyorsanız <@&${config.ability}> rolüne sahip olmalısınız!

------------------------------------------------------------

<@&${config.vocal}>  \`.vocal @Elysion/ID\`
<@&${config.designer}> \`.designer @Elysion/ID\`
<@&${config.sponsor}>   \`.sponsor @Elysion/ID\`
<@&${config.şair}>  \`.şair @Elysion/ID\`

`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor('2F3136')
            .setAuthor('Rol Yardım Menüsü!')
            .setFooter('Elysion ❤️')
        ) 
    }
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["yetenek"],
        permLevel: 0,
      }
      
      exports.help = {
        name: "ytnk"
      };