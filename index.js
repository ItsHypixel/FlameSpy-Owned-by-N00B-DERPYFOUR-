const Discord = require("discord.js");

const TOKEN = "NDU0Nzk1NjEzNzc5Nzg3Nzk2.Dfypjg.FIBnCG4zKpEXcdN-N5xblPpgQI8";
const PREFIX = "&"

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}


var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Certainly",
    "Defenitly not!",
    "Potentially in the future",
    "Nope"
];

var meme = [
    "***Oof!***\nhttps://www.youtube.com/watch?v=f49ELvryhao",
    "***Somebody toucha my spaget!***\nhttps://www.youtube.com/watch?v=cE1FrqheQNI",
    "***Dab!***\nhttps://i.ytimg.com/vi/GRpJk1uERKA/maxresdefault.jpg",
    "***Water Bottle Flip!***\nhttps://ih1.redbubble.net/image.299265363.7156/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg",
    "***Fidget Spinner!***\nhttps://i.pinimg.com/originals/70/b1/e3/70b1e3201d025f1ae0cc0e1fbcb9522b.jpg",
    "***Fortnite Dances!***\nhttps://i.embed.ly/1/image?url=https%3A%2F%2Fthumbs.gfycat.com%2FCompassionateDisloyalGourami-size_restricted.gif&key=b1e305db91cf4aa5a86b732cc9fffceb",
    "***Doge!***\nhttp://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg",
    "***Keyboard Cat!***\nhttp://i0.kym-cdn.com/entries/icons/original/000/000/166/keyboar.jpg",
    "***Gabe the dog!***\nhttps://i.ytimg.com/vi/qs51YxGSO4s/maxresdefault.jpg",
    "***Pepe!***\nhttp://i0.kym-cdn.com/entries/icons/mobile/000/017/618/pepefroggie.jpg",
    "***Nick Crompton!***\nhttp://i0.kym-cdn.com/entries/icons/original/000/023/475/maxresdefault_(14).jpg",
    "***Jake & Logan Paul!***\nhttps://i.imgur.com/FOOXSD6.png",
    "***Windows XP Error!***\nhttps://www.youtube.com/watch?v=iqztd7uMvVI\nhttps://lh3.ggpht.com/1YuMcOFqLEGZQwwouL6mZ3feErul28dvoOaaR2rshoDN3xu2poOn1NB-pQ7cHcPZ8szC=s180",
    "***Minecraft!***\nhttps://i.imgur.com/34mlziw.png",
    "***Mine diamonds!***\nhttps://www.youtube.com/watch?v=dgha9S39Y6M",
    "***Notch's Plan***\nhttps://www.youtube.com/watch?v=9Zbj0X7ioyg",
    "***Baldi's Basics!***\nhttps://mystman12.itch.io/baldis-basics",
    "***Ali-A's intro!*** ***EARRAPE WARNING 🚫***\nhttps://www.youtube.com/watch?v=i8nJAz_n7go",
    "***Meme Review!*** 👏 👏\nhttps://www.youtube.com/watch?v=ptYSpR9cTHU&list=PLYH8WvNV1YEn_iiBMZiZ2aWugQfN1qVfM",
    "***Dame Tu Cosita!*** ***WEIRD***\nhttps://www.youtube.com/watch?v=FzG4uDgje3M",
    "***All Star!***\nhttps://www.youtube.com/watch?v=L_jWHffIx5E",
    "***Take on me!***\nhttps://www.youtube.com/watch?v=djV11Xbc914",
    "***T-Pose***\nhttps://i.imgur.com/OXebPYx.png",
    "***TRUMP AND HILLARY***\nhttps://i.imgur.com/nBxwE70.png",
    "***Gangnam Style!***\nhttps://www.youtube.com/watch?v=9bZkp7q19f0",
    "***DISGUSTANG***\nhttps://www.youtube.com/watch?v=E4cM9etuopo",
    "***YEE***\nhttps://www.youtube.com/watch?v=q6EoRBvdVPQ",
    "***YEET***\nhttps://www.youtube.com/watch?v=xUEqDQOjAlA",
    "***Despacito 8***\nhttps://www.youtube.com/watch?v=kJQP7kiw5Fk",
    "***Ugandan Knuckles*** *clicks with tongue*\nhttps://www.youtube.com/watch?v=F3HK628agYI",
    "***Pingu!*** **NOOT NOOT**\nhttp://nootnoot.net/"
]

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
     console.log("FlameSpy is running with "+bot.users.size+" users in "+bot.channels.size+" channels of "+bot.guilds.size+" guilds! 👍");
     bot.user.setActivity("Do &help for help!");
});

bot.on("message", function(message) {
     if (message.author.equals(bot.user)) return;

     if (!message.content.startsWith(PREFIX)) return;

     var args = message.content.substring(PREFIX.length).split(" ");

     switch (args[0].toLowerCase()) {
          case "ping":
             message.channel.send("FlameSpy is running with "+bot.users.size+" users in "+bot.channels.size+" channels of "+bot.guilds.size+" guilds! 👍");
             break;
          case "help":
             var embed = new Discord.RichEmbed()
                 .setTitle(":boom: ***FlameSpy Bot Commands*** :boom:")
                 .setDescription("***The PREFIX is*** &")
                 .addField(" - *help*", "Commands list")
                 .addField(" - *info*", "Bot Information including when it was made, where and what it does.")
                 .addField(" - *ping*", "Bot status")
                 .addField(" - *status*", "Bot status")
                 .addField(" - *fortune*", "A fortune teller command ***HOW TO USE :*** **Eg. &ortune Am I butiful?**")
                 .addField(" - *embed*", "Makes a embed with your discord icon **(Still W.I.P)**")
                 .addField(" - *randomhex*", "Generates a random hex colour code")
                 .addField(" - *genhex*", "Generates a random hex colour code")
                 .addField(" - *meme*", "Outputs a random meme listed")
                 .setColor("#20D1DE")
                 .setFooter("Made by FlameSpy")
                 .setThumbnail("https://i.imgur.com/pcTjwPz.png")
             message.author.send(embed).catch(console.error); 
             message.channel.send("Sent to your DM's!")
      break;  
          case "info":
             message.channel.send(":boom: ***FlameSpy Bot Info*** :boom: \n When was I made? : The 8th of June 2018 \n Where were you made? : Australia \n What do you do? : At the moment not much, but soon alot more!\n Who made you? : NOOB-DERPYFOUR#7141 (A.K.A Your Mom)")
             break;
          default:
             message.channel.send("Invalid command 🚫 \n Use &help to see valid commands.")
             break;
          case "status":
             message.channel.send("FlameSpy is running with "+bot.users.size+" users in "+bot.channels.size+" channels of "+bot.guilds.size+" guilds! 👍");
             break;
          case "fortune":
              if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
              else message.channel.send("Please enter your question!");
              break;
          case "randomhex":
               message.channel.send(generateHex())
               break;
          case "genhex":
               message.channel.send(generateHex())
               break;
          case "meme":
              message.channel.send(meme[Math.floor(Math.random() * meme.length)]);
              break;
          case "embed":
              var arguments = message.contents.split('|');
              if(arguments && arguments.length == 3){
                var embed = new Discord.RichEmbed();
                    embed.setTitle(arguments[0]);
                    embed.setDescription(arguments[1]);
                    embed.setColor(arguments[2]);
                    embed.setFooter("Thanks to Luke! ")
              message.author.send(embed)
              message.channel.send("Sent to your DM's!")
            } else {
                message.channel.send("You need to put in the arguments! **Eg.** &embed Title|Description|Colour.\n ***Also If your colour isnt a #FFF000 or something simular it won't work.***");
            }
              break;
          case "setnick":
              if (args[1]) message.member.setNickname(args[1]);
              break;
          case "":
              break;
     };
});

bot.login(TOKEN);