
$(function() {

    // Populate using an object literal

    WTF.init({

         heading: [
             "The newest soul in Sapience is a",
             "Look out for a new adventurer, a",
         ],
         response: [
             "Not interested? Try another.",
             "Doesn't interest you? Roll another one!",
             "Need another idea? Try again!"
         ],
         template: [
             "@adjective and @adjective @gender @race @class_spirit from @faction_spirit, with a talent for @talent and aspirations to @aspiration when they grow up.",
             "@adjective and @adjective @gender @race @class_shadow from @faction_shadow, with a talent for @talent and aspirations to @aspiration when they grow up.",
             "@gender @race @class_spirit in @faction_spirit. They are @adjective and @adjective, with a penchant for @talent and the desire to @aspiration someday.",
             "@gender @race @class_shadow in @faction_shadow. They are @adjective and @adjective, with a penchant for @talent and the desire to @aspiration someday.",
             "@class_spirit from @faction_spirit. They're a @adjective @gender @race, real @adjective, and they want to @aspiration in the future. They're good at @talent, too.",
             "@class_shadow from @faction_shadow. They're a @adjective @gender @race, real @adjective, and they want to @aspiration in the future. They're good at @talent, too.",
             "Rogue @class_spirit, a @gender @race, known for being @adjective and @adjective. They aspire to @aspiration someday, and are talented in @talent.",
             "Rogue @class_shadow, a @gender @race, known for being @adjective and @adjective. They aspire to @aspiration someday, and are talented in @talent."
         ],
         class_spirit: [
             "Luminary",
             "Zealot",
             "Ascendril",
             "Sentinel",
             "Templar",
             "Shaman",
             "Warden",
             "Oneiromancer",
             "Monk",
             "Wayfarer",
             "Syssin",
             "Shapeshifter"
         ],
         class_shadow: [
             "Indorani",
             "Praenomen",
             "Archivist",
             "Sciomancer",
             "Carnifex",
             "Teradrim",
             "Revenant",
             "Earthcaller",
             "Monk",
             "Wayfarer",
             "Syssin",
             "Shapeshifter"
         ],
         race: [
             "Arborean",
             "Arqeshi",
             "Atavian",
             "Djeirani",
             "Dwarf",
             "Grecht",
             "Gnome",
             "Grook",
             "Human",
             "Horkval",
             "Imp",
             "Kelki",
             "Kobold",
             "Minotaur",
             "Mhun",
             "Nazetu",
             "Ogre",
             "Orc",
             "Rajamala",
             "Troll",
             "Tsol'aa",
             "Xoran"
         ],
        faction_spirit: [
             "Enorian",
             "Duiran"
         ],
        faction_shadow: [
             "Bloodloch",
             "Spinesreach"
         ],
        gender: [
             "male",
             "female",
             "non-binary"
        ],
        talent: [
             "barding",
             "bombcrafting",
             "fletching",
             "floristry",
             "fumology",
             "linguistics",
             "luthier",
             "papercrafting",
             "perfumery",
             "pyrotechnics",
             "tambourier",
             "taxidermy",
             "fishing",
             "farming",
             "mining"
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
             "wise"
         ],
//        aspiration: [
//             ""
//        ]
     });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see 
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});
