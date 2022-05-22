import { Command } from "../../structures/Command";

export default new Command({
    name: "ping",
    description: "Exemple",
    run: async ({ interaction }) => {
        interaction.followUp("Pong");
    }
});
