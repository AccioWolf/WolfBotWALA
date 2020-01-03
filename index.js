const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});



const Discord = require("discord.js");
const ms = require("ms");
const client = new Discord.Client();
var prefix = ("&");
client.commands = new Discord.Collection();

client.on("ready", () => {

 console.log("Je suis prêt !");
 client.user.setGame(`&help | Dev : Accio`, 'https://twitch.tv/loveuluna');
});

client.on('message', async message => { 

//help
if (message.content === prefix + 'help'){
  var help_embed = new Discord.RichEmbed()
  .setTitle("━━━━━━━━━━━[PAGE D'AIDE 1]━━━━━━━━━━━")
  .setColor('#000000')
	.addField('1)', ':wrench: utilitaire :')
	.addField('&help', 'Affiche ce menu')
  .addField('&stats', 'Donne les infos utilisateur en mp')
  .addField('&serv', 'Donne les infos du serveur actuel')
  .addField('&infos', 'Donne les infos du bot')
  .addField('&ping', 'Donne le ping du bot')
  .addField('&avatar', "Donne l'avatar utilisateur")
  .setFooter('• si il y a un problème avec le bot demande aux dev du bot, soit `" 𝘼𝙘𝙘𝙞𝙤 †#0001` •');
  message.channel.send(help_embed).catch(console.error)
}



if (message.content === prefix + 'help'){
  var help_embed = new Discord.RichEmbed()
  .setTitle("━━━━━━━━━━━[PAGE D'AIDE 2]━━━━━━━━━━━")
  .setColor('#000000')
	.addField('2)', ':police_car: modération :')
	.addField('&kick', 'Permet de kick un utilisateur')
  .addField('&ban', 'Permet de ban un utilisateur')
  .addField('~~&mute~~', '~~Permet de mute un utilisateur~~')
  .addField('~~&unmute~~', "~~Permet d'unmute un utilisateur~~")
  .addField('~~&warn~~', '~~Permet de donner un avertissement à un utilisateur~~')
  .addField('&clear {nombre de messages}', 'Supprime le nombre de message donné')
  .setFooter('• si il y a un problème avec le bot demande aux dev du bot, soit `" 𝘼𝙘𝙘𝙞𝙤 †#0001` •');
  message.channel.send(help_embed).catch(console.error)
}

if (message.content === prefix + 'help'){
  var help_embed = new Discord.RichEmbed()
  .setTitle("━━━━━━━━━━━[PAGE D'AIDE 3]━━━━━━━━━━━")
  .setColor('#000000')
	.addField('3)', ':bust_in_silhouette: autre :')
	.addField('&nitro', 'Donne un nitro ~~baka~~')
  .addField('&smile', 'Donne une citation émouvante')
  .addField('~~&embed {message}~~', '~~Transforme votre message en embed~~')
  .addField('&say {message}', 'Fait dire votre message au bot')
  .addField('&metal', 'Drop un Metal Dungeon, la chance !')
  .addField('&number', 'Donne un nombre aléatoire entre 1 et 10')
  .setFooter('• si il y a un problème avec le bot demande aux dev du bot, soit `" 𝘼𝙘𝙘𝙞𝙤 †#0001` •');
  message.channel.send(help_embed).catch(console.error)
}

if (message.content === prefix + 'help'){
  var help_embed = new Discord.RichEmbed()
  .setTitle("━━━━━━━━━[PAGE D'AIDE 4]━━━━━━━━━")
  .setColor('#000000')
	.addField('4)', ':joystick: Liste de commandes fun :')
  .addField('&pastebin', 'Donne le pastebin pour accéder aux commandes funs')
  .addField('&ghetto', "**I'M IN THE GHETTO**")
  .addField('&helpamis', 'Donne la page de remerciements des bros :)')
  .addField('&helpgage', "Donne la page d'aide pour le jeu des gages")
  .setImage('https://cdn.discordapp.com/attachments/659824858942930945/659887634742509568/1540553109_tumblr_npln00OcTB1ql77yso1_500.gif')
  .setFooter('• si il y a un problème avec le bot demande aux dev du bot, soit `" 𝘼𝙘𝙘𝙞𝙤 †#0001` •');
  message.channel.send(help_embed).catch(console.error)
}

//pastebin
if (message.content === prefix + "pastebin"){
  message.channel.send("https://pastebin.com/7AjzNSnP")
}

//botinfos
if (message.content === prefix + 'botinfos'){

  var help_embed = new Discord.RichEmbed()
  .setTitle("INFOS SUR LE BOT")
  .setColor("#000000")
  .addField("NOM", "Wolf's bot")
  .addField("Hashtag", "#3387")
  .addField("LIEN D'INVITATION (pour l'avoir sur votre serveur)", "https://discordapp.com/oauth2/authorize?client_id=655772232508899331&scope=bot&permissions=8")
  .setFooter('• si il y a un problème avec le bot demande aux dev du bot, soit `" 𝘼𝙘𝙘𝙞𝙤 †#0001` •')
  message.channel.send(help_embed).catch(console.error)
}

//amis
if (message.content === prefix + 'helpamis'){

  var help_embed = new Discord.RichEmbed()
  .setTitle("page de commandes pour les féros")
  .setColor("#000000")
  .addField("Commandes amis", "&luna, &clemclem, &nelreel, &dylan, &alicia, &oriane, &eva, &oriz, &lisa, &accio")
  .setFooter('• si il y a un problème avec le bot demande aux dev du bot, soit `" 𝘼𝙘𝙘𝙞𝙤 †#0001` •')
  message.channel.send(help_embed).catch(console.error)
}

//kick
var args = message.content.split(' ').join(' ').slice(5);

    if(message.content.startsWith(prefix + "kick")) {
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission d'expulser les membres du serveur ! ❌").catch(console.error);
  
      if(message.mentions.users.size === 0) {
          return message.channel.send("Vous devez mentionner un utilisateur");
      };

      var kick = message.guild.member(message.mentions.users.first());
      if(!kick) {
          return message.channel.send("Je ne trouve pas la personne demandé, soit tu l'a mal mentionné ou soit la personne n'est pas sur le serveur ! ❌").catch(console.error);
      };

      if(message.guild.member(kick).hasPermission("KICK_MEMBERS")) return message.channel.send("Impossible de l'expulser ! ❌").catch(console.error);

      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
          return message.channel.send("Je n'ai pas la permission d'expulser le membre choisi ! ❌").catch(console.error);
      };
      kick.kick().then(member => {
          var kick_embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle("Kick :")
          .addField("Membre kick:", `${member.user.username}`)
          .addField("ID :", `${member.user.id}`)
          .addField("raison :", `${args}`)
          .addField("Modérateur :", `${message.author.username}`)
          .setFooter("kick d'une personne")
          client.guild.channels.find("name", "").send(kick_embed).catch(console.error);

        });  
};

//ban
    if(message.content.startsWith(prefix + "ban")){
      message.delete()
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission de bannir un membre du serveur ! ❌").catch(console.error);

      if(message.mentions.users.size === 0) {
          return message.channel.send("Vous devez mentionner un utilisateur");
      };

      var ban = message.guild.member(message.mentions.users.first());
      if(!ban) {
          return message.channel.send("Je ne trouve pas la personne demander soit tu l'a mal mentionné ou soit elle ne fait pas parti du serveur ! ❌").catch(console.error);
      };

      if(message.guild.member(kick).hasPermission("BAN_MEMBERS")) return message.channel.send("Impossible de le bannir !").catch(console.error);

      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
          return message.channel.send("Je n'ai pas la permission de bannir le membre choisi ❌").catch(console.error);
      };
      ban.ban().then(member => {
          var ban_embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Ban :")
          .addField("Membre banni:", `${member.user.username}`)
          .addField("ID :", `${member.user.id}`)
          .addField("Modérateur :", `${message.author.username}`)
          .setFooter("ban d'une personne")
          client.guild.channels.find("name", "").send(ban_embed).catch(console.error);
        });
};

//clear
    if(message.content.startsWith(prefix + "clear")){
      message.delete()
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission ! ❌").catch(console.error);

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer ! Car sinon je ne peux rien faire ! ;) ").catch(console.error);
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`).catch(console.error);
            clear.clear().then(member => {
              var clear_embed = new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle("Clear :")
              .addField("Messages supprimés:", `${args[0]}`)
              .addField("Dans le salon :", `${message.channel.name}`)
              .addField("Modérateur :", `${message.author.username}`)
              .setFooter("clear de msg")
              client.guild.channels.find("name", "").send(clear_embed).catch(console.error);

          });
        });
};


//mute
    if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission ! ❌").catch(console.error);

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !').catch(console.error);
        };

        if(message.guild.member(kick).hasPermission("KICK_MEMBERS")) return message.channel.send("Impossible de le mute ! ❌").catch(console.error);

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il n'existe pas ! ❌").catch(console.error);
        };
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            var mute_embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Mute :")
            .addField("Membre mute:", `${mute.user.username}`)
            .addField("ID :", `${mute.user.id}`)
            .addField("Modérateur :", `${message.author.username}`)
            .setFooter("mute d'une personne")
            client.guild.channels.find("name", " ").send(mute_embed).catch(console.error);
          });
};

//unmute
    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission ! ❌").catch(console.error);

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !').catch(console.error);
        };

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il n'existe pas ! ❌").catch(console.error);
        };

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("Je n'ai pas la permission ! ❌").catch(console.error);
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
        client.channel.send(`${mute.user.username} n'est plus mute !`).catch(console.error);
        });
};

//say
    if (message.content.startsWith(prefix + "say")) {
      message.delete();
          
      var args = message.content.split(' ').join(' ').slice(5);
    
      if(!args) return message.channel.send("Tu dois me dire quelque chose !").catch(console.error);

      message.channel.send(`${args}`).catch(console.error);
};

//infos serveur + bot
  if(message.content === prefix + "infos") {
    var info_embed = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("Informations")
    .setDescription("Infos me concernant !")
    .addField("Nom du bot :", `${client.user.tag}`, true)
    .addField("ID :", `${client.user.id}`)
    .addField("Version :", "0.1")
    .addField("Lien d'invite pour l'avoir sur votre serveur :", "https://discordapp.com/oauth2/authorize?client_id=655772232508899331&scope=bot&permissions=8")
    .setFooter('• si il y a un problème avec le bot demande aux dev du bot, soit `" 𝘼𝙘𝙘𝙞𝙤 †#0001` •')
    message.channel.sendMessage(info_embed).catch(console.error);
};

  if(message.content === prefix + "serv") {
    var server_embed = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("Informations sur le serveur discord !")
    .addField("Nom du serveur :", message.guild.name)
    .addField("Créé le :", message.guild.createdAt)
    .addField("Tu as rejoint le :", message.member.joinedAt)
    .addField("Nombre de membres :", message.guild.memberCount)
    .addField("Nombre de catégories et de salons :", message.guild.channels.size)
    .setThumbnail(message.guild.avatarURL)
    .setFooter('• si il y a un problème avec le bot demande aux dev du bot, soit `" 𝘼𝙘𝙘𝙞𝙤 †#0001` •')
    message.channel.sendMessage(server_embed).catch(console.error);
};

//infos-joueur
if (!message.content.startsWith(prefix)) return;

var args = message.content.substring(prefix.length).split(" ");

switch (args[0].toLowerCase()) {

    case "stats":

    var userCreateDate = message.author.createdAt.toString().split(" ");
    var msgauthor = message.author.id;

    var stats_embed = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle(`Statistiques de joueur :`)
    .addField("Pseudo :", `${message.author.username}`)
    .addField(`ID du joueur :`, msgauthor, true)
    .addField(`Date d'inscription du joueur :`, userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
    .setThumbnail(message.author.avatarURL)
    message.reply("Tu peux regarder tes messages privés !")
     message.author.send(stats_embed).catch(console.error);

    break;

};

//dossier eva
if (message.content === prefix + "dossiereva") {
  message.reply('https://cdn.discordapp.com/attachments/615195068667658253/659334754679783424/JPEG_20191225_105917.jpg');
}

//dossier alicia
if (message.content === prefix + "dossieralicia") {
  message.reply('https://cdn.discordapp.com/attachments/618862092287737856/659872400611213333/Capture.PNG');
}


//RATATATATA
if (message.content === prefix + "ghetto") {
  message.reply('https://youtu.be/8M222TYTXJc');
  message.reply("Eva : I'm in the ghetto, Alicia : RATATA RATATA AAAAAH");
}

//gagehelp
if (message.content === prefix + 'helpgage'){
  var help_embed = new Discord.RichEmbed()
  .setTitle("━━━━━━━━[PAGE D'AIDE GAGE]━━━━━━━━")
  .setColor('#000000')
	.addField('2)', ':eggplant: gage :')
	.addField('&helpgage', 'Affiche ce menu')
  .addField('&gage', 'Te donne un gage au hasard')
  .addField('&yesgage', 'Utilise cette commande si tu réussis ton gage')
  .addField('&nogage', "Utilise cette commande si tu n'as pas réussis ton gage")
  .addField('&rerollgage', 'Change ton gage')
  .setImage('https://cdn.discordapp.com/attachments/659824858942930945/659887634742509568/1540553109_tumblr_npln00OcTB1ql77yso1_500.gif')
  .setFooter('• si il y a un problème avec le bot demande aux dev du bot, soit `" 𝘼𝙘𝙘𝙞𝙤 †#0001` •');
  message.channel.send(help_embed).catch(console.error)
}

//gage
if (message.content === prefix + "gage") {
  var myArray = [
    "chantes bim bam toi accapella.",
    "chantes On m'appelle l'ovni en écoutant Dame tu Cosita.",
    "simules un orgasme.",
    "cris le plus fort possible dans ton micro",
    "crées un drama sur un serveur.",
    'imites TheKairi78 dans sa vidéo "Mon compte twitter".',
    "demandes à un de tes potes de débiter dans son micro, bien - sûr tu mettras son son à 200%, et si tu n'arrives pas à garder ton casque un autre gage te seras attribué.",
    "demandes à un de tes potes de venir en vocal et imite - le.",
    "balances un dossier de toi.",
    "fais un cover de balance ton quoi d'Angèle.",
    "fais une déclaration d'amour à un(e) ami(e) de ton choix.",
    "fais un yes man (interdiction de dire non) avec tes amis pendant 30 minutes.",
    "imites le cri d'un éléphant en vocal avec tes amis.",
    "cris comme un coq à chaque heure tant que tu es dans le vocal.",
    `appelles un inconnu et essaies de placer "gros chibre de noir" dans la conversation, si tu n'y parviens pas, un autre gage te sera attribué.`
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)]
  message.reply(randomItem)
}

//rerollgage
if (message.content === prefix + "rerollgage") {
  var myArray = [
    "chantes bim bam toi accapella.",
    "chantes On m'appelle l'ovni en écoutant Dame tu Cosita.",
    "simules un orgasme.",
    "cris le plus fort possible dans ton micro",
    "crées un drama sur un serveur.",
    'imites TheKairi78 dans sa vidéo "Mon compte twitter".',
    "demandes à un de tes potes de débiter dans son micro, bien - sûr tu mettras son son à 200%, et si tu n'arrives pas à garder ton casque un autre gage te seras attribué.",
    "demandes à un de tes potes de venir en vocal et imite - le.",
    "balances un dossier de toi.",
    "fais un cover de balance ton quoi d'Angèle.",
    "fais une déclaration d'amour à un(e) ami(e) de ton choix.",
    "fais un yes man (interdiction de dire non) avec tes amis pendant 30 minutes.",
    "imites le cri d'un éléphant en vocal avec tes amis.",
    "cris comme un coq à chaque heure tant que tu es dans le vocal.",
    `appelles un inconnu et essaies de placer "gros chibre de noir" dans la conversation, si tu n'y parviens pas, un autre gage te sera attribué.`
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)]
  message.reply(randomItem)
}

//yesgage
if (message.content === prefix + "yesgage") {
  message.reply('bien joué !')
}

//nogage
if (message.content === prefix + "nogage") {
  var myArray = [
    "chantes bim bam toi accapella.",
    "chantes On m'appelle l'ovni en écoutant Dame tu Cosita.",
    "simules un orgasme.",
    "cris le plus fort possible dans ton micro",
    "crées un drama sur un serveur.",
    'imites TheKairi78 dans sa vidéo "Mon compte twitter".',
    "demandes à un de tes potes de débiter dans son micro, bien - sûr tu mettras son son à 200%, et si tu n'arrives pas à garder ton casque un autre gage te seras attribué.",
    "demandes à un de tes potes de venir en vocal et imite - le.",
    "balances un dossier de toi.",
    "fais un cover de balance ton quoi d'Angèle.",
    "fais une déclaration d'amour à un(e) ami(e) de ton choix.",
    "fais un yes man (interdiction de dire non) avec tes amis pendant 30 minutes.",
    "imites le cri d'un éléphant en vocal avec tes amis.",
    "cris comme un coq à chaque heure tant que tu es dans le vocal.",
    `appelles un inconnu et essaies de placer "gros chibre de noir" dans la conversation, si tu n'y parviens pas, un autre gage te sera attribué.`
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)]
  message.reply("t'es nul XD nouveau gage pour toi :")
  message.channel.send(randomItem)
}

//metal dungeon
if (message.content === prefix + "metal") {
  var myArray = [
    "https://discord.gift/KAeaUr9p8QSt9X3NfWdf7Yz5",
    "https://discord.gift/zef5CSyFEv7GU4vmmXywERNF",
    "https://discord.gift/r43shVb9t4D7CfU53grgKMMr",
    "https://discord.gift/TSYhjtk3pd9TnAvmpBG6XYJP",
    "https://discord.gift/jXyzsSTtwdpWjnAmSAaNQrYc",
    'https://discord.gift/95BJNgugy5TYrKAEGux6YtWM',
    "https://discord.gift/jNMfGND88PePMVSKnx2YRQGS",
    "https://discord.gift/9BNtz7PjpCZSV85sNaBsD9nB",
    "https://discord.gift/6gPfQ3wsWYBs6dyPbyqT4aj3",
    "https://discord.gift/rp2Z2sjJPqhjubjrwDDXa4cX",
    "https://discord.gift/TC3W8QrrpmZkb3SsxRzpHTzT",
    "https://discord.gift/cNFCnMGRaTBmcyeRu7NSsZqk",
    "https://discord.gift/ATzSnmGTUcfFRag9Q49wqUpQ",
    "https://discord.gift/rZQe9Pa3bCzrRw4wyQKWBsJV",
    `https://discord.gift/HcY3zFzCWBMnfKz3q3mZkEZn`,
    "https://discord.gift/NBhZwGtppWaG9mvtt4ekKMZZ",
    "https://discord.gift/RTcWpYAB3YzFhdK5EPZBrcwZ",
    "https://discord.gift/6VxXNZ8ut3ceeehdtTuQZJBE"
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)]
  message.channel.send("Tiens ton metal dungeon :")
  message.channel.send(randomItem)
}

//number
if (message.content === prefix + "number") {
  var myArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    '6',
    "7",
    "8",
    "9",
    "10"
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)]
  message.channel.send("ton nombre est...")
  message.channel.send(randomItem)
} 

//commande fun
if (message.content === prefix + "gomugomu"){
  message.channel.send("https://media1.giphy.com/media/CmXrK02W9BpAY/giphy.gif")
}

if (message.content === prefix + "bazooka"){
  message.channel.send("https://thumbs.gfycat.com/RelievedRewardingHedgehog-size_restricted.gif")
}

if (message.content === prefix + "elephantgatling"){
  messageage.channel.send("https://media1.giphy.com/media/8SY5ubqhDDD5m/source.gif")
}

if (message.content === prefix + "gatling"){
  message.channel.send("https://thumbs.gfycat.com/ThirdImaginativeIslandcanary-size_restricted.gif")
}

if (message.content === prefix + "gear2"){
  message.channel.send("https://66.media.tumblr.com/733f6977a8732d7d1d1e444054fa140c/tumblr_o2s4karJ151uur287o1_400.gif")
}

if (message.content === prefix + "gear3"){
  message.channel.send("https://thumbs.gfycat.com/AnotherUnselfishArachnid-size_restricted.gif")
}

if (message.content === prefix + "gear4bounceman"){
  message.channel.send("https://media.discordapp.net/attachments/619778474562813972/625778067222036490/inconnu.gif")
}

if (message.content === prefix + "gigantrifle"){
  message.channel.send("https://media.giphy.com/media/mwOrBes5IuYRa/giphy.gif")
}

if (message.content === prefix + "dokudoku"){
  message.channel.send("https://thumbs.gfycat.com/AbleDarlingBluefish-small.gif")
}

if (message.content === prefix + "hydra"){
message.channel.send("http://24.media.tumblr.com/tumblr_m1ersnDVNy1r18y5qo3_500.gif")
}

if (message.content === prefix +"diablejambe"){
  message.channel.send("https://media.giphy.com/media/RuRd67S6IfDEI/giphy.gif")
}

if (message.content === prefix + "wow"){
  message.channel.send("https://tenor.com/view/luffy-amazed-one-piece-wow-sparkling-eyes-gif-11559163")
}

if (message.content === prefix + "100tuiles"){
  message.channel.send("https://24.media.tumblr.com/tumblr_m4r2g1DcgT1ruuu4oo3_500.gif")
}

if (message.content === prefix + "armementhaki"){
  message.channel.send("http://31.media.tumblr.com/tumblr_m8eq1qdzdN1qczibyo1_500.gif")
}

if (message.content === prefix + "barabara"){
  message.channel.send("https://i.gifer.com/embedded/download/14qw.gif")
}

if (message.content === prefix + "claque"){
  message.channel.send("https://thumbs.gfycat.com/SarcasticDiscreteCicada-size_restricted.gif")
}

if (message.content === prefix + "collier"){
  message.channel.send("https://thumbs.gfycat.com/SilverImportantGreatwhiteshark-max-1mb.gif")
}

if (message.content === prefix + "cotelette"){
  message.channel.send("https://66.media.tumblr.com/9acd691efd9263260dc7e6736494d61d/tumblr_ovi6lqtR7u1wt70obo3_r1_500.gifv")
}

if (message.content === prefix + "daisensekai"){
  message.channel.send("https://thumbs.gfycat.com/DetailedThinIcelandicsheepdog-size_restricted.gif")
}

if (message.content === prefix + "diablejambe"){
  message.channel.send("https://media.giphy.com/media/RuRd67S6IfDEI/giphy.gif")
}

if (message.content === prefix + "enkai"){
  message.channel.send("https://thumbs.gfycat.com/AgedShockedAnchovy-size_restricted.gif")
}
if (message.content === prefix + "firepistol"){
  message.channel.send("https://media3.giphy.com/media/z8499G57Bne3m/giphy.gif")
}

if (message.content === prefix + "gorogoro"){
  message.channel.send("https://i.imgur.com/PAekPfV.gif")
}

if (message.content === prefix + "grillshoot"){
  message.channel.send("https://thumbs.gfycat.com/PositiveLastingCrocodileskink-size_restricted.gif")
}

if (message.content === prefix + "guragura"){
  message.channel.send("https://thumbs.gfycat.com/DigitalObedientHarborporpoise-size_restricted.gif")
}

if (message.content === prefix + "hakidesrois"){
  message.channel.send("https://media1.tenor.com/images/7bf34b7bd0cb5190f8154caa422b0bbf/tenor.gif?itemid=12003989")
}

if (message.content === prefix + "hanahana"){
  message.channel.send("https://giffiles.alphacoders.com/945/94500.gif")
}

if (message.content === prefix + "hellmemories"){
  message.channel.send("https://thumbs.gfycat.com/SpiffyBlushingIaerismetalmark-size_restricted.gif")
}

if (message.content === prefix + "hiehie"){
  message.channel.send("https://i.skyrock.net/1642/91771642/pics/3256225264_1_9_leHHHGq5.gif")
}

if (message.content === prefix + "iceage"){
  message.channel.send("https://thumbs.gfycat.com/PortlyUnrulyGoose-size_restricted.gif")
}

if (message.content === prefix + "jetpistol"){
  message.channel.send("https://i.skyrock.net/4923/85214923/pics/3116795427_1_7_aH0G90TQ.gif")
}

if (message.content === prefix + "kagekage"){
  message.channel.send("https://static.comicvine.com/uploads/original/11130/111303419/5937445-4921191993-K8vbU.gif")
}

if (message.content === prefix + "kami-e"){
  message.channel.send("http://giphygifs.s3.amazonaws.com/media/26EorKSMluM5G/giphy.gif")
}

if (message.content === prefix + "karakusagawara"){
  message.channel.send("https://thumbs.gfycat.com/UntimelyWelcomeBlackbird-size_restricted.gif")
}

if (message.content === prefix + "kleshaslash"){
  message.channel.send("https://thumbs.gfycat.com/WideHoarseFeline-size_restricted.gif")
}

if (message.content === prefix + "magumagu"){
  message.channel.send("https://media2.giphy.com/media/1Thu2O3d1grbW/giphy.gif")
}

if (message.content === prefix + "marine"){
  message.channel.send("http://giphygifs.s3.amazonaws.com/media/KXtbsJtEYBLJ6/giphy.gif")
}

if (message.content === prefix + "meramera"){
  message.channel.send("https://merameragunman.weebly.com/uploads/8/5/4/5/85450066/tumblr-n9ga8ew8ye1rib6ggo1-500_orig.gif")
}

if (message.content === prefix + "meromero"){
  message.channel.send("https://media3.giphy.com/media/rXDlIpa23st68/source.gif")
}

if (message.content === prefix + "mokumoku"){
  message.channel.send("https://pa1.narvii.com/5914/e0d0b736b99b0855991cab3845389cde566424ad_hq.gif")
}

if (message.content === prefix + "moutonshoot"){
  message.channel.send("https://thumbs.gfycat.com/InsignificantEnergeticJaguarundi-size_restricted.gif")
}

if (message.content === prefix + "noronoro"){
  message.channel.send("https://i.gifer.com/HGFP.gif")
}

if (message.content === prefix + "observationhaki"){
  message.channel.send("https://66.media.tumblr.com/b5f7e77c64fd28c1d7b07d326549b2ea/tumblr_oi9ma0Gx1J1udfpuvo1_500.gif")
}

if (message.content === prefix + "onepiece"){
  message.channel.send("https://data.whicdn.com/images/170810491/original.gif")
}

if (message.client === prefix + "onigiri"){
  message.channel.client("https://media0.giphy.com/media/TUdQDG4vqWgZa/giphy.gif")
}

if (message.content === prefix + "opening"){
  message.channel.client("https://media1.giphy.com/media/pObKOc9ovhiKCe4PkP/giphy.gif")
}

if (message.content === prefix + "phoenix"){
  message.channel.send("https://i.pinimg.com/originals/00/88/76/00887674b4a9f4be1c118c5ca392afc7.gif")
}

if (message.content === prefix + "pikapika"){
  message.channel.send("https://thumbs.gfycat.com/AptFarflungCrow-size_restricted.gif")
}

if (message.content === prefix + "pirate"){
  message.channel.send("https://media.giphy.com/media/pVSyYjw8OJIS4/giphy.gif")
}

if (message.content === prefix + "poingardent"){
  message.channel.send("http://images6.fanpop.com/image/photos/40700000/-Fire-Fist-Ace-ace-d-portgas-40794027-500-281.gif")
}

if (message.content === prefix + "rankyaku"){
  message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCSpXRjkjtcWOyYoeTaat6XR9eUfrROd8U4ccJzjXV6hbBMZZ0")
}

if (message.content === prefix + "redhawk"){
  message.channel.send("https://media.giphy.com/media/yTq3mImMqWNAQ/giphy.gif")
}

if (message.content === prefix + "revolutionnaire"){
  message.channel.send("https://media3.giphy.com/media/fABVGBT3zwa7m/200.webp?cid=790b7611d332b9152d8bdffacdb4116d0bc997f6e746aad1&rid=200.webp")
}

if (message.content === prefix + "rokuogan"){
  message.channel.send("https://66.media.tumblr.com/0277e448d326859b94192141f5f4be96/tumblr_phes6zmMI61u2y3gc_540.gif")
}

if (message.content === prefix + "sandaikitetsu"){
  message.channel.send("https://i.makeagif.com/media/2-29-2016/hP97Kq.gif")
}

if (message.content === prefix + "santouryu"){
  message.channel.send("http://giphygifs.s3.amazonaws.com/media/OmjkaFqFb7h1C/giphy.gif")
}

if (message.content === prefix + "shigan"){
  message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYcrqTGTBqTTLQJk5s7UrACBFhJz1KMZeQiOqex2fFQMD15Q_Y")
}

if (message.content === prefix + "shusui"){
  message.channel.send("http://pa1.narvii.com/6319/e254c523619a0dcf4d0ca95e2c44b4b457445f3c_hq.gif")
}

if (message.content === prefix + "snakeman"){
  message.channel.send("https://tenor.com/view/katakurigg-dodge-katakuri-b8-one-piece-gif-13980072")
}

if (message.content === prefix + "soru"){
  message.channel.send("https://thumbs.gfycat.com/ImaginaryGiftedAntbear-size_restricted.gif")
}

if (message.content === prefix + "sunasuna"){
  message.channel.send("https://pa1.narvii.com/6124/5b296470205a99b0c0f3c107bdb0d622441cd88f_hq.gif")
}

if (message.content === prefix + "tekkai"){
  message.channel.send("https://thumbs.gfycat.com/ResponsibleGargantuanDuck-small.gif")
}

if (message.content === prefix + "toritori"){
  message.channel.send("https://thumbs.gfycat.com/FragrantWanAlpinegoat-size_restricted.gif")
}

if (message.content === prefix + "wadoichimonji"){
  message.channel.send("http://pa1.narvii.com/6508/157f53e05296275fc909835993f16b0a27434479_hq.gif")
}

if (message.content === prefix + "yamiyami"){
  message.channel.send("https://media1.giphy.com/media/oI8cQHA57DTt6/giphy.gif")
}

if (message.content === prefix + "yoru"){
  message.channel.send("https://thumbs.gfycat.com/UnequaledWaryAnteater-size_restricted.gif")
}

if (message.content === prefix + "nitro"){
  message.channel.send("`https://discord.gift/hT4rgox65dpt`")
  message.channel.send("`Oof t'as cru toi`")
}

if (message.content === prefix + "luna"){
  message.channel.send("`La best <3`")
}

if (message.content === prefix + "clemclem"){
  message.channel.send("`La pire :3 (jrigole la 2ème meilleure)`")
}

if (message.content === prefix + "nelreel"){
  message.channel.send("`Un peu salé mais on l'aime ;)`")
}

if (message.content === prefix + "dylan"){
  message.channel.send("`Gros con mais... ah bah non on l'aime pas.`")
}

if (message.content === prefix + "eva"){
  message.channel.send("`BFF WIIIIIIIIIIIIIIIII CX`")
}

if (message.content === prefix + "alicia"){
  message.channel.send("`La pire X)`")
}

if (message.content === prefix + "oriane"){
  message.channel.send("`Un peu bête défois mais elle est gentille :>`")
}

if (message.content === prefix + "oriz"){
  message.channel.send("`Un peu chiante mais elle est sympa quand même cX`")
}

if (message.content === prefix + "lisa"){
  message.channel.send("`Boudeuse pro XD`")
}

if (message.content === prefix + "accio"){
  message.channel.send("`X-tra MECHANT (et con aussi mais chut)`")
}

if (message.content === prefix + "smile"){
  message.channel.send("`Une journée sans rire est une journée perdue, alors souriez` :smile: `!`")
}

if (message.content === prefix + "avatar") {
    message.reply(message.author.avatarURL);
  }
});

//ping du bot
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + 'ping')) {
       message.channel.sendMessage('Pong moi ça ! mon ping est de `' + `${Date.now() - message.createdTimestamp}` + ' ms`').catch(console.error);
  };
});


client.login(process.env.BOT_TOKEN);
