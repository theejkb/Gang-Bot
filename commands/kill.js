const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('Kill someone dirty!')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The person to kill')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('reason')
                .setDescription('Why would you kill him?')),
	async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') ?? 'No reason provided';
		await interaction.reply(`${interaction.user.username} just killed ${target} because ${reason} 🔪`);
	},
};