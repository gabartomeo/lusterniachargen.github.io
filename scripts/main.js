
$(function() {

    // Populate using an object literal

    WTF.init({

         heading: [
             "It's a flakking",
             "Check this daka out, a flakking"
         ],
         response: [
             "Already flakking seen one",
             "Give me a-flakking-nother one",
             "Don't really give a daka"
         ],
         template: [
             "@gender @race @class from @faction, with a talent for @talent",
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
             "Song Dominion",
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
             "xenohunting"
        ],
     });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see 
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});
