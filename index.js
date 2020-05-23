// Response for Uptime Robot
const http = require('http');
http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Bot is active now!! \n');
}).listen(3000);

// Discord bot implements
const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', message =>
{
    client.user.setPresence({ game: { name: 'h!help | Status | 導入Server : 18　　　グロチャ完成まじ嬉しい' } });  
  console.log('bot is ready!');
});

client.on('message', message =>
{
	if(message.isMemberMentioned(client.user))
	{
		message.reply( '```ヘルプ表示はh!helpです！```' );
		return;
	}
});

if(process.env.DISCORD_BOT_TOKEN == undefined)
{
	console.log('please set ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );


   client.on('message', message =>
{
    if (message.channel.name === 'hayashi-chat')
    {
        if (message.author.bot) return;
        
           if (message.content.match(/youtube.com/)) {
   return
  };

     if (message.content.match(/youtu.be/)) {
   return
  };
     
    if (message.content.match(/bit.ly/)) {
   return
  }; 
     
     if (message.content.match(/twitter.com/)) {
   return
  }; 
     
          if (message.content.match(/死ね/)) {
   return
  }; 
     
          if (message.content.match(/きっしょ/)) {
   return
  }; 
     
          if (message.content.match(/@everyone/)) {
   return
  }; 
     
          if (message.content.match(/@here/)) {
   return
  }; 
     
            if (message.content.match(/Fuck You/)) {
   return
  }; 
      
            if (message.content.match(/おっぱい/)) {
   return
  }; 
     
                 if (message.content.match(/まんこ/)) {
   return
  }; 
     
                       if (message.content.match(/うんこ/)) {
   return
  }; 
      
                       if (message.content.match(/💩/)) {
   return
  }; 
     
                      if (message.content.match(/ウンコ/)) {
   return
  }; 
    
                       if (message.content.match(/マンコ/)) {
   return
  }; 
      
                       if (message.content.match(/うんち/)) {
   return
  }; 
      
                       if (message.content.match(/ウンチ/)) {
   return
  }; 
      
                 if (message.content.match(/ちんこ/)) {
   return
  };       
      
                     if (message.content.match(/チンコ/)) {
   return
  };   
     
                       if (message.content.match(/SEX/)) {
   return
  }; 
     
                       if (message.content.match(/フェラ/)) {
   return
  }; 
     
                       if (message.content.match(/ふぇら/)) {
   return
  }; 
      
      if (message.attachments.size <= 0)
        {
            message.delete()
        }
        client.channels.forEach(channel =>
        {
            if (message.attachments.size <= 0)
            {
                const embed = new discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setTitle(message.content)
                    .setColor('RANDOM')
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'hayashi-chat')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }
            if (!message.attachments.forEach(attachment =>
            {
                const embed = new discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setImage(attachment.url)
                    .setTitle(attachment.url)
                    .setColor('RANDOM')
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'hayashi-chat')
                {
                   channel.send(embed)
                    return;
                }
                return;
            }));
            return;
        });
    }
});  
 
client.on('message', message => {
  if (message.content === 'h!test') {
    const replyText = '正常に稼働しています。'

    return message.reply(replyText)
      .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === 'h!help') {
    const replyText = '```🤖Help一覧🤖``` ```h!test=稼働しているかどうか調べるコマンドです。``` ```h!helpはこれです()``` ```h!hello=BOTがあいさつします``` ```h!ban=BANしたいやつがいるとき使ってね``` ```h!kick=KICKしたい人いたら使ってね``` ```h!official=公式鯖のURLを表示します``` ```h!globalkiyaku=林グローバルチャットの利用規約を表示します``` ```h!agree=利用規約に同意するとき使うコマンドです``` ```グローバルチャットの参加は #hayashi-chat というチャンネル作成すればできます``` ```退出したいときはチャンネルを消すか、名前を変えてください``` ```Hayashi Bot Invite URL↓``` https://discord.com/oauth2/authorize?client_id=680640361957425169&permissions=2082471159&scope=bot ```Brighten up every day with Hayashi Bot!``` ```🎊Have a nice day🎊``` ```by Hayashi Bot制作者 林君```'
    return message.reply(replyText)
      .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === 'h!hello') {
    const replyText = 'こんにちは！今日も一日頑張ろう！'

    return message.reply(replyText)
      .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === 'h!invite') {
    const replyText = '```BOT招待↓``` https://discord.com/oauth2/authorize?client_id=680640361957425169&permissions=2082471159&scope=bot ```このURL行ってね``` '
       return message.reply(replyText)
    .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === 'おはよう') {
    const replyText = 'おはようございます！今日も頑張りましょう！'

     return message.reply(replyText)
      .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === 'おやすみ') {
    const replyText = '今日も頑張りましたね！おやすみなさい...'

    return message.reply(replyText)
      .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === '林を起こす') {
    const replyText = 'さっさと起きろよこの野郎'

    return message.reply(replyText)
      .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === 'ちょっとなにいってるかわからない') {
    const replyText = 'あなたの言動の方が訳わかりませんよ🤣🤣'

    return message.reply(replyText)
      .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === '荒らし') {
    const replyText = 'あらしはいけませんよ！ちんちん🤣🤣'

    return message.reply(replyText)
      .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === 'Hayashi-Twitter') {
    const replyText = 'https://twitter.com/106996'

    return message.reply(replyText)
      .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === '野獣先輩') {
    const replyText = 'イキスギィ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！'

    return message.reply(replyText)
      .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === 'Hayashi-YouTube') {
    const replyText = 'https://www.youtube.com/channel/UChYN8vgjseGCtOQGjTVEDzg'

    return message.reply(replyText)
      .catch(console.error)
  }
})

client.on('message', message => {
  if (message.content === 'w') {
    const replyText = 'その心笑ってるね'

    return message.reply(replyText)
      .catch(console.error)
  }
})

 client.on('message', async message => {
   if (message.content === '!prompt') {
     message.channel.send('Yes か No を送信してください')
     const filter = msg => msg.author.id === message.author.id
     const collected = await message.channel.awaitMessages(filter, { max: 1, time: 10000 })
     const response = collected.first()
     if (!response) return message.channel.send('タイムアウト')
     if (!['Yes', 'No'].includes(response.content)) return message.channel.send('正しくありません')
     message.channel.send(`${response.content} が送信されました`)
   }
 })

		client.on('message', async message => {
   if (message.content.startsWith('h!ban') && message.guild) {
   	if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('BANする権限がありません')
     if (message.mentions.members.size !== 1) return message.channel.send('BANするメンバーを1人指定してください')
     const member = await message.mentions.members.first().ban()
     message.channel.send(`${member.user.tag}をBANしました`)
   }
 })

 client.on('message', async message => {
    if (message.content === 'やっほー') {
      const reply = await message.channel.send('こんにちは')
      reply.react('👋')
    }
  })
   
 client.on('message', async message => {
    if (message.content === '暇') {
      const reply = await message.channel.send('私はいつも暇です')
      reply.react('☹')
    }
  })

		client.on('message', async message => {
   if (message.content.startsWith('h!kick') && message.guild) {
   	if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('KICKする権限がありません')
     if (message.mentions.members.size !== 1) return message.channel.send('KICKするメンバーを1人指定してください')
     const member = await message.mentions.members.first().kick()
     message.channel.send(`${member.user.tag}をKICKしました`)
   }
 })

client.on('message', async message => {
    if (message.content === 'h!globalkiyaku') {
      const reply = await message.channel.send('```🎊林グローバルチャット利用規約🎊``` ```その1 荒らしを行わない``` ```荒らした場合は即BANやミュートの処置をします😡``` ```(できる限り荒らし対策はしています)``` ```その2 暴言、または下ネタを言わない(例 死ねちんちん)``` ```相手を傷つける行為はまずやめよう☹``` ```その3 SELF BOTを使わない``` ```使うこと自体がだめです😡``` ```上のルールを守って林グローバルチャットのご利用をお願いします🤭```')
    }
  })

client.on('message', async message => {
    if (message.content === 'h!official') {
      const reply = await message.channel.send('```Official Server``` https://discord.gg/TWRZx6B')
    }
  })


 client.on('message', async message => {
   if (message.content === 'h!agree') {
     const sent = await message.channel.send('```林グローバルチャットの利用規約に同意する場合は下のリアクションを押して下さい``` ```利用規約はh!globalkiyakuに書いてあります```')
     // クリックするだけでリアクションできるように自身でリアクションをしておく
     const reaction = await sent.react('✅')
     // ユーザーの❌のみに反応するためのフィルターを定義しておく
     const filter = (reaction, user) => reaction.emoji.name === '✅' && !user.bot
     // リアクションを待ち受けて処理を実行する
     sent.awaitReactions(filter, { max: 1, time: 5000, errors: ['time'] })
       .then(() => sent.channel.send('```🎊利用規約に同意されました！🎊```')) // リアクションがされたら送信したメッセージを削除する
       .catch(() => reaction.remove()) // リアクションされなかったら自身で付けたリアクションを消す
   }
 })

client.on('message', async message => {
    if (message.content === 'h!最近あった悲しい出来事') {
      const reply = await message.channel.send('ネタで死ねってコマンド作ったのにDMでとある人に注意されたこと...☹')
    }
  })

