export default class OrasConfig extends Object {
    token;
    prefix;
    nodes;
    spotiId;
    owners;
    spotiSecret;
    spotiNodes;
    webhooks;
    supportId;
    color;
    server;
    botinvite;
    voteUrl;
    voteApi;
    setupBgLink;
    constructor() {
        super();
        this.token =
            "MTI0MTIxNzAxOTA4OTc4MDc2Nw.GBhBt0.S-HH6hxg6wQYHmNrlip3B11zk81GOHmgqAtmBU";
        this.botid = "1241217019089780767"
        this.prefix = "+";
        this.nodes = [
            {
                name: `Kronix`,
                url: `lava.link:80`,
                auth: `kronix`,
                secure: false,
            },
          {
              name: `Oras`,
              url: `lava.link:80`,
              auth: `kronix`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteApi =
            "";
        this.webhooks = {
            guildCreate: "",//put webhook
            guildDelete: "",//put webhook
            Cmds: "",//put webhook
        };
        this.server = "https://discord.gg/calestials";
        this.botinvite = `https://discord.com/oauth2/authorize?client_id=1241217019089780767&permissions=3145728&scope=bot`;//put you bot invite link
        this.spotiId = "6c31645ffb004ab8b44d06f7b96d1b66";
        this.spotiSecret = "3618fdc0b4824cfd91a8d425dac32987";
        this.owners = ["1217030191247790092"];//put you discord id
        this.color = "#2b2d31";
        this.supportId = "1217031241409495110"; //Server Id
        this.spotiNodes = [
            {
                id: `Kronix`,
                host: `lava.link`,
                port: 80,
                password: `kronix`,
                secure: false,
            },
          {
              id: `Oras`,
              host: `lava.link`,
              port: 80,
              password: `kronix`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteUrl = "https://top.gg/bot/";
        this.setupBgLink =
            "https://media.discordapp.net/attachments/1190943041922535517/1190943144158691369/live_now.png?ex=65a3a33c&is=65912e3c&hm=3f442c1bd2f8b61e3be1f1c625d891df2b90334098765ca174750746912df20d&=&format=webp&quality=lossless&width=1000&height=562";
    }
}
//# sourceMappingURL=Config.js.map
