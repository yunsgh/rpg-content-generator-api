// api/generate-quest.js

const QUEST_ELEMENTS = {
    targets: ["the ancient relic", "the kidnapped monarch", "the mythical beast", "a forgotten spellbook"],
    antagonists: ["a corrupted knight", "a jealous merchant", "a clan of goblins", "a rogue wizard"],
    locations: ["the Whispering Forest", "the Sunken City", "the Obsidian Tower", "the Crypt of Kings"],
    rewards: ["ancient gold", "a powerful enchantment", "the gratitude of the realm", "a hidden truth"],
};

module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
    
    // Combinaison des éléments narratifs
    const questTitle = `Retrieve ${randomItem(QUEST_ELEMENTS.targets)} from ${randomItem(QUEST_ELEMENTS.antagonists)} located in ${randomItem(QUEST_ELEMENTS.locations)}.`;
    
    res.status(200).json({
        success: true,
        quest_details: {
            title: questTitle,
            target: randomItem(QUEST_ELEMENTS.targets),
            antagonist: randomItem(QUEST_ELEMENTS.antagonists),
            location: randomItem(QUEST_ELEMENTS.locations),
            reward: randomItem(QUEST_ELEMENTS.rewards),
            difficulty: randomItem(["Easy", "Medium", "Hard"])
        }
    });
};
