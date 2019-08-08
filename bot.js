const {Client, Attachment, RichEmbed, Guild, GuildMember, MessageMentions, Role} = require('discord.js');
const bot = new Client();
const superagent = require('superagent');
let state = '0'
const PREFIX = '​';
const testpre = '-';

bot.on('ready', () =>{
	console.log('Online.');
	bot.user.setActivity('you, baka.', { type: ('WATCHING')})
})


bot.on('guildMemberAdd', member =>{
	const channel = member.guild.channels.find(channel => channel.name === "welcome");
	if(!channel) return;
	let role = member.guild.roles.find("name", "Neppy");
	member.addRole(role.id);
	channel.sendMessage(`Welcome in HΞNTSI's Extravaganza Server, ${member}.`);
})

bot.on('guildMemberRemove', member =>{
	const channel = member.guild.channels.find(channel => channel.name === "welcome");
	if(!channel) return;
	channel.sendMessage(`${member} was too gay. Go play Fortnite.`)
})

bot.on('message', msg=>{

    if (msg.author.bot) return;
    if (msg.content.toLowerCase().includes('fortnite')) {
		function sleep (time) {
			return new Promise((resolve) => setTimeout(resolve, time));
		}
		sleep(3000).then(() => {
			state = '0'
		});
		if(state === '0'){
			state = '1'
			message.channel.send(`${msg.author.toString()}, you are gay and need some help!`);
		}
		else{
			return
		}
	}
	if (msg.content.toLowerCase().includes('owo')) {
		if (msg.content.toLowerCase().includes('-owo')) return;
		if (msg.content.toLowerCase().includes('fortnite')) return;
		if (msg.content.toLowerCase().includes('uwu')) return;
		if (msg.content.toLowerCase().includes('gay')) return;
        function sleep (time) {
			return new Promise((resolve) => setTimeout(resolve, time));
		}
		sleep(3000).then(() => {
			state = '0'
		});
		if(state === '0'){
			state = '1'
			msg.channel.send(`${msg.author.toString()}, Blabla`);
		}
		else{
			return
		}
	}
	if (msg.content.toLowerCase().includes('uwu')) {
		if (msg.content.toLowerCase().includes('fortnite')) return;
		if (msg.content.toLowerCase().includes('owo')) return;
		if (msg.content.toLowerCase().includes('gay')) return;
        function sleep (time) {
			return new Promise((resolve) => setTimeout(resolve, time));
		}
		sleep(3000).then(() => {
			state = '0'
		});
		if(state === '0'){
			state = '1'
			msg.channel.send(`${msg.author.toString()}, Blabla`);
		}
		else{
			return
		}
	}
	if (msg.content.toLowerCase().includes('gay')) {
		if (msg.content.toLowerCase().includes('fortnite')) return;
		if (msg.content.toLowerCase().includes('uwu')) return;
		if (msg.content.toLowerCase().includes('owo')) return;
        function sleep (time) {
			return new Promise((resolve) => setTimeout(resolve, time));
		}
		sleep(3000).then(() => {
			state = '0'
		});
		if(state === '0'){
			state = '1'
			msg.channel.send(`${msg.author.toString()}, Blabla`);
		}
		else{
			return
		}
	}

	if(msg.content === "-meme"){
		const randomPuppy = require('random-puppy');
		const snekfetch = require('snekfetch');
		let reddit = [
			"meme",
			"animemes",
			"MemesOfAnime",
			"animememes",
			"AnimeFunny",
			"dankmemes",
			"dankmeme",
			"wholesomememes",
			"MemeEconomy",
			"meirl",
			"me_irl",
			"2meirl4meirl"
		];
		let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];
		msg.channel.startTyping();
		randomPuppy(subreddit).then(url =>{
			snekfetch.get(url).then(async res =>{
				await msg.channel.sendMessage({
					files: [{
						attachment: res.body,
						name: 'meme.png'
					}]
				}).then(msg.channel.stopTyping());
			});
		});
	}
	if(msg.content === "-help"){
		const embed = new RichEmbed()
		.setTitle('Available Commands :')
		.addField('General commands', "'-help' : Shows you all available commands.\n'-kick' : Kicks a specific user from the server.\n'-ban' : Ban a specific user from the server.\n'-unban' : Unban a specific user from the server (Only with the discord ID).\n'-purge' : Pruge a specific amount of messages on the channel.\n'-announcement' : Make a public announcement to the server.")
		.addField('Entertainment commands', "'-meme' : Sends memes.\n'-OwO' : Makes any text in OwO.")
		.addField('Current normal prefix', "'-' : It's the current prefix.")
		.setColor(0x160033)
		msg.channel.sendEmbed(embed);
	}
	let args2 = msg.content.substring(testpre.length - 1).split(" ");
	switch(args2[0]){
		case '-OwO':
			if(!args2[1]) return msg.channel.sendMessage('OwO?');
			const owoMessage = args2.join(" ").slice(5);
			someString = owoMessage
			anotherString = someString.replace(/r/g, 'w');
			s1 = anotherString.replace(/R/g, 'W');
			s2 = s1.replace(/y/g, 'w');
			s3 = s2.replace(/Y/g, 'W');
			s4 = s3.replace(/l/g, 'w');
			s5 = s4.replace(/L/g, 'W');
			msg.channel.bulkDelete('1');
			msg.channel.sendMessage(s5);
		break;
	}
	let args = msg.content.substring(PREFIX.length - 1).split(" ");
	switch(args[0]){
		case '-purge':
			const command = args.join(" ");
			if(command.includes('-')) return;
			if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.sendMessage("You don't have the permission to purge messages!");
			if(!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.channel.sendMessage("I don't have the allowed permission to purge messages!");
			if(!args[1]) return msg.channel.sendMessage('Please specify a number of messages to be purged!');
			msg.channel.bulkDelete(args[1]);
		break;
		case '-announcement':
			if(!args[1]) return msg.channel.sendMessage('What are you trying to announce?')
			if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.sendMessage("You don't have the permission to make an announcement!");
			if(!msg.guild.me.hasPermission("ADMINISTRATOR")) return msg.channel.sendMessage("I don't have the allowed permission to make an announcement!");
			const aMessage = args.join(" ").slice(14);
			const achannel = bot.channels.find(channel => channel.id === "609122059083317269");
			const aAuthor = msg.author.username
			if(!achannel) return;
			msg.channel.bulkDelete(1);
			achannel.sendMessage('@everyone \n \n' + aMessage + '\n \n' + 'Announcement made by ' + aAuthor + '.')
		break;
		case '-kick':
			if(!args[1]) return msg.channel.sendMessage('Please specify a user!')
			const tuser = msg.mentions.users.first();
			const kreason = args.join(" ").slice(28);
			if(tuser){
				const member = msg.guild.member(tuser)
				if(member){
					if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to kick someone!");
					if(!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to kick someone!");
					if(!kreason){
						member.kick('You were kicked.');
						const kembed = new RichEmbed()
						.setTitle('User has been kicked!')
						.addField("User's name", tuser)
						.addField("User's ID", tuser.id)
						.addField("Reason", 'No reason specified.');
						msg.channel.sendEmbed(kembed);
					}
					else{
						member.kick(kreason);
						const kembed = new RichEmbed()
						.setTitle('User has been kicked!')
						.addField("User's name", tuser)
						.addField("User's ID", tuser.id)
						.addField("Reason", kreason);
						msg.channel.sendEmbed(kembed);
					}
				}
			}
		break;
		case '-ban':
			if(!args[1]) return msg.channel.sendMessage('Please specify a user!')
			const user = msg.mentions.users.first();
			const breason = args.join(" ").slice(27);
			if(user){
				const member = msg.guild.member(user)
				if(member){
					if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to ban someone!");
					if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to ban someone!");
					if(!breason){
						member.ban('You were banned.');
						const bembed = new RichEmbed()
						.setTitle('User has been banned!')
						.addField("User's name", user)
						.addField("User's ID", user.id)
						.addField("Reason", 'No reason specified.');
						msg.channel.sendEmbed(bembed);
					}
					else{
						member.ban(breason);
						const bembed = new RichEmbed()
						.setTitle('User has been banned!')
						.addField("User's name", user)
						.addField("User's ID", user.id)
						.addField("Reason", breason);
						msg.channel.sendEmbed(bembed);
					}
				}
			}
		break;
		case '-unban':
			if(!args[1]) return msg.channel.sendMessage('Please specify a user ID!')
			if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to unban someone!");
			if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to unban someone!");
			msg.guild.unban(args[1])
			const uembed = new RichEmbed()
			.setTitle('User has been unbanned!')
			msg.channel.sendEmbed(uembed);
		break;
	}
})

bot.login(process.env.BOT_TOKEN);
