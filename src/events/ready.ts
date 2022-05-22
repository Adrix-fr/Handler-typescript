import { Event } from "../structures/Event";

export default new Event("ready", () => {
    console.log("Le bot est maitenant en ligne ✅");
});
