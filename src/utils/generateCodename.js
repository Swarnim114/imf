const { Gadget } = require('../models');

const adjectives = [
    "Red", "Silent", "Golden", "Dark", "Shadow", "Crimson", "Emerald", "Sapphire", "Mystic", "Hidden",
    "Frozen", "Blazing", "Iron", "Steel", "Obsidian", "Ancient", "Eternal", "Radiant", "Lunar", "Solar",
    "Phantom", "Ghostly", "Infernal", "Celestial", "Abyssal", "Fierce", "Mighty", "Swift", "Agile", "Nimble",
    "Brave", "Bold", "Valiant", "Noble", "Royal", "Majestic", "Divine", "Sacred", "Holy", "Wicked",
    "Sinister", "Vicious", "Ruthless", "Furious", "Wild", "Untamed", "Mysterious", "Enigmatic", "Arcane", "Ethereal"
  ];

  const nouns = [
    "Nightingale", "Phoenix", "Valkyrie", "Dragon", "Wolf", "Raven", "Falcon", "Eagle", "Hawk", "Panther",
    "Tiger", "Lion", "Bear", "Serpent", "Cobra", "Scorpion", "Spider", "Wasp", "Hornet", "Griffin",
    "Unicorn", "Pegasus", "Kraken", "Leviathan", "Hydra", "Basilisk", "Chimera", "Gorgon", "Minotaur", "Cyclops",
    "Titan", "Giant", "Dwarf", "Elf", "Orc", "Goblin", "Wraith", "Specter", "Revenant", "Banshee",
    "Sorcerer", "Wizard", "Warlock", "Witch", "Shaman", "Druid", "Paladin", "Knight", "Warrior", "Assassin"
  ];

  
async function generateCodename() {
  let codename, exists;
  do {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    codename = `The ${adj} ${noun}`;
    exists = await Gadget.findOne({ where: { codename } });
  } while (exists);

  return codename;
}

module.exports = generateCodename;
