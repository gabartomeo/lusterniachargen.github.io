
$(function() {

    // Populate using an object literal

    WTF.init({

         heading: [
             "Get this, it's a flakking",
             "Check this daka out, a flakking",
             "Hey kithlicker, let me tell you about this",
             "Be on the lookout for a",
             "Yo, voidsucker. My pal is a"
         ],
         response: [
             "Already flakking seen one of those, try again.",
             "Give me a-flakking-nother one!",
             "Don't really give a daka about this, one more.",
             "Intriguing, but it's not for me.",
             "Give it another go-round.",
             "Who cares? Hit me with another."
         ],
         template: [
             "@adjective and @adjective @gender @race @class from @faction, with a talent for @talent and aspirations to @aspiration when they grow up.",
             "@gender @race @class in @faction. They are @adjective and @adjective, with a penchant for @talent and the desire to @aspiration someday.",
             "@class from @faction. They're a @adjective @gender @race, real @adjective, and they want to @aspiration in the future. They're good at @talent, too."
         ],
         class: [
             "B.E.A.S.T.",
             "Fury",
             "Scoundrel",
             "Nanoseer",
             "Engineer",
         ],
         race: [
             "Amaian",
             "Decheeran",
             "Elgan",
             "Jin",
             "Krona",
             "Human",
             "Nath-el",
             "Nusriza",
             "Ry'nari",
             "Shen",
             "Tukkav",
             "W'hoorn"
         ],
        faction: [
             "the Song Dominion",
             "Scatterhome",
             "the Celestine Ascendancy"
         ],
        gender: [
             "male",
             "female",
             "non-binary"
        ],
        talent: [
             "captaincy",
             "hacking",
             "manufacturing",
             "xenohunting",
             "xenozoology",
             "collecting snowglobes",
             "exploring the galaxy",
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
        aspiration: [
             "become a famed Bounty Hunter",
             "become an incompetent Bounty Hunter",
             "lead their faction as a benevolent dictator",
             "lead their faction as a corrupt despot",
             "lead their faction with respect for all its citizens",
             "spread their hatred for the Fatar",
             "share their love for zippa with the world",
             "have a world-famous band",
             "stare into the abyss",
             "develop a biohazard that wipes out entire planets",
             "destroy entire civilizations with their powerful armadas",
             "found a peaceful commune on the outskirts of Litharge"
        ]
     });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see 
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});
