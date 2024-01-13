const {SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("poll")
        .setDescription("Create a poll and then send it to a certain channel")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
                option.setName("description")
                .setDescription("Describe the poll")
                .setRequired(true)
            )
             .addChannelOption(option =>
                option.setName("channel")
                .setDescription("Where do you want to send the poll to?")
                .setRequired(true)
             ),
                async execute(interaction) {
                    const{options} = interaction;

                    const channel = options.getChannel("channel");
                    const description = options.getString("description");

                    const embed = new EmbedBuilder()
                        .setColor("Gold")
                        .setDescription(descriptionn)
                        .setTimestamp();

                    try{

                        const m = await channel.send({ embeds: [embed]});
                        await m.react("✅")
                        await m.react("❌")
                        await interaction.reply({ content: "Poll was succesfully sent to the channel.", ephermeral: true});
                }   catch ( err) {
                    console.log( err);
                }

            }
        }
