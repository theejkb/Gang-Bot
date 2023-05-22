const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('gangwanted')
        .setDescription('Crée une partie de Gang Wanted.')
        .addIntegerOption((option) =>
        option.setName('nombre')
        .setDescription('Nombre de la partie')
        .setRequired(true)
),
    async execute(interaction) {
            if (!interaction.member.permissions.has('ADMINISTRATOR')) {
                return interaction.reply({
                  content: 'Vous n\'avez pas les permissions nécessaires pour exécuter cette commande.',
                  ephemeral: true,
                });
            }
        
            const number = interaction.options.getInteger('nombre');
            if (!Number.isInteger(number) || number < 1 || number > 10000) {
                return interaction.reply({
                    content: 'Veuillez fournir un nombre entier compris entre 1 et 10000.',
                    ephemeral: true,
                  });
            }

            interaction.member.guild.name = number;
            interaction.member.guild.icon = false;
        
            // Traiter la commande gangwanted
            // ...
            return interaction.reply(`Partie créée avec l'ID ${number}.`);
    }
};