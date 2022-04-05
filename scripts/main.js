
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
             "@adjective and @adjective @gender @race @class_spirit from @faction_spirit, with a talent for @talent and aspirations to @aspiration_spirit when they grow up. They follow the tenets of @god_spirit.",
             "@adjective and @adjective @gender @race @class_shadow from @faction_shadow, with a talent for @talent and aspirations to @aspiration_shadow when they grow up. They follow the tenets of @god_shadow.",
             "@gender @race @class_spirit in @faction_spirit. They are @adjective and @adjective, with a penchant for @talent and the desire to @aspiration_spirit someday. Though not overly religious, they follow @god_spirit.",
             "@gender @race @class_shadow in @faction_shadow. They are @adjective and @adjective, with a penchant for @talent and the desire to @aspiration_shadow someday. Though not overly religious, they follow @god_shadow.",
             "@class_spirit from @faction_spirit, a follower of @god_spirit. They're a @adjective @gender @race, real @adjective, and they want to @aspiration_spirit in the future. They're good at @talent, too.",
             "@class_shadow from @faction_shadow, a follower of @god_shadow. They're a @adjective @gender @race, real @adjective, and they want to @aspiration_shadow in the future. They're good at @talent, too.",
             "Rogue @class_spirit, a @gender @race, known for being @adjective and @adjective. They aspire to @aspiration_spirit someday, and are talented in @talent. If asked, they follow the ideals of @god_spirit most closely.",
             "Rogue @class_shadow, a @gender @race, known for being @adjective and @adjective. They aspire to @aspiration_shadow someday, and are talented in @talent. If asked, they follow the ideals of @god_shadow most closely."
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
        god_spirit: [
            "Damariel",
            "Dhar",
            "Ethne",
            "Haern",
            "Omei",
            "Slyphe",
            "Lexadhra",
            "one of the less controversial Albedi Gods",
        ],
        god_shadow: [
            "Chakrasul",
            "Iosyne",
            "Ivoln",
            "Tanixalthas",
            "Bamathis",
            "Severn",
            "Lexadhra",
            "a God of the Albedi Pantheon",
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
        aspiration_shadow: [
             "extinguish the Great Flame",
             "grow flowers inside a lava flow",
             "pet every ithkitten in the Ithmias",
             "live through the ecstasy of godstongue",
             "recreate Balach Shipbreaker's naval armada",
             "be ranked among the top 10 explorers of all time",
             "catch one of the biggest fish ever recorded",
             "become a Master Slayer in the Sect of Blades",
             "build a homestead on Albedos",
             "found a new guild",
        ],
          aspiration_spirit: [
             "pet every ithkitten in the Ithmias",
             "grow flowers inside a lava flow",
             "earn a pat on the head from Abhorash",
             "live through the ecstasy of godstongue",
             "recreate Balach Shipbreaker's naval armada",
             "be ranked among the top 10 explorers of all time",
             "catch one of the biggest fish ever recorded",
             "become a Master Slayer in the Sect of Blades",
             "build a homestead on Albedos",
             "found a new guild",
         ],
     });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see 
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});
