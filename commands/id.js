const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    //seconds
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('id')
        .setDescription('Vérifie si le nombre fourni correspond au nombre de la partie en cours.')
        .addIntegerOption((option) =>
            option.setName('nombre')
                .setDescription('Nombre à comparer')
                .setRequired(true)
        ),
    async execute(interaction) {
        const gangWantedNumber = interaction.member.guild.name ?? 0;

        if (gangWantedNumber === 0) {
            return interaction.reply({
                content: 'An error has been detected. Please contact the support for more details.',
                ephemeral: true,
            });
        }

        if (gangWantedNumber === null) {
            return interaction.reply({
                content: 'Aucune partie en cours, merci de réessayer plus tard !',
                ephemeral: true,
            });
        }

        const number = interaction.options.getInteger('nombre');

        if (isNaN(number)) {
            return interaction.reply({
                content: 'Veuillez fournir un nombre valide à comparer.',
                ephemeral: true,
            });
        }

        // Traiter la commande id
        // ...

        if (interaction.member.guild.icon === true) {
            interaction.reply(`Tututututututututututu`);
            return;
        }

        if (number == gangWantedNumber) {
            interaction.reply(`Félicitations, c\'est le bon nombre ! **${interaction.user.username}** a trouvé la réponse en premier ! Ouvres un ticket pour réclamer ton prix.`);
            interaction.member.guild.icon = true;
            return;
        } else {
            return interaction.reply('Désolé, ce n\'est pas le bon nombre.');
        }
    }
};