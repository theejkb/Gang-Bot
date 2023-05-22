// Fonction pour gérer les commandes
export function handleCommand(commandName, args, interaction) {
  const gangWantedNumber = null; // Nombre de la partie en cours

  if (commandName === 'gangwanted') {
    // Gérer la commande gangwanted
    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
        return interaction.reply({
          content: 'Vous n\'avez pas les permissions nécessaires pour exécuter cette commande.',
          ephemeral: true,
        });
    }

    const number = parseInt(args.nombre);
    if (!Number.isInteger(number) || number < 1 || number > 10000) {
        return interaction.reply({
            content: 'Veuillez fournir un nombre entier compris entre 1 et 10000.',
            ephemeral: true,
          });
    }

    console.log('interaction', interaction);

    // Traiter la commande gangwanted
    interaction.member.guild.name = number; // Stocker la valeur dans gangWantedNumber
    // ...
    return interaction.reply(`Partie créée avec le nombre ${number}.`);

  } else if (commandName === 'slowmode') {
    // Gérer la commande slowmode
    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      return interaction.reply({
        content: 'Vous n\'avez pas les permissions nécessaires pour exécuter cette commande.',
        ephemeral: true,
      });
    }

    const roleName = args[0];
    const time = parseInt(args[1]);

    if (!roleName || !time || isNaN(time)) {
        return interaction.reply({
            content: 'Veuillez fournir un rôle et une durée (en secondes) valides pour configurer le mode lent.',
            ephemeral: true,
          });
    }

    // Traiter la commande slowmode
    // ...

    interaction.channel.setRateLimitPerUser(time, `Mode lent configuré pour le rôle ${roleName} avec une durée de ${time} secondes.`);
    return interaction.reply('Mode lent configuré avec succès.');

  } else if (commandName === 'id') {
    // Gérer la commande id
    if (gangWantedNumber === null) {
    return interaction.reply({
        content: 'Aucune partie en cours, merci de réessayer plus tard !',
        ephemeral: true,
      });
    }

    const number = parseInt(args.nombre);

    if (isNaN(number)) {
      return interaction.reply({
        content: 'Veuillez fournir un nombre valide à comparer.',
        ephemeral: true,
      });
    }

    // Traiter la commande id
    // ...

    if (number === gangWantedNumber) {
        interaction.reply(`Félicitations, c\'est le bon nombre !**${interaction.user.username}** a trouvé la réponse en premier ! Ouvres un ticket pour réclamer ton prix.`);
        gangWantedNumber = null;
        return;
    } else {
      return interaction.reply('Désolé, ce n\'est pas le bon nombre.');
    }
  }
}
