const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('Kill someone.')
		.addUserOption(option =>
			option.setName('target')
				.setDescription('The person to kill')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('reason')
				.setDescription('Why would you kill him?')),
	async execute(interaction) {
		const target = interaction.options.getUser('target');
		const reasonValue = interaction.options.getString('reason');

		if (target.username === 'NaaQ'){
			await interaction.reply(`Mhhh... Sorry but ${target} can't be killed.`);
		} else {
			const reason = reasonValue? 'because ' + reasonValue :'for no reason.';
			await interaction.reply(`${interaction.user.username} just revive ${target} ${reason}`);
		}
	},
};