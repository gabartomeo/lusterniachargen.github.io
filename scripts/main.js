
$(function() {

    // Populate using an object literal

    WTF.init({

         heading: [
             "The newest soul in the Basin of Life is a",
             "Look out for a new adventurer, a",
         ],
         response: [
             "Not interested? Try another.",
             "Doesn't interest you? Roll another one!",
             "Need another idea? Try again!"
         ],
         template: [
             "@adjective and @adjective @gender @race @serenwilde_class of the @serenwilde_guild. The only being they devote themselves to more than @serenwilde_spirit is @god. They are a self-identified @job with dreams of @aspiration.",
             "@adjective and @adjective @gender @race @celest_class of the @celest_guild. The only being they devote themselves to more than @celest_spirit is @god. They are a self-identified @job with dreams of @aspiration.",
             "@adjective and @adjective @gender @race @magnagora_class of the @magnagora_guild. The only being they devote themselves to more than @magnagora_spirit is @god. They are a self-identified @job with dreams of @aspiration.",
             "@adjective and @adjective @gender @race @glomdoring_class of the @glomdoring_guild. The only being they devote themselves to more than @glomdoring_spirit is @god. They are a self-identified @job with dreams of @aspiration.",
             "@adjective and @adjective @gender @race @hallifax_class of the @hallifax_guild. The only being they devote themselves to more than @hallifax_spirit is @god. They are a self-identified @job with dreams of @aspiration.",
             "@adjective and @adjective @gender @race @gaudiguch_class of the @gaudiguch_guild. The only being they devote themselves to more than @gaudiguch_spirit is @god. They are a self-identified @job with dreams of @aspiration."
         ],
         serenwilde_class: [
             "Moondancer",
             "Hartstone",
             "Serenguard",
             "Spiritsinger",
             "Shofangi"
         ],
         celest_class: [
             "Celestine",
             "Aquamancer",
             "Paladin",
             "Cantor",
             "Tahtetso"
         ],
         magnagora_class: [
             "Nihilist",
             "Geomancer",
             "Ur'Guard",
             "Cacophony",
             "Ninjakari"
         ],
         glomdoring_class: [
             "Shadowdancer",
             "Blacktalon",
             "Ebonguard",
             "Harbinger",
             "Nekotai"
         ],
         gaudiguch_class: [
             "Illuminati",
             "Pyromancer",
             "Templar",
             "Minstrel",
             "Nunchaku"
         ],
         hallifax_class: [
             "Aeromancer",
             "Sentinel",
             "Institute",
             "Symphonium",
             "Tessenchi"
         ],
         serenwilde_guild: [
             "Wodewoses",
             "Sowers of the Last Seed",
             "Listeners at the Veil"
         ],
         celest_guild: [
             "Archons of Dawning Hope",
             "Magisterium of the Holy Father",
             "Sanctifiers of Saint Loathys"
         ],
         magnagora_guild: [
             "Infernal Mandate",
             "Iniquitous Society",
             "Heralds of Dark Fates"
         ],
         glomdoring_guild: [
             "The Swarm",
             "Auguries of the Dark Heart",
             "The Thornwatch"
         ],
         gaudiguch_guild: [
             "Goon Squad",
             "The Revelry",
             "Seekers of Illumination"
         ],
         hallifax_guild: [
             "Adherents of Adom",
             "Grand Aerie for Harmonious Refinement",
             "Skylark Consortium for Collaborative Advancement"
         ],
         race: [
             "Aslaran",
             "Dracnari",
             "Dwarf",
             "Elfen",
             "Faeling",
             "Fink",
             "Furrikin",
             "Gnome",
             "Human",
             "Igasho",
             "Illithoid",
             "Kephera",
             "Krokani",
             "Loboshigaru",
             "Lucidian",
             "Merian",
             "Mugwump",
             "Nagasith",
             "Orclach",
             "Sileni",
             "Tae'dae",
             "Taurian",
             "Trill",
             "Viscanti"
         ],
         serenwilde_spirit: [
             "Mother Moon",
             "Brother Hart",
             "Luna, First of the Maidens",
             "Selene, First of the Mothers",
             "Albion, First of the Crones",
             "Old Man Bull"
         ],
         glomdoring_spirit: [
             "Mother Night",
             "Brother Crow",
             "Gwyllgi, the Dog of Darkness",
             "Glumki, King of the Redcaps",
             "Lhiannan, Queen of the Slaugh",
             "Grandmother Scorpion"
         ],
         celest_spirit: [
             "Elohora, Lady of the Eternal Light",
             "Japhiel, Illuminator of Merciful Justice",
             "Methrenton, Crusader of the Holy Flame",
             "Raziela, the Loving Radiance",
             "Shakiniel, Defender of Dawning Hope",
             "Kintyre, the Lady of the Rip Tide",
             "Loch, the Lord of the Low Tide",
             "Murlough, the Lord of the Red Tide",
             "Skerriagh, the Lord of the High Tide"
         ],
         magnagora_spirit: [
             "Ashtorath, the Duke of Inescapable Damnation",
             "Baalphegar, the Prince of the Dark Fates",
             "Gorgulu, the Devourer of Souls",
             "Luciphage, the Supreme Master of Nil",
             "Nifilhema, the Queen of Insufferable Cruelty",
             "Klaymech, Lord of the Soiled Earth",
             "Bhalegu, Lord of the Blasted Sand",
             "Brom, Lord of the Pocked Boulders",
             "Gravynia, Lady of the Cracked Stone"
         ],
         hallifax_spirit: [
             "Zeforos, Lord of the North Wind",
             "Pashi, Lady of the South Wind",
             "Vasha, Lady of the East Wind",
             "Haelor, Lord of the West Wind",
         ],
         gaudiguch_spirit: [
             "Agni, Lady of the Burning Embers",
             "Ignis, Lord of the Howling Fire",
             "Pyrphoros, Lord of the Ravenous Inferno",
             "Tejas, Lady of Blossoming Fires"
         ],
        gender: [
             "male",
             "female",
             "non-binary"
        ],
        god: [
             "Carakhan, Sculptor of Waves",
             "Drocilla, the Enchantress",
             "Ein, the Restless",
             "Lisaera, the Silver Goddess",
             "Malmydia, the Chiurgeon",
             "Maylea, Bloom of Serenity",
             "Nocht, the Silent",
             "Terentia, the Even Bladed",
             "Viravain, Lady of the Thorns",
             "Zvoltz, the Architect",
             "Auseklis, Old Man of the Woods",
             "Charune, the Horned One",
             "Crumkane, Lord of Epicurean Delights",
             "Czixi, the Welkin",
             "Darvellan, the Navigator",
             "Fain, of the Red Masque",
             "Hoaracle, the Oak Whacher",
             "Isune, the Aesthete",
             "Jadice, the Frost Queen",
             "Kalikai, the Crimson Eye",
             "Lantra, the Empyreal",
             "Manteekan, the Nightmare",
             "Morgfyre, the Legion",
             "Mysrai, the Thousandfold",
             "Raezon, the Forbidden",
             "Roark Libertas",
             "Shikari, the Predator",
             "Thax, the Machine",
             "Valtreth, Majesty of the Dawn",
             "Weiwae, the Golden Heart",
             "Yomoigu, the Pyresmith"
        ],
         job: [
             "author",
             "poet",
             "playwright",
             "stage director",
             "fighter",
             "politician",
             "artist",
             "scholar",
             "anthropologist",
             "biologist",
             "merchant",
             "theologian",
             "cook",
             "dancer",
             "linguist"
        ],
         adjective: [
             "lame",
             "energetic",
             "bumbling",
             "eccentric",
             "intelligent",
             "genius",
             "lazy",
             "honest",
             "brash",
             "domineering",
             "shy",
             "amusing",
             "intolerant",
             "patient",
             "determined",
             "zealous",
             "pessimistic",
             "greedy",
             "disloyal",
             "selfish",
             "persuasive",
             "charming",
             "suave",
             "unlucky",
             "resourceful",
             "charismatic",
             "traditional",
             "conservative",
             "free-spirited",
             "lovable",
             "wise",
             "naive",
             "innocent",
             "optimistic",
             "brooding",
             "contrarian",
             "relaxed"
         ],
        aspiration: [
             "becoming a famous author",
             "being the strongest in all of Lusternia",
             "having wealth beyond their wildest dreams",
             "learning the language of the Gods",
             "becoming an Avatar",
             "having their name spread far and wide",
             "seeing unity in the Basin",
             "seeing the downfall of a specific culture",
             "bringing forth a golden age for their culture",
             "their artwork being featured in every gallery the Basin has to offer"
        ],
     });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see 
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});
