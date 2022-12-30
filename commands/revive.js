const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('revive')
        .setDescription('Revive someone.')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The person to revive.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Why would you revive him?')),
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        console.log(target);
        console.log('NaaQ');
        const reasonValue = interaction.options.getString('reason');
        const reason = reasonValue? 'because ' + reasonValue :'';
        await interaction.reply(`${interaction.user.username} just revive ${target} ${reason}`);
    },
};