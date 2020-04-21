

//BURRITO
/*take burrito user input and write over speech bubble */


var burrito_input = document.getElementById("speech");

document.write(burrito_input);






//HOW YOU DIED
/*randomize output of how person died and write text + gif to page */


var COD = [
    /*0*/ "You bet your friend you could  knock down a tree by kicking it over. You disrupted a bee hive and got stung to death.",
    /*1*/ "You fought an old granny for the last package of toilet paper at the supermarket and caught your foot on the display. As you tried to yank it out, a porcelain toilet seat fell from the top shelf and knocked you out.",
    /*2*/ "You were walking with your mom and got angry at her, so you stepped on a crack in the sidewalk. Her back broke and she fell onto you, toppling you to the ground, where your head landed on a sharp rock.",
    /*3*/ "You thought the coronavirus pandemic was a hoax, so you organized a coronavirus party, livestreamed the whole thing, caught the disease, and perished.",
    /*4*/ "You pushed a kid off of a swing because all of the swings were full. At the highest pont of your swing, the chain broke and you fell violently to the ground.",
    /*5*/ "You tried to run up the down escalator, tripped, and toppled down to your death.",
    /*6*/ "You jumped into a tiger exhibit at the zoo to pet it and became a tiger meal.",
    /*7*/ "You tried the cinnamon challenge and choked on the cinnamon.",
    /*8*/ "You used a ouiji board to summon the dark spirits. When you hadn't left your room before dinner the next day, your roommate checked up on you and found you breathless lying on the floor, one hand on the board and the other on your heart.",
    /*9*/ "A blind man dropped a $100 bill. You picked it up and stuck it in your wallet. When you pulled it out at home, you got a paper cut and bled to death."
    ];

var gif = [
    /*0*/ <img src="RIPgifs/giphy(0)" alt="Gif reaction">,
    /*1*/ <img src="RIPgifs/giphy(1)" alt="Gif reaction">,
    /*2*/ <img src="RIPgifs/giphy(2)" alt="Gif reaction">,
    /*3*/ <img src="RIPgifs/giphy(3)" alt="Gif reaction">,
    /*4*/ <img src="RIPgifs/giphy(4)" alt="Gif reaction">,
    /*5*/ <img src="RIPgifs/giphy(5)" alt="Gif reaction">,
    /*6*/ <img src="RIPgifs/giphy(6)" alt="Gif reaction">,
    /*7*/ <img src="RIPgifs/giphy(7)" alt="Gif reaction">,
    /*8*/ <img src="RIPgifs/giphy(8)" alt="Gif reaction">,
    /*9*/ <img src="RIPgifs/giphy(9)" alt="Gif reaction">,
    /*10*/<img src="RIPgifs/giphy(10)" alt="Gif reaction">,
    /*11*/<img src="RIPgifs/giphy(11)" alt="Gif reaction">,
    /*12*/<img src="RIPgifs/giphy(12)" alt="Gif reaction">,
    /*13*/<img src="RIPgifs/giphy(13)" alt="Gif reaction">,
    /*14*/<img src="RIPgifs/giphy(14)" alt="Gif reaction">,
    /*15*/<img src="RIPgifs/giphy(15)" alt="Gif reaction">
    ];


var death_button = document.getElementById("death_btn");

death_button.addEventListener("click", ()=>{
    let death_index = Math.floor(Math.random()*COD.length);
    let gif_index = Math.floor(Math.random()*gif.length);
    document.write(COD[death_index]);
    document.write(gif[gif_index]);
    });



//JANET'S VOID

//FROGS
/*write frog img to page every time user presses give jeff a frog button*/