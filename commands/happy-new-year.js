const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('happy-new-years')
        .setDescription('Wish you a happy new year!')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The person to wish a new year')
                .setRequired(true)),
    async execute(interaction) {
        const phrase = [
            "May this year be as cool as the last time we did the bank heist!",
            "May this year be as awesome as our plan to steal the local mobster's loot!",
            "May this year be as amazing as our escape from prison with the help of our gang!",
            "May this year be as crazy as our boat escape after the bank robbery!",
            "May this year be as crazy as our plan to steal the big mobster's treasure!",
            "May this year be as wonderful as our operation to steal the casino take!",
            "May this year be as happy as our mission to recover the loot from our last heist!",
            "May this year be as exciting as our plan to escape the authorities after the bank robbery!",
            "May this year be as fun as our road trip after the bank robbery!",
            "May this year be as amazing as our plan to steal the big mobster's loot!",
            "May this year be as insane as the Rank 1 of the OG Collection",
        ];
        const user = interaction.user.username;
        const target = interaction.options.getUser('target');
        let randomNumber = Math.floor(Math.random() * 10);

        await interaction.reply(`Happy new year ${target}! ${phrase[randomNumber]}`);
    },
};