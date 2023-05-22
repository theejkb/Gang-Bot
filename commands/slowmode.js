const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('slowmode')
    .setDescription('Configure le mode lent pour un rôle.')
    .addStringOption((option) =>
      option.setName('role')
        .setDescription('Rôle à configurer')
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option.setName('durée')
        .setDescription('Durée en secondes')
        .setRequired(true)
    ),
}