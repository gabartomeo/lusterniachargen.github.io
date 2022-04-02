
$(function() {

    // Populate using an object literal

    WTF.init({

         heading: [
             "New character:"
         ],
         response: [
            "Let's do another."
         ],
         template: [
             "@adjective and @adjective @gender @race @class from @faction, with a talent for @talent and aspirations to @aspiration when they grow up.",
             "@gender @race @class in @faction. They are @adjective and @adjective, with a penchant for @talent and the desire to @aspiration someday.",
             "@class from @faction. They're a @adjective @gender @race, real @adjective, and they want to @aspiration in the future. They're good at @talent, too."
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
             "Duiran",
             "rogue"
         ],
        faction_shadow: [
             "Bloodloch",
             "Spinesreach",
             "rogue"
         ],
        gender: [
             "male",
             "female",
             "non-binary"
        ],
//        talent: [
//             ""
//        ],
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
