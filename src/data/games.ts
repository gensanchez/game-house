// The Game House library — one line per game.
// To add a game: copy a line, change the values, and pick a shelf (category).
//   players:    [min, max]
//   time:       approximate minutes per game
//   difficulty: 1 = Easy, 2 = Medium, 3 = Hard
//   staffPick:  puts the game on the home page shelf
// Player counts, times and difficulty are approximate — adjust as needed.

export type Category =
  | "strategy"
  | "party"
  | "mystery"
  | "coop"
  | "cards"
  | "word"
  | "trivia"
  | "family"
  | "classics"
  | "puzzles"
  | "adult";

export interface Game {
  name: string;
  category: Category;
  players: [number, number];
  time: number;
  difficulty: 1 | 2 | 3;
  desc: string;
  staffPick?: boolean;
}

export const shelves: { key: Category; label: string; blurb: string }[] = [
  { key: "strategy", label: "Strategy", blurb: "Plan, build and outsmart your friends." },
  { key: "party", label: "Party & Social", blurb: "Loud, fast and great for big groups." },
  { key: "mystery", label: "Hidden Roles & Mystery", blurb: "Bluff, deduce and find the traitor." },
  { key: "coop", label: "Co-op & Adventure", blurb: "Work together — win or lose as a team." },
  { key: "cards", label: "Card & Dice Games", blurb: "Quick to learn, hard to put down." },
  { key: "word", label: "Word Games", blurb: "For the wordsmiths at the table." },
  { key: "trivia", label: "Trivia", blurb: "Prove you know more than everyone else." },
  { key: "family", label: "Family Favorites", blurb: "Easy fun for all ages." },
  { key: "classics", label: "Timeless Classics", blurb: "The games everyone grew up with." },
  { key: "puzzles", label: "Puzzles & Solo", blurb: "Slow down and piece it together." },
  { key: "adult", label: "After Dark (21+)", blurb: "Grown-ups only. You've been warned." },
];

export const games: Game[] = [
  // ── Strategy ────────────────────────────────────────────────
  { name: "7 Wonders", category: "strategy", players: [3, 7], time: 30, difficulty: 2, desc: "Draft cards and grow an ancient civilization across three ages." },
  { name: "Azul", category: "strategy", players: [2, 4], time: 40, difficulty: 1, staffPick: true, desc: "Draft colorful tiles to decorate the walls of a royal palace." },
  { name: "Carcassonne", category: "strategy", players: [2, 5], time: 40, difficulty: 1, desc: "Lay tiles to build a medieval landscape of cities, roads and fields." },
  { name: "Citadels", category: "strategy", players: [2, 8], time: 45, difficulty: 2, desc: "Pick secret roles each round and race to build the grandest city." },
  { name: "Dominion", category: "strategy", players: [2, 4], time: 30, difficulty: 2, desc: "The original deck-builder — grow your kingdom one card at a time." },
  { name: "El Grande", category: "strategy", players: [2, 5], time: 90, difficulty: 3, desc: "Area-control classic: battle for power over medieval Spain." },
  { name: "Everdell", category: "strategy", players: [1, 4], time: 80, difficulty: 2, staffPick: true, desc: "Build a charming city of woodland critters beneath the Ever Tree." },
  { name: "Power Grid", category: "strategy", players: [2, 6], time: 120, difficulty: 3, desc: "Buy power plants, connect cities and outbid rival energy companies." },
  { name: "Sagrada", category: "strategy", players: [1, 4], time: 40, difficulty: 2, desc: "Draft dice to craft a stained-glass window, one pane at a time." },
  { name: "Settlers of Catan", category: "strategy", players: [3, 4], time: 75, difficulty: 2, staffPick: true, desc: "Trade, build and settle the island of Catan. Wood for sheep, anyone?" },
  { name: "Settlers of Catan (Expansion)", category: "strategy", players: [3, 6], time: 90, difficulty: 2, desc: "An expansion for the base game — more of the Catan you already love." },
  { name: "Settlers of Catan: Seafarers", category: "strategy", players: [3, 4], time: 90, difficulty: 2, desc: "Set sail with ships and settle new islands across the sea." },
  { name: "Settlers of Catan: Explorers & Pirates", category: "strategy", players: [3, 4], time: 120, difficulty: 3, desc: "Explore uncharted waters, hunt pirates and complete missions." },
  { name: "Splendor", category: "strategy", players: [2, 4], time: 30, difficulty: 1, staffPick: true, desc: "Collect gems, buy mines and win the favor of nobles." },
  { name: "The Castles of Burgundy", category: "strategy", players: [2, 4], time: 90, difficulty: 3, staffPick: true, desc: "Build your estate in the Loire Valley — a dice-driven gem." },
  { name: "Ticket to Ride", category: "strategy", players: [2, 5], time: 60, difficulty: 1, staffPick: true, desc: "Collect train cards and claim railway routes across America." },
  { name: "Ticket to Ride: London", category: "strategy", players: [2, 4], time: 20, difficulty: 1, desc: "A quick Ticket to Ride with double-decker buses around London." },
  { name: "Wingspan", category: "strategy", players: [1, 5], time: 60, difficulty: 2, staffPick: true, desc: "Attract beautiful birds to your wildlife preserves." },
  { name: "Zenith", category: "strategy", players: [2, 4], time: 30, difficulty: 2, desc: "Tug-of-war for planets in a galaxy-spanning card battle." },
  { name: "All Creatures Big and Small", category: "strategy", players: [2, 2], time: 30, difficulty: 2, desc: "Two-player farming: build stables and raise animals." },
  { name: "Calico", category: "strategy", players: [1, 4], time: 45, difficulty: 2, desc: "Sew the coziest quilt and attract cats to it." },
  { name: "Clank! In! Space!", category: "strategy", players: [2, 4], time: 60, difficulty: 2, desc: "Deck-building heist aboard an evil emperor's spaceship." },
  { name: "Heart of Crown: Jubilee Edition", category: "strategy", players: [2, 4], time: 45, difficulty: 2, desc: "Deck-builder: back a princess and help her claim the throne." },
  { name: "Kingdomino", category: "strategy", players: [2, 4], time: 15, difficulty: 1, desc: "Domino-style tiles to build the best little kingdom." },
  { name: "Lanterns", category: "strategy", players: [2, 4], time: 30, difficulty: 1, desc: "Float lanterns on the lake to light up the harvest festival." },
  { name: "Little Town", category: "strategy", players: [2, 4], time: 45, difficulty: 2, desc: "Gather resources and build a thriving little town." },
  { name: "Océanos", category: "strategy", players: [2, 5], time: 30, difficulty: 1, desc: "Explore the ocean depths in your submarine." },
  { name: "Parfum", category: "strategy", players: [2, 4], time: 45, difficulty: 2, desc: "Distill scents and craft perfumes for picky customers." },
  { name: "Planted", category: "strategy", players: [2, 4], time: 30, difficulty: 1, desc: "Grow and care for a collection of house plants." },
  { name: "Plunder", category: "strategy", players: [2, 6], time: 60, difficulty: 2, desc: "A pirate's life: sail, trade and take over ships." },
  { name: "Race for the Galaxy", category: "strategy", players: [2, 4], time: 45, difficulty: 3, desc: "Build a galactic empire in this fast card-driven classic." },
  { name: "Rats of Water", category: "strategy", players: [1, 4], time: 60, difficulty: 2, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "River of Gold", category: "strategy", players: [2, 4], time: 45, difficulty: 2, desc: "Trade along a bustling river in Renaissance Italy." },
  { name: "Space Base", category: "strategy", players: [2, 5], time: 60, difficulty: 2, desc: "Roll dice to activate your fleet and grow your space base." },
  { name: "Splendor Duel", category: "strategy", players: [2, 2], time: 30, difficulty: 2, desc: "The two-player take on Splendor — tense and quick." },
  { name: "Terraforming Mars", category: "strategy", players: [1, 5], time: 120, difficulty: 3, desc: "Make Mars habitable, one card and one tile at a time." },
  { name: "Ticket to Ride: Europe", category: "strategy", players: [2, 5], time: 60, difficulty: 2, desc: "Ride the rails across Europe with tunnels and ferries." },
  { name: "Villainous", category: "strategy", players: [2, 6], time: 60, difficulty: 2, desc: "Play as a Disney villain and complete your evil plan." },
  { name: "Wyrmspan", category: "strategy", players: [1, 5], time: 90, difficulty: 2, desc: "The Wingspan sequel — attract dragons to your cave." },

  // ── Party & Social ──────────────────────────────────────────
  { name: "Codenames", category: "party", players: [2, 8], time: 15, difficulty: 1, staffPick: true, desc: "Give one-word clues so your team finds its secret agents." },
  { name: "Cranium", category: "party", players: [4, 16], time: 60, difficulty: 1, desc: "Draw, hum, act and quiz your way around the board." },
  { name: "Dixit", category: "party", players: [3, 6], time: 30, difficulty: 1, staffPick: true, desc: "Dreamlike art cards and clever clues — guess the storyteller's card." },
  { name: "Do You Know Me?", category: "party", players: [2, 8], time: 30, difficulty: 1, desc: "Find out how well your friends really know each other." },
  { name: "Hues and Cues", category: "party", players: [3, 10], time: 30, difficulty: 1, staffPick: true, desc: "Give clues to help everyone land on one exact shade of color." },
  { name: "Just One", category: "party", players: [3, 7], time: 20, difficulty: 1, staffPick: true, desc: "Co-op word guessing — but duplicate clues get erased!" },
  { name: "Knope for President", category: "party", players: [2, 6], time: 30, difficulty: 1, desc: "A Parks and Rec party game for every Pawnee fan." },
  { name: "Loaded Questions", category: "party", players: [3, 6], time: 30, difficulty: 1, desc: "Guess who gave which answer to some very loaded questions." },
  { name: "Poetry for Neanderthals", category: "party", players: [2, 12], time: 20, difficulty: 1, desc: "Describe words using only one-syllable words — or get bonked." },
  { name: "Taboo", category: "party", players: [4, 10], time: 30, difficulty: 1, desc: "Get your team to guess the word — without saying the forbidden ones." },
  { name: "Taste Test", category: "party", players: [2, 8], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm details with client
  { name: "The And", category: "party", players: [2, 6], time: 30, difficulty: 1, desc: "Conversation cards that spark real, honest talks." },
  { name: "Who's Most Likely", category: "party", players: [3, 10], time: 20, difficulty: 1, desc: "Vote on who in the group is most likely to… you'll see." },
  { name: "You're Getting Old", category: "party", players: [3, 8], time: 30, difficulty: 1, desc: "A hilarious party game about the joys of getting older." },
  { name: "Draw Your Own Conclusions", category: "party", players: [3, 8], time: 30, difficulty: 1, desc: "Doodle, guess and laugh at everyone's drawings." },
  { name: "Fog of Love", category: "party", players: [2, 2], time: 60, difficulty: 2, desc: "A romantic comedy board game for two." },
  { name: "Is She Blonde?", category: "party", players: [2, 8], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Joke's on Who?", category: "party", players: [2, 8], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Like I Like My", category: "party", players: [3, 8], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Moose Water", category: "party", players: [2, 8], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Priorities", category: "party", players: [2, 6], time: 30, difficulty: 1, desc: "Guess how your friends rank life's little priorities." },
  { name: "Russian Roulette", category: "party", players: [2, 8], time: 15, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Skull", category: "party", players: [3, 6], time: 30, difficulty: 1, desc: "Pure bluffing — flowers or a skull?" },
  { name: "Trash Talk", category: "party", players: [2, 8], time: 30, difficulty: 1, desc: "The party game built on friendly trash talk." },
  { name: "Trouble with the In-Laws", category: "party", players: [3, 8], time: 30, difficulty: 1, desc: "A party game about the joys of family." },

  // ── Hidden Roles & Mystery ──────────────────────────────────
  { name: "Avalon", category: "mystery", players: [5, 10], time: 30, difficulty: 1, staffPick: true, desc: "Loyal knights vs. hidden minions of Mordred — trust no one." },
  { name: "Bang!", category: "mystery", players: [4, 7], time: 40, difficulty: 2, desc: "Wild West shootout where the Sheriff doesn't know who the outlaws are." },
  { name: "Betrayal at the House on the Hill", category: "mystery", players: [3, 6], time: 60, difficulty: 2, desc: "Explore a haunted house — until one of you turns traitor." },
  { name: "Clue", category: "mystery", players: [3, 6], time: 45, difficulty: 1, desc: "Who did it, where, and with what? The classic whodunit." },
  { name: "Cluedo Escape", category: "mystery", players: [1, 6], time: 60, difficulty: 2, desc: "Escape-room style puzzles with a Cluedo twist." },
  { name: "Deception: Murder in Hong Kong", category: "mystery", players: [4, 12], time: 20, difficulty: 2, desc: "Investigators hunt a murderer hiding in plain sight." },
  { name: "Feed the Kraken", category: "mystery", players: [5, 11], time: 75, difficulty: 2, desc: "Sailors, pirates and cultists fight over where the ship is heading." },
  { name: "Murder Mystery: Dinner Party", category: "mystery", players: [4, 8], time: 120, difficulty: 1, desc: "Host a murder mystery night — everyone's a suspect." },
  { name: "Murder Mystery: Mansion", category: "mystery", players: [4, 8], time: 120, difficulty: 1, desc: "A crime at the mansion. Play your character and find the killer." },
  { name: "Mutiny", category: "mystery", players: [3, 8], time: 45, difficulty: 2, desc: "Plotting, betrayal and treachery on the high seas." },
  { name: "The Resistance", category: "mystery", players: [5, 10], time: 30, difficulty: 1, desc: "Rebels vs. spies — complete missions without getting sabotaged." },
  { name: "Cluedo: Midnight Hotel", category: "mystery", players: [2, 6], time: 45, difficulty: 1, desc: "Classic Cluedo deduction set in a mysterious hotel." },
  { name: "MicroMacro: Crime City", category: "mystery", players: [1, 4], time: 30, difficulty: 1, desc: "Hunt for clues on a giant city map with a magnifying glass." },
  { name: "The Ministry of Lost Things: Case One — Lint Condition", category: "mystery", players: [1, 4], time: 60, difficulty: 2, desc: "Solve a quirky case for the Ministry of Lost Things." },
  { name: "One Night Revolution", category: "mystery", players: [3, 10], time: 10, difficulty: 1, desc: "One-round hidden roles: rebels vs. government informants." },
  { name: "Secret Hitler", category: "mystery", players: [5, 10], time: 45, difficulty: 1, desc: "Liberals vs. fascists — find and stop the secret leader." },

  // ── Co-op & Adventure ───────────────────────────────────────
  { name: "Dungeons & Dragons Starter Set", category: "coop", players: [2, 6], time: 180, difficulty: 3, desc: "Your first D&D adventure — one storyteller, endless possibilities." },
  { name: "Forbidden Desert", category: "coop", players: [2, 5], time: 45, difficulty: 2, desc: "Dig out a legendary flying machine before the sandstorm wins." },
  { name: "Hanabi", category: "coop", players: [2, 5], time: 25, difficulty: 2, desc: "Build a fireworks show — while holding your cards backwards." },
  { name: "Pandemic", category: "coop", players: [2, 4], time: 45, difficulty: 2, staffPick: true, desc: "Team up to stop four diseases from spreading across the globe." },
  { name: "Talisman", category: "coop", players: [2, 6], time: 120, difficulty: 2, desc: "Fantasy quest to reach the Crown of Command." },
  { name: "The Crew", category: "coop", players: [2, 5], time: 20, difficulty: 2, desc: "Cooperative trick-taking missions through space." },
  { name: "The Game", category: "coop", players: [1, 5], time: 20, difficulty: 1, desc: "Play all 98 cards together — can the team beat The Game?" },
  { name: "Escape: The Curse of the Temple", category: "coop", players: [1, 5], time: 10, difficulty: 1, desc: "Real-time dice frenzy — escape before the temple collapses." },
  { name: "Five Minute Dungeon", category: "coop", players: [2, 5], time: 5, difficulty: 1, desc: "Race through a dungeon together in just five minutes." },
  { name: "Sky Team", category: "coop", players: [2, 2], time: 20, difficulty: 2, desc: "Two pilots, no talking — land the plane together." },
  { name: "The Oregon Trail", category: "coop", players: [2, 6], time: 30, difficulty: 1, desc: "Make it to Oregon alive. Watch out for dysentery." },
  { name: "The Yawning Portal", category: "coop", players: [2, 4], time: 45, difficulty: 2, desc: "Run the famous D&D tavern and serve adventurers." },

  // ── Card & Dice Games ───────────────────────────────────────
  { name: "Barking Kittens", category: "cards", players: [2, 5], time: 15, difficulty: 1, desc: "The Exploding Kittens expansion — now with more dogs." },
  { name: "Diamonds", category: "cards", players: [2, 6], time: 30, difficulty: 2, desc: "Trick-taking card game where you collect sparkling diamonds." },
  { name: "Dutch Blitz", category: "cards", players: [2, 4], time: 15, difficulty: 1, desc: "Lightning-fast card game — everybody plays at the same time." },
  { name: "Exploding Kittens", category: "cards", players: [2, 5], time: 15, difficulty: 1, desc: "Russian roulette, but with cats. Don't draw the bomb." },
  { name: "Lost Cities", category: "cards", players: [2, 2], time: 30, difficulty: 1, desc: "A tense two-player expedition card game." },
  { name: "Munchkin Deluxe", category: "cards", players: [3, 6], time: 90, difficulty: 2, desc: "Kill monsters, grab treasure, stab your buddy." },
  { name: "Phase 10", category: "cards", players: [2, 6], time: 45, difficulty: 1, desc: "Rummy-style race through ten phases." },
  { name: "Rack-O", category: "cards", players: [2, 4], time: 20, difficulty: 1, desc: "Get your cards in order before anyone else." },
  { name: "Skip-Bo", category: "cards", players: [2, 6], time: 30, difficulty: 1, desc: "Be the first to empty your stockpile." },
  { name: "The Walking Dead Dice Game", category: "cards", players: [2, 6], time: 20, difficulty: 1, desc: "Roll for survival — and avoid the walkers." },
  { name: "Uno", category: "cards", players: [2, 10], time: 20, difficulty: 1, desc: "Match colors, play Draw Fours and don't forget to yell UNO!" },
  { name: "Blue Cocker", category: "cards", players: [2, 6], time: 20, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Clash", category: "cards", players: [2, 4], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Cosmo Lancer", category: "cards", players: [2, 4], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Dice Throne", category: "cards", players: [2, 6], time: 45, difficulty: 2, desc: "Pick a hero and roll for epic dice battles." },
  { name: "Eternal: Chronicles of the Throne", category: "cards", players: [2, 4], time: 30, difficulty: 2, desc: "Strategic card battles for the throne." },
  { name: "Goat Lords", category: "cards", players: [2, 6], time: 20, difficulty: 1, desc: "Build a herd of goats — and sabotage everyone else's." },
  { name: "Guardians' Call", category: "cards", players: [2, 2], time: 30, difficulty: 2, desc: "Two-player card battle between rival guardians." },
  { name: "Karvi", category: "cards", players: [2, 6], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Keep Link", category: "cards", players: [2, 6], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "King of Tokyo", category: "cards", players: [2, 6], time: 30, difficulty: 1, desc: "Giant monsters roll dice to smash Tokyo." },
  { name: "Llama", category: "cards", players: [2, 6], time: 20, difficulty: 1, desc: "Quick card game: get rid of your cards or drop out wisely." },
  { name: "Monopoly Deal", category: "cards", players: [2, 5], time: 15, difficulty: 1, desc: "The fast card-game version of Monopoly." },
  { name: "Monopoly Deal: No Mercy", category: "cards", players: [2, 5], time: 15, difficulty: 1, desc: "Monopoly Deal with even more ruthless cards." }, // TODO: confirm name/details with client
  { name: "Morels", category: "cards", players: [2, 2], time: 30, difficulty: 2, desc: "Forage mushrooms in the forest and cook them up." },
  { name: "No Thanks!", category: "cards", players: [3, 7], time: 20, difficulty: 1, desc: "Take the card or pay a chip — simple and sneaky." },
  { name: "Oh My Goods!", category: "cards", players: [2, 4], time: 30, difficulty: 2, desc: "Run medieval workshops and produce goods." },
  { name: "One Piece", category: "cards", players: [2, 2], time: 30, difficulty: 2, desc: "The One Piece card game — set sail with the Straw Hats." }, // TODO: confirm name/details with client
  { name: "Port Royal", category: "cards", players: [2, 5], time: 30, difficulty: 1, desc: "Push your luck at the harbor and hire a crew." },
  { name: "Quarmagedon", category: "cards", players: [2, 6], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Radlands", category: "cards", players: [2, 2], time: 30, difficulty: 2, desc: "Defend your camps in a post-apocalyptic duel." },
  { name: "Selfish", category: "cards", players: [2, 6], time: 30, difficulty: 1, desc: "Survive in space — at your crewmates' expense." },
  { name: "Servd", category: "cards", players: [2, 6], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Servd: Summer Daze", category: "cards", players: [2, 6], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Sushi Go!", category: "cards", players: [2, 5], time: 15, difficulty: 1, desc: "Pass the sushi and grab the best combos." },
  { name: "Sushi Roll", category: "cards", players: [2, 5], time: 20, difficulty: 1, desc: "Sushi Go! with dice on a conveyor belt." },
  { name: "Uno Dice", category: "cards", players: [2, 10], time: 20, difficulty: 1, desc: "Uno, but with dice." },

  // ── Word Games ──────────────────────────────────────────────
  { name: "Bananagrams", category: "word", players: [1, 8], time: 15, difficulty: 1, desc: "Speed crossword race — no board needed." },
  { name: "Hot Words", category: "word", players: [2, 8], time: 20, difficulty: 1, desc: "Quick-thinking word game where the clock is always ticking." },
  { name: "Scattergories", category: "word", players: [2, 6], time: 30, difficulty: 1, desc: "Name things in categories that start with the same letter." },
  { name: "Scrabble", category: "word", players: [2, 4], time: 60, difficulty: 2, desc: "The classic crossword game. Triple word score!" },
  { name: "Upwords", category: "word", players: [2, 4], time: 45, difficulty: 1, desc: "Stack letters on top of words to make new ones." },
  { name: "Boggle", category: "word", players: [1, 8], time: 10, difficulty: 1, desc: "Shake the letters and find as many words as you can." },
  { name: "Wheel of Fortune", category: "word", players: [2, 6], time: 30, difficulty: 1, desc: "Spin the wheel and solve the puzzle." },

  // ── Trivia ──────────────────────────────────────────────────
  { name: "Big Bang Theory Trivia", category: "trivia", players: [2, 8], time: 30, difficulty: 1, desc: "Bazinga! Test your knowledge of the show." },
  { name: "I Should Have Known That", category: "trivia", players: [2, 8], time: 30, difficulty: 1, desc: "Trivia full of facts you really should know." },
  { name: "SNL: The Game", category: "trivia", players: [2, 8], time: 30, difficulty: 1, desc: "Live from New York — sketches, hosts and iconic moments." },
  { name: "The Office Trivia", category: "trivia", players: [2, 8], time: 30, difficulty: 1, desc: "That's what she said. Dunder Mifflin trivia." },
  { name: "Tiebreaker", category: "trivia", players: [2, 8], time: 30, difficulty: 1, desc: "Trivia where getting the closest answer wins." },
  { name: "Trivial Pursuit", category: "trivia", players: [2, 6], time: 60, difficulty: 1, desc: "The classic trivia game — collect every wedge." },
  { name: "Wits & Wagers", category: "trivia", players: [3, 7], time: 25, difficulty: 1, desc: "Bet on the answer — you don't need to know it to win." },

  // ── Family Favorites ────────────────────────────────────────
  { name: "Battleship", category: "family", players: [2, 2], time: 30, difficulty: 1, desc: "You sank my battleship!" },
  { name: "Blokus", category: "family", players: [2, 4], time: 20, difficulty: 1, desc: "Fit your colorful pieces on the board and block everyone else." },
  { name: "Connect 4", category: "family", players: [2, 2], time: 10, difficulty: 1, desc: "Drop discs and get four in a row." },
  { name: "Hook & Ring", category: "family", players: [1, 8], time: 10, difficulty: 1, desc: "Swing the ring onto the hook — harder than it looks." },
  { name: "Jenga", category: "family", players: [1, 8], time: 15, difficulty: 1, staffPick: true, desc: "Pull a block, stack it on top. Don't topple the tower." },
  { name: "Masterpiece", category: "family", players: [2, 6], time: 60, difficulty: 1, desc: "Buy and sell famous paintings at auction — real or fake?" },
  { name: "Mouse Trap", category: "family", players: [2, 4], time: 30, difficulty: 1, desc: "Build the contraption and catch the mice." },
  { name: "Operation", category: "family", players: [1, 6], time: 15, difficulty: 1, desc: "Steady hands only. Bzzzt!" },
  { name: "Rummikub", category: "family", players: [2, 4], time: 45, difficulty: 1, desc: "Make runs and sets with numbered tiles." },
  { name: "Sequence", category: "family", players: [2, 12], time: 30, difficulty: 1, desc: "Play cards and claim spaces to make five in a row." },
  { name: "Sorry!", category: "family", players: [2, 4], time: 30, difficulty: 1, desc: "Race your pawns home — and bump others back to start. Sorry!" },
  { name: "The Game of Life", category: "family", players: [2, 4], time: 60, difficulty: 1, desc: "Spin the wheel through college, career, family and retirement." },
  { name: "Trekking the National Parks", category: "family", players: [2, 5], time: 60, difficulty: 1, desc: "Travel across America collecting national park cards." },
  { name: "Who Is It?", category: "family", players: [2, 2], time: 20, difficulty: 1, desc: "Ask yes-or-no questions to guess the mystery person." }, // TODO: confirm with client (Guess Who?)
  { name: "Advance to Boardwalk", category: "family", players: [2, 4], time: 45, difficulty: 1, desc: "Build hotels on the Atlantic City boardwalk." },
  { name: "Around Our Town: Greater Providence", category: "family", players: [2, 6], time: 60, difficulty: 1, desc: "A tour of greater Providence's local spots." }, // TODO: confirm name/details with client
  { name: "Best Treehouse Ever", category: "family", players: [2, 4], time: 20, difficulty: 1, desc: "Draft rooms and build the best treehouse ever." },
  { name: "Camel Up", category: "family", players: [3, 8], time: 30, difficulty: 1, desc: "Bet on a wild, stacking camel race." },
  { name: "Dude Perfect", category: "family", players: [2, 6], time: 30, difficulty: 1, desc: "Trick-shot challenges inspired by Dude Perfect." },
  { name: "Icaion", category: "family", players: [2, 6], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Kabuto Sumo", category: "family", players: [2, 5], time: 30, difficulty: 1, desc: "Push your beetles to sumo-wrestle others off the ring." },
  { name: "Ogre Objective 218", category: "family", players: [2, 6], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "Pokémon: Labyrinth", category: "family", players: [2, 4], time: 20, difficulty: 1, desc: "Shift the maze and catch Pokémon." },
  { name: "Qwirkle", category: "family", players: [2, 4], time: 45, difficulty: 1, desc: "Match colors and shapes to score big." },
  { name: "Sequence Dice", category: "family", players: [2, 4], time: 20, difficulty: 1, desc: "Sequence with dice — roll and get five in a row." },
  { name: "The Great Escape", category: "family", players: [2, 6], time: 30, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm name/details with client
  { name: "The Princess Bride", category: "family", players: [2, 6], time: 30, difficulty: 1, desc: "Inconceivable! A game based on the classic film." },
  { name: "Tsuro", category: "family", players: [2, 8], time: 15, difficulty: 1, desc: "Lay paths and keep your dragon on the board." },
  { name: "Twister", category: "family", players: [2, 4], time: 15, difficulty: 1, desc: "Left foot red. Good luck." },

  // ── Timeless Classics ───────────────────────────────────────
  { name: "Backgammon", category: "classics", players: [2, 2], time: 30, difficulty: 2, desc: "One of the oldest games in the world — race your checkers home." },
  { name: "Checkers", category: "classics", players: [2, 2], time: 20, difficulty: 1, desc: "Jump, capture and king your pieces." },
  { name: "Chess", category: "classics", players: [2, 2], time: 30, difficulty: 3, desc: "The ultimate game of strategy. Checkmate." },
  { name: "Cups of Dice", category: "classics", players: [2, 6], time: 20, difficulty: 1, desc: "Six cups of dice — perfect for Liar's Dice, Farkle and more." },
  { name: "Deck of Cards", category: "classics", players: [1, 8], time: 30, difficulty: 1, desc: "Rummy, Spades, Hearts… ask staff for their favorite house games." },
  { name: "Dice Games", category: "classics", players: [2, 8], time: 20, difficulty: 1, desc: "A collection of quick dice games for any group." },
  { name: "Mahjong", category: "classics", players: [2, 4], time: 90, difficulty: 3, desc: "The beautiful tile-matching game of skill and strategy." },
  { name: "Mancala", category: "classics", players: [2, 2], time: 15, difficulty: 1, desc: "Sow and capture stones in this ancient counting game." },
  { name: "Monopoly", category: "classics", players: [2, 6], time: 120, difficulty: 1, desc: "Buy, trade and bankrupt your friends. The original." },
  { name: "Monopoly Ultimate", category: "classics", players: [2, 4], time: 60, difficulty: 1, desc: "Monopoly with modern banking — no more paper money." },
  { name: "Monopoly: Lord of the Rings", category: "classics", players: [2, 6], time: 90, difficulty: 1, desc: "Monopoly through Middle-earth. One ring to buy them all." },
  { name: "Othello", category: "classics", players: [2, 2], time: 20, difficulty: 2, desc: "A minute to learn, a lifetime to master." },
  { name: "Parcheesi", category: "classics", players: [2, 4], time: 45, difficulty: 1, desc: "The classic race-around-the-board game." },
  { name: "Poker", category: "classics", players: [2, 8], time: 60, difficulty: 2, desc: "Chips and cards for your own poker night." },
  { name: "Risk", category: "classics", players: [2, 6], time: 120, difficulty: 2, desc: "Conquer the world, one territory at a time." },
  { name: "Stratego: Assassin's Creed", category: "classics", players: [2, 2], time: 45, difficulty: 2, desc: "Classic Stratego with an Assassin's Creed twist." },
  { name: "Yahtzee", category: "classics", players: [1, 10], time: 30, difficulty: 1, desc: "Roll five dice and chase the big one. YAHTZEE!" },
  { name: "Lotería", category: "classics", players: [2, 10], time: 20, difficulty: 1, desc: "Mexico's beloved bingo-style game. ¡Lotería!" },
  { name: "Monopoly: Big Deal", category: "classics", players: [2, 4], time: 30, difficulty: 1, desc: "A faster card-and-dice take on Monopoly." },
  { name: "Monopoly: Fourth Wing", category: "classics", players: [2, 6], time: 90, difficulty: 1, desc: "Monopoly set in the world of Fourth Wing." },
  { name: "Monopoly: Gamer Edition", category: "classics", players: [2, 4], time: 60, difficulty: 1, desc: "Monopoly with Nintendo characters and power-ups." },
  { name: "Monopoly: Worcester Edition", category: "classics", players: [2, 6], time: 90, difficulty: 1, desc: "Buy up Worcester, Massachusetts." },
  { name: "Score Four", category: "classics", players: [2, 2], time: 15, difficulty: 1, desc: "3D four-in-a-row on a grid of pegs." },
  { name: "Shut the Box", category: "classics", players: [1, 4], time: 10, difficulty: 1, desc: "Roll dice and flip down the numbers." },
  { name: "Shut the Box (4 Players)", category: "classics", players: [2, 4], time: 15, difficulty: 1, desc: "Four-player Shut the Box — everyone rolls at once." },
  { name: "Shut the Box: Dice", category: "classics", players: [1, 4], time: 10, difficulty: 1, desc: "The dice version of the classic pub game." },

  // ── Puzzles & Solo ──────────────────────────────────────────
  { name: "Old Bookstore Puzzle", category: "puzzles", players: [1, 4], time: 120, difficulty: 1, desc: "A cozy jigsaw puzzle — perfect with a coffee." },
  { name: "Sudoku", category: "puzzles", players: [1, 1], time: 20, difficulty: 2, desc: "The number-placement brain teaser." },
  { name: "Villainous Puzzle", category: "puzzles", players: [1, 4], time: 120, difficulty: 1, desc: "A jigsaw puzzle featuring Disney's greatest villains." },
  { name: "Wonder Woman", category: "puzzles", players: [1, 4], time: 60, difficulty: 1, desc: "Ask our staff about this one!" }, // TODO: confirm with client what this game is

  // ── After Dark (21+) ────────────────────────────────────────
  { name: "Buzzed", category: "adult", players: [4, 20], time: 30, difficulty: 1, desc: "The party game that gets everyone talking (and sipping)." },
  { name: "Cards Against Humanity", category: "adult", players: [4, 20], time: 30, difficulty: 1, desc: "A party game for horrible people." },
  { name: "Do or Drink", category: "adult", players: [2, 20], time: 30, difficulty: 1, desc: "Complete the dare — or take a drink." },
  { name: "Talk, Flirt, Dare", category: "adult", players: [3, 10], time: 30, difficulty: 1, desc: "Questions and dares to turn up the heat." },
  { name: "What Do You Meme?", category: "adult", players: [3, 20], time: 30, difficulty: 1, desc: "Match caption cards to photos for the funniest meme." },
];

export const slugify = (name: string) =>
  name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const formatPlayers = ([min, max]: [number, number]) =>
  min === max ? `${min}` : `${min}–${max}`;

export const formatTime = (minutes: number) =>
  minutes >= 120 ? `${Math.round(minutes / 60)}+ hrs` : `~${minutes} min`;

export const difficultyLabel = { 1: "Easy", 2: "Medium", 3: "Hard" } as const;

// Box spine colors — muted tones that sit well on the dark site.
const spineColors = [
  { bg: "#7a2e2a", fg: "#f5efe0" },
  { bg: "#2f4a3a", fg: "#f5efe0" },
  { bg: "#23344f", fg: "#f5efe0" },
  { bg: "#c9a84c", fg: "#1a1408" },
  { bg: "#4f2f48", fg: "#f5efe0" },
  { bg: "#1f4d4f", fg: "#f5efe0" },
  { bg: "#8a4b2a", fg: "#f5efe0" },
  { bg: "#e6dcc3", fg: "#2a2015" },
  { bg: "#2b2b2b", fg: "#e2c07a" },
  { bg: "#5a5a2e", fg: "#f5efe0" },
  { bg: "#a33b2e", fg: "#f5efe0" },
  { bg: "#3c5a7a", fg: "#f5efe0" },
];

const hash = (s: string) => {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
};

// Gives each game a stable color and box height, never repeating a color next to its neighbor.
export function spineStyles(list: Game[]) {
  let prev = -1;
  return list.map((game) => {
    const h = hash(game.name);
    let color = h % spineColors.length;
    if (color === prev) color = (color + 1) % spineColors.length;
    prev = color;
    return {
      ...spineColors[color],
      height: 160 + (h % 5) * 10,
      pad: game.difficulty === 3 ? 14 : 8 + (h % 3) * 2,
    };
  });
}
