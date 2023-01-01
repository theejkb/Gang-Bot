const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('revive')
		.setDescription('Revive someone')
		.addUserOption(option =>
			option.setName('target')
				.setDescription('The person to revive')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('reason')
				.setDescription('Why would you revive him?')),
	async execute(interaction) {
		const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ? 'because ' + interaction.options.getString('reason') : 'for no reason';
		await interaction.reply(`${interaction.user.username} just revived ${target} ${reason}`);
	},
};