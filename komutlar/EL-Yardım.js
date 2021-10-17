const Discord = require('discord.js')
const config = require("../config.js");
exports.run = async (client, message, args) => {
        message.channel.send(new Discord.MessageEmbed().setDescription(`\
.afk [sebep]
.avatar \`@Elysion/ID\`
.ban \`@Elysion/ID\` [sebep]
.ban-bilgi \`@Elysion/ID\`
.family
.join
.dashboard
.ekip
.kayıtsız\`@Elysion/ID\`
.0092 \`@Elysion/ID\`
.isim \`@Elysion/ID\`
.jail \`@Elysion/ID\` [süre] [sebep]
.mute \`@Elysion/ID\` [süre] [sebep]
.voice-mute \`@Elysion/ID\` [süre] [sebep]
.unjail \`@Elysion/ID\`
.unmute \`@Elysion/ID\`
.unban \`@Elysion/ID\`
.kes \`@Elysion/ID\`
.ekip/ekle/sil/bilgi \`@Elysion/ID\`
.voice-unmute \`@Elysion/ID\`
.çek \`@Elysion/ID\`
.git \`@Elysion/ID\`
.kes \`@Elysion/ID\`
.kb \`@Elysion/ID\`
.fgit \`@Elysion/ID\`
.fçek \`@Elysion/ID\`
.ses-kontrol \`@Elysion/ID\`
.sicil-temizle \`@Elysion/ID\`
.sicil \`@Elysion/ID\`
.erkek \`@Elysion/ID\`
.kız   \`@Elysion/ID\`
.isimler \`@Elysion/ID\`
.cihaz \`@Elysion/ID\`
.uyarı ekle/sil/bilgi \`@Elysion/ID\`
.rolbilgi \`@Rol-Adı\` 
.spotyengel \`aç/kapat\` 
.rolinfo \`@Rol-Adı\`
.rolver \`@Elysion/İD\`
.rollog \`@Rol-Adı\`
.zengin [isim]
.say
.ses
.sil
.snipe
.toplutaşı
.yetkilises
.tagaldı \`@Elysion/İD\`
.tagliste \`@Elysion/İD\`
-----------------------

.vocal \`@Elysion/ID\`
.designer \`@Elysion/ID\`
.sponsor \`@Elysion/ID\`
.şair \`@Elysion/ID\`

`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor('2F3136')
            .setFooter('Elysion was here ?')

            
        )
    }
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["yardım"],
        permLevel: 0,
      }
      
      exports.help = {
        name: "yardım"
      };