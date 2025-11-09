// api/generate-name.js

const NAMES_DB = {
    elf_prefixes: ["Elen", "Fael", "Silv", "Aeth", "Lyra"],
    elf_suffixes: ["wyn", "dar", "las", "riel", "lorin"],
    dwarf_prefixes: ["Bor", "Grum", "Dur", "Thorn", "Kael"],
    dwarf_suffixes: ["gar", "stone", "grim", "beard", "hammer"],
};

module.exports = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { type } = req.query; 
    const key = (type || 'elf').toLowerCase();

    // Sélectionne les listes basées sur le type (ex: 'elf')
    const prefixes = NAMES_DB[`${key}_prefixes`];
    const suffixes = NAMES_DB[`${key}_suffixes`];
    
    if (!prefixes || !suffixes) {
         return res.status(400).json({ success: false, error: "Type de nom non supporté. Essayez 'elf' ou 'dwarf'." });
    }

    // Fonction de sélection aléatoire
    const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // Construction du nom
    const newName = randomItem(prefixes) + randomItem(suffixes);
    
    res.status(200).json({
        success: true,
        type: key,
        name: newName,
        pronunciation_guide: "The name is phonetically generated for fantasy genre."
    });
};
