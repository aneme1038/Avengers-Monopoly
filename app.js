//________________________________________________________//
//                    AVENGERS MONOPOLY                  //
//_______________________________________________________//
//Objects needed for Monopoly
  //1. Hero Card Objects
  //2. Stark Industry Card Objects
  //3. Infinity Gauntlet Card Objects
  //4. Player Class
  //5. Gameboard Class
//__________________
// HERO CARDS
//__________________
const heroCards = {
  mariaHill: {
    cost: 60,
    color: "brown",
    set: "brown",
    sidelineValue: 30,
    reactivationFee: 33,
    baseCost: 50,
    headquartersCost: 50,
    payments: {
      payment: 2,
      paymentWithColorSet: 4,
      paymentWithOneBase: 10,
      paymentWithTwoBases: 30,
      paymentWithThreeBases: 90,
      paymentWithFourBases: 160,
      paymentWithHeadquarters: 250
    },
    owner: null
  },
  nickFury: {
    cost: 60,
    color: "brown",
    set: "brown",
    sidelineValue: 30,
    reactivationFee: 33,
    baseCost: 50,
    headquartersCost: 50,
    payments: {
      payment: 4,
      paymentWithColorSet: 8,
      paymentWithOneBase: 20,
      paymentWithTwoBases: 60,
      paymentWithThreeBases: 180,
      paymentWithFourBases: 320,
      paymentWithHeadquarters: 450
    },
    owner: null
  },
  theWasp: {
    cost: 100,
    color: "light blue",
    set: "light blue",
    sidelineValue: 50,
    reactivationFee: 55,
    baseCost: 50,
    headquartersCost: 50,
    payments: {
      payment: 6,
      paymentWithColorSet: 12,
      paymentWithOneBase: 30,
      paymentWithTwoBases: 90,
      paymentWithThreeBases: 270,
      paymentWithFourBases: 400,
      paymentWithHeadquarters: 550
    },
    owner: null
  },
  falcon: {
    cost: 100,
    color: "light blue",
    set: "light blue",
    sidelineValue: 50,
    reactivationFee: 55,
    baseCost: 50,
    headquartersCost: 50,
    payments: {
      payment: 6,
      paymentWithColorSet: 12,
      paymentWithOneBase: 30,
      paymentWithTwoBases: 90,
      paymentWithThreeBases: 270,
      paymentWithFourBases: 400,
      paymentWithHeadquarters: 550
    },
    owner: null
  },
  ironSpider: {
    cost: 120,
    color: "light blue",
    set: "light blue",
    sidelineValue: 60,
    reactivationFee: 66,
    baseCost: 50,
    headquartersCost: 50,
    payments: {
      payment: 8,
      paymentWithColorSet: 16,
      paymentWithOneBase: 40,
      paymentWithTwoBases: 100,
      paymentWithThreeBases: 300,
      paymentWithFourBases: 450,
      paymentWithHeadquarters: 600
    },
    owner: null
  },
  drax: {
    cost: 140,
    color: "purple",
    set: "purple",
    sidelineValue: 70,
    reactivationFee: 77,
    baseCost: 100,
    headquartersCost: 100,
    payments: {
      payment: 10,
      paymentWithColorSet: 20,
      paymentWithOneBase: 50,
      paymentWithTwoBases: 150,
      paymentWithThreeBases: 450,
      paymentWithFourBases: 625,
      paymentWithHeadquarters: 750
    },
    owner: null
  },
  winterSoldier: {
    cost: 150,
    color: "utility",
    set: "utility",
    sidelineValue: 75,
    reactivationFee: 83,
    owner: null
  },
  groot: {
    cost: 140,
    color: "purple",
    set: "purple",
    sidelineValue: 70,
    reactivationFee: 77,
    baseCost: 100,
    headquartersCost: 100,
    payments: {
      payment: 10,
      paymentWithColorSet: 20,
      paymentWithOneBase: 50,
      paymentWithTwoBases: 150,
      paymentWithThreeBases: 450,
      paymentWithFourBases: 625,
      paymentWithHeadquarters: 750
    },
    owner: null
  },
  starLord: {
    cost: 160,
    color: "purple",
    set: "purple",
    sidelineValue: 80,
    reactivationFee: 88,
    baseCost: 100,
    headquartersCost: 100,
    payments: {
      payment: 12,
      paymentWithColorSet: 24,
      paymentWithOneBase: 60,
      paymentWithTwoBases: 180,
      paymentWithThreeBases: 500,
      paymentWithFourBases: 700,
      paymentWithHeadquarters: 900
    },
    owner: null
  },
  mantis: {
    cost: 180,
    color: "orange",
    set: "orange",
    sidelineValue: 90,
    reactivationFee: 99,
    baseCost: 100,
    headquartersCost: 100,
    payments: {
      payment: 14,
      paymentWithColorSet: 28,
      paymentWithOneBase: 70,
      paymentWithTwoBases: 200,
      paymentWithThreeBases: 550,
      paymentWithFourBases: 750,
      paymentWithHeadquarters: 950
    },
    owner: null
  },
  stonekeeper: {
    cost: 180,
    color: "orange",
    set: "orange",
    sidelineValue: 90,
    reactivationFee: 99,
    baseCost: 100,
    headquartersCost: 100,
    payments: {
      payment: 14,
      paymentWithColorSet: 28,
      paymentWithOneBase: 70,
      paymentWithTwoBases: 200,
      paymentWithThreeBases: 550,
      paymentWithFourBases: 750,
      paymentWithHeadquarters: 950
    },
    owner: null
  },
  gamora: {
    cost: 200,
    color: "orange",
    set: "orange",
    sidelineValue: 100,
    reactivationFee: 110,
    baseCost: 100,
    headquartersCost: 100,
    payments: {
      payment: 16,
      paymentWithColorSet: 32,
      paymentWithOneBase: 80,
      paymentWithTwoBases: 220,
      paymentWithThreeBases: 600,
      paymentWithFourBases: 800,
      paymentWithHeadquarters: 1000
    },
    owner: null
  },
  valkyrie: {
    cost: 220,
    color: "red",
    set: "red",
    sidelineValue: 110,
    reactivationFee: 121,
    baseCost: 150,
    headquartersCost: 150,
    payments: {
      payment: 18,
      paymentWithColorSet: 36,
      paymentWithOneBase: 90,
      paymentWithTwoBases: 250,
      paymentWithThreeBases: 700,
      paymentWithFourBases: 875,
      paymentWithHeadquarters: 1050
    },
    owner: null
  },
  heimdall: {
    cost: 220,
    color: "red",
    set: "red",
    sidelineValue: 110,
    reactivationFee: 121,
    baseCost: 150,
    headquartersCost: 150,
    payments: {
      payment: 18,
      paymentWithColorSet: 36,
      paymentWithOneBase: 90,
      paymentWithTwoBases: 250,
      paymentWithThreeBases: 700,
      paymentWithFourBases: 875,
      paymentWithHeadquarters: 1050
    },
    owner: null
  },
  theCollector: {
    cost: 240,
    color: "red",
    set: "red",
    sidelineValue: 120,
    reactivationFee: 132,
    baseCost: 150,
    headquartersCost: 150,
    payments: {
      payment: 20,
      paymentWithColorSet: 40,
      paymentWithOneBase: 100,
      paymentWithTwoBases: 300,
      paymentWithThreeBases: 750,
      paymentWithFourBases: 925,
      paymentWithHeadquarters: 1100
    },
    owner: null
  },
  shuri: {
    cost: 260,
    color: "yellow",
    set: "yellow",
    sidelineValue: 130,
    reactivationFee: 143,
    baseCost: 150,
    headquartersCost: 150,
    payments: {
      payment: 22,
      paymentWithColorSet: 44,
      paymentWithOneBase: 110,
      paymentWithTwoBases: 300,
      paymentWithThreeBases: 800,
      paymentWithFourBases: 975,
      paymentWithHeadquarters: 1150
    },
    owner: null
  },
  scarletWitch: {
    cost: 260,
    color: "yellow",
    set: "yellow",
    sidelineValue: 130,
    reactivationFee: 143,
    baseCost: 150,
    headquartersCost: 150,
    payments: {
      payment: 22,
      paymentWithColorSet: 44,
      paymentWithOneBase: 110,
      paymentWithTwoBases: 300,
      paymentWithThreeBases: 800,
      paymentWithFourBases: 975,
      paymentWithHeadquarters: 1150
    },
    owner: null
  },
  blackPanther: {
    cost: 150,
    color: "utility",
    set: "utility",
    sidelineValue: 75,
    reactivationFee: 83,
    owner: null
  },
  vision: {
    cost: 280,
    color: "yellow",
    set: "yellow",
    sidelineValue: 140,
    reactivationFee: 154,
    baseCost: 150,
    headquartersCost: 150,
    payments: {
      payment: 24,
      paymentWithColorSet: 48,
      paymentWithOneBase: 120,
      paymentWithTwoBases: 360,
      paymentWithThreeBases: 850,
      paymentWithFourBases: 1025,
      paymentWithHeadquarters: 1200
    },
    owner: null
  },
  wong: {
    cost: 300,
    color: "green",
    set: "green",
    sidelineValue: 150,
    reactivationFee: 165,
    baseCost: 200,
    headquartersCost: 200,
    payments: {
      payment: 26,
      paymentWithColorSet: 52,
      paymentWithOneBase: 130,
      paymentWithTwoBases: 390,
      paymentWithThreeBases: 900,
      paymentWithFourBases: 1100,
      paymentWithHeadquarters: 1275
    },
    owner: null
  },
  theAncientOne: {
    cost: 300,
    color: "green",
    set: "green",
    sidelineValue: 150,
    reactivationFee: 165,
    baseCost: 200,
    headquartersCost: 200,
    payments: {
      payment: 26,
      paymentWithColorSet: 52,
      paymentWithOneBase: 130,
      paymentWithTwoBases: 390,
      paymentWithThreeBases: 900,
      paymentWithFourBases: 1100,
      paymentWithHeadquarters: 1275
    },
    owner: null
  },
  doctorStrange: {
    cost: 320,
    color: "green",
    set: "green",
    sidelineValue: 160,
    reactivationFee: 176,
    baseCost: 200,
    headquartersCost: 200,
    payments: {
      payment: 28,
      paymentWithColorSet: 56,
      paymentWithOneBase: 150,
      paymentWithTwoBases: 450,
      paymentWithThreeBases: 1000,
      paymentWithFourBases: 1200,
      paymentWithHeadquarters: 1400
    },
    owner: null
  },
  loki: {
    cost: 350,
    color: "blue",
    set: "blue",
    sidelineValue: 175,
    reactivationFee: 193,
    baseCost: 200,
    headquartersCost: 200,
    payments: {
      payment: 35,
      paymentWithColorSet: 70,
      paymentWithOneBase: 175,
      paymentWithTwoBases: 500,
      paymentWithThreeBases: 1100,
      paymentWithFourBases: 1300,
      paymentWithHeadquarters: 1500
    },
    owner: null
  },
  odin: {
    cost: 400,
    color: "blue",
    set: "blue",
    sidelineValue: 200,
    reactivationFee: 220,
    baseCost: 200,
    headquartersCost: 200,
    payments: {
      payment: 50,
      paymentWithColorSet: 100,
      paymentWithOneBase: 200,
      paymentWithTwoBases: 600,
      paymentWithThreeBases: 1400,
      paymentWithFourBases: 1700,
      paymentWithHeadquarters: 2000
    },
    owner: null
  }
}
//__________________
// PLAYER CLASS
//__________________
class Player {
  constructor (name, gamePiece, bankTotal, heroes) {
    this.name = name;
    this.gamePiece = gamePiece;
    this.bankTotal = bankTotal;
    this.heroes = heroes;
    this.inJail = false;
    this.bankTotal = 1500;
    this.jailFreeCard = false;
    this.startingRoll = 0;
  }
  checkHero () {
    //build logic to check if the current hero player landed on is available to buy
    //add conditional to check for this. IF hero is owned, initiate the Pay Owner function.
    //Else, prompt user to either buy the hero or initiate the Auction function
  }
  buyHero () {
    //build logic to buy hero after checkHero is called
    let isAvailable = checkHero();
    if (isAvailable == true) {
      //then player can buy hero
    } else {
      //player cannot buy hero and must pay owner of hero
    }
  }
  tradeHero () {
    //build logic to trade a hero to another player for money or another hero.
  }
  sidelineHero () {
    //build logic to mortgage or sideline hero for money back to your bank.
    //While a hero is sidelined, cannot earn revenue from other players that land on that hero.
  }
  reactivateHero () {
    //build logic to reactivate a hero that was sidelined by paying the reactivation fee
  }
  buyBase () {
    //build logic to buy a base on your hero or heroes. Build checks to make sure
    //all other heroes of that color set have the same number of bases before you can build another base.
  }
  buyHQ () {
    //build logic to buy a headquarters on your hero or heroes. Must have 4 Bases
    //on all heroes before one can buy a HQ on a hero.
  }
  sellHQ () {
    //build logic to sell a HQ for money.
  }
  sellBase () {
    //build logic to sell a base on a hero
  }
}

//_________________________
// HANDLERS / FUNCTIONS
//_________________________
//Functions needed for MONOPOLY
  // 0. Determine Player Amount
const determinePlayerAmt = () => {
  let total;
  //make variable that takes in what user entered in form (maximum  6 players).
  if (total > 6) {
    alert("You cannot have more than 6 players");
  }
  return total;
}
  // 1. Double Dice Roll Function
const doubleDiceRoll = () => {
  //pick a random number from each dice and return the combined total
  let x = Math.floor(Math.random() * 12) + 1;
  return x;
}
// 2. Draw Stark Chance Card Function
const drawStarkCard = () => {

}
// 3. Draw Infinity Gauntlet Chance Card Function
const drawInfinityCard = () => {

}
// 4. Determine Player Start Order via dice roll function
// 5. Single Dice Roll Function for battling children of Thanos
const singleDiceRoll = () => {
  let x = Math.floor(Math.random() * 6) + 1;
  return x;
}
// 6. Property Check Function
// 7. Purchase House / Base Function
// 8. Purchase Hotel / Headquarters Function
// 9. Determine if player has full color set function
// 10. Payment for amount of assets owned
const assetPayment = (currentPlayer) => {

}
// 11. Move player function (Forwards and Backwards Functions, and specific space)

const movePieceForward = (player, roll) => {

}
const movePieceBackward = (player, roll) => {

}
const moveToSpace = (player) => {

}
// 12. Pass Go Function
const passGo = (player) => {
  return player.bankTotal + 200
}
// 13. Go to Jail Function and Get out of Jail Function
const goToJail = (player) => {
  if (player.inJail !== true) {
    player.inJail == true
  }
  moveToSpace(player, "INSERT SPACE HERE");
}
const getOutOfJail = (player) => {
  if (player.inJail == true) {
    player.inJail == false
  }
}
// 14. Calculate Utility Payment

// 15. pay tax if Ultron or Hela space
const taxSpaces = (player) => {
  player.bankTotal -= 100;
}
// 16. battle Child of Thanos
const battleChildOfThanos = (player, number) => {

}
//__________________
// GLOBAL VARIABLES
//__________________

//gameboard
const gameboard = [
  {go: passGo(currentPlayer)},
  heroCards.mariaHill,
  {draw: drawStarkCard()},
  heroCards.nickFury,
  {ultron: taxSpaces(currentPlayer)},
  {cullObsidian: battleChildOfThanos(currentPlayer, 1)},
  heroCards.theWasp,
  {draw: drawInfinityCard()},
  heroCards.falcon,
  heroCards.ironSpider,
  {jail: "Just Visiting"},
  heroCards.drax,
  heroCards.winterSoldier,
  heroCards.groot,
  heroCards.starLord,
  {proximaMidnight: battleChildOfThanos(currentPlayer, 2)},
  heroCards.mantis,
  {draw: drawStarkCard()},
  heroCards.stonekeeper,
  heroCards.gamora,
  {freeParking: "Free Parking"},
  heroCards.valkyrie,
  {draw: drawInfinityCard()},
  heroCards.heimdall,
  heroCards.theCollector,
  {corvusGlaive: battleChildOfThanos(currentPlayer, 3)},
  heroCards.shuri,
  heroCards.scarletWitch,
  heroCards.blackPanther,
  heroCards.vision,
  {jail: goToJail(currentPlayer)},
  heroCards.wong,
  heroCards.theAncientOne,
  {draw: drawStarkCard()},
  heroCards.doctorStrange,
  {ebonyMaw: battleChildOfThanos(currentPlayer, 4)},
  {draw: drawInfinityCard()},
  heroCards.loki,
  {hela: taxSpaces(currentPlayer)},
  heroCards.odin
]
//card decks
let starkCardPile = [
  {
    text: "You attempt to lift Mjolnir at a party, and it nearly moves! Collect 20",
    value: 20
  },
  {
    text: "You and Natasha Romanoff fend off an attack from the Children of Thanos",
    value: 100
  },
  {
    text: "You fortify your armor with Wakandan Vibranium. Collect 25",
    value: 25
  },
  {
    text: "Doctor Strange offers you Tea, but you don't drink tea. He conjures your drink of choice instead. Cheers! Collect 10",
    value: 10
  },
  {
    text: "You destroy Hydra's Helicarriers and foil Project Insight! Collect 200",
    value: 200
  },
  {
    text: "Another successful raid on a Hydra compound. Collect 100",
    value: 100
  },
  {
    text: "You manage to subdue the Hulk with the HulkBuster Armor, but now the whole neighborhood is in ruins. Pay 50",
    value: -50
  },
  {
    text: "The Avengers have Thanos restrained! Now's your chance! Advance to Go. Collect 200.",
    event: passGo(currentPlayer)
  },
  {
    text: "The World Security Council does not approve of your operations. For each Base, Pay 40. For each Headquarters, Pay 100.",
    event: assetPayment(currentPlayer)
  },
  {
    text: "You use Pym particles to escape the Quantum Realm! GET OUT OF JAIL FREE. This Card may be kept until needed, traded, or sold.",
    event: () => {
      currentPlayer.jailFreeCard = true;
    }
  },
  {
    text: "Scarlet Witch fills your mind with terrible visions of destruction. Pay 50",
    value: -50
  },
  {
    text: "You convince everyone to sign the Sokovia Accords. Collect 10 from each player",
    event: () => {
      //Logic that will collect 10 from each player and add it to current Player's bank total
      for (let i = 0; i < playersArray.length; i++) {
        if (playersArray[i] !== currentPlayer) {
          playersArray[i].bankTotal = playersArray[i].bankTotal - 10;
        }
      }
      //now add money to currentplayer's bank total
      currentPlayer.bankTotal = currentPlayer.bankTotal + (10 * (playersArray.length - 1));
    }
  },
  {
    text: "It's going to take a lot of money to rebuild Tony Stark's Malibu Mansion. Pay 100.",
    value: -100
  },
  {
    text: "You're trapped in the Quantum Realm! GO TO JAIL. GO DIRECTLY TO JAIL. DO NOT PASS GO. DO NOT COLLECT 200.",
    event: goToJail(currentPlayer)
  },
  {
    text: "Tony Stark is ready to debut his newest suit featuring NanoTechnology! Collect 100.",
    value: 100
  },
  {
    text: "Shuri gives you a tour of her lab and doesn't roast you for your shoes! Collect 50.",
    value: 50
  }
]
let infinityGauntletPile = [
  {
    text: "The Time Stone traps you in a time loop! Roll One Die. If your roll is: 'EVEN' - Move Forward that many spaces, and follow the rules of the space where you land. 'ODD' - Move Backward that many spaces, and follow the rules of the space where you land.",
    event: () => {
      let result = singleDiceRoll();
      if (result % 2 == 0) {
        movePieceForward(currentPlayer, result)
      } else {
        movePieceBackward(currentPlayer, result)
      }
    }
  },
  {
    text: "You teleport using the Space Stone. Roll One Die. If your roll is: 'EVEN' - Proceed to Stonekeeper. If he is undrafted, you must draft him or auction his allegiance. If he is drafted, pay the owner. 'ODD' - Proceed to Heimdall. If he is undrafted, you must draft him or auction his allegiance. If he is drafted, pay the owner.",
    event: () => {
      let result = singleDiceRoll();
      if (result % 2 == 0) {
        moveToSpace(currentPlayer, "Insert HERE")
      } else {
        moveToSpace(currentPlayer, "Insert HERE")
      }
    }
  },
  {
    text: "You attempt to wield the Power Stone. ALL OTHER PLAYERS take turns rolling both dice. Any Player who rolls 2-6 must pay you 100. Any Player who rolls 7-12 does nothing. They withstand the attack.",
    event: () => {
      let result;
      for (let i = 0; i < playersArray.length; i++) {
        if (playersArray[i] !== currentPlayer) {
          result = doubleDiceRoll();
          if (result < 7) {
            playersArray[i].bankTotal -= 100;
            currentPlayer.bankTotal += 100;
          }
        }
      }
    }
  },
  {
    text: "Thanos snaps his fingers. Roll One Die. If your roll is: 'EVEN' - Do Nothing. Consider Yourself Lucky. 'ODD' - Go Directly to Jail. Do not Pass GO. Do Not Collect 200.",
    event: () => {
      let result = singleDiceRoll();
      if (result % 2 !== 0){
        goToJail(currentPlayer);
      }
    }
  },
  {
    text: "Tony Stark attempts to create a new A.I. with the power from the mind stone. Roll One Die. If your roll is: 'EVEN' - Vision is created! Collect 100 from the bank. 'ODD' - Ultron is accidentally unleashed! Pay 100 to the bank.",
    event: () => {
      let result = singleDiceRoll();
      if (result % 2 == 0) {
        currentPlayer.bankTotal += 100;
      } else {
        currentPlayer.bankTotal -= 100;
      }
    }
  },
  {
    text: "Thanos Respects Power. If you have a complete color set, place on base on any one of the heroes in that set, as long as there is space available. If you do not have a complete color set, pay 100 to the bank.",
    event: () => {
      //code this later
    }
  },
  {
    text: "You find yourself on Sakaar in need of an ally. Roll one die. If your roll is: 'EVEN' - Proceed to Valkyrie. If she is undrafted, you must draft her or auction her allegiance. If she is drafted, pay the owner. 'ODD' - Proceed to Loki. If he is undrafted, you must draft him or auction his allegiance. If he is drafted, pay the owner.",
    event: () => {
      let result = singleDiceRoll();
      if (result % 2 == 0) {
        moveToSpace(currentPlayer, "INSERT HERE")
      } else {
        moveToSpace(currentPlayer, "INSERT HERE")
      }
    }
  },
  {
    text: "A Blast from the Power Stone knocks everyone off their feet. EACH PLAYER rolls one die. If your roll is: 'EVEN' - Pay 100 to the bank. 'ODD' - Pay 200 to the bank.",
    event: () => {
      let result;
      for (let i = 0; i < playersArray.length; i++) {
        result = singleDiceRoll();
        if (result % 2 == 0) {
          playersArray[i].bankTotal -= 100;
        } else {
          playersArray[i].bankTotal -= 200;
        }
      }
    }
  },
  {
    text: "The Reality Stone alters your plane of existence, but is it for the better? Roll One Die. If your roll is: 'EVEN' - Advance to Go. Collect 200 from the bank. 'ODD' - Go Directly to Jail. Do Not Pass Go. Do Not Collect 200.",
    event: () => {
      let result = singleDiceRoll();
      if (result % 2 == 0) {
        moveToSpace(currentPlayer, "INSERT SPACE HERE");
        passGo(currentPlayer);
      } else {
        goToJail(currentPlayer);
      }
    }
  },
  {
    text: "You reach Kamar-Tak and approach The Ancient One. Roll One Die. If your roll is: '1-3' - The Ancient One approves of your modest intentions. Collect 100 times your roll. '4-6' - Your arrogance concerns The Ancient One. Do Nothing.",
    event: () => {
      let result = singleDiceRoll();
      if (result < 4) {
        currentPlayer.bankTotal += (100 * result);
      }
    }
  },
  {
    text: "Captain Marvel detects a distant, powerful force with her cosmic awareness. Roll One Die. If your roll is: 'EVEN' - It's the Avengers! Collect 50 from the bank. 'ODD' - It's an army of skrulls. Pay 50 to the bank.",
    event: () => {
      let result = singleDiceRoll();
      if (result % 2 == 0) {
        currentPlayer.bankTotal += 50;
      } else {
        currentPlayer.bankTotal -= 50;
      }
    }
  },
  {
    text: "You're picked up by the Guardians of the Milano. Roll One Die. If your roll is: 'EVEN' - Proceed to the nearest undrafted hero. You must draft them or auction their allegiance. If there are no undrafted heroes remaining, do nothing. 'ODD' - Proceed to the nearest Child of Thanos, and battle them!",
    event: () => {
      let result = singleDiceRoll();
      if (result % 2 == 0){
        //include logic to move to nearest available property. add conditional that checks if there are any properties remaining and if not, than do nothing.
      } else {
        //include logic to move to nearest Child of Thanos and trigger battle.
      }
    }
  },
  {
    text: "One of Thanos' Outriders ambushes you! EACH PLAYER rolls one die. If your roll is: 'EVEN' - You dodge the attack and may collect 50 from the bank. 'ODD' - You are caught off guard and must pay 50 to the bank.",
    event: () => {
      let result;
      for (let i = 0; i < playersArray.length; i++) {
        result = singleDiceRoll();
        if (result % 2 == 0){
          playersArray[i].bankTotal += 50;
        } else {
          playersArray[i].bankTotal -= 50;
        }
      }
    }
  },
  {
    text: "The Soul Stone demands a great sacrifice. ALL OTHER PLAYERS take turns rolling one die. Any Player who rolls EVEN does nothing. Any Player who rolls ODD must pay you 100.",
    event: () => {
      let result;
      for (let i = 0; i < playersArray.length; i++){
        if (playersArray[i] !== currentPlayer){
          result = singleDiceRoll();
          if (result % 2 !== 0) {
            playersArray[i].bankTotal -= 100;
            currentPlayer.bankTotal += 100;
          }
        }
      }
    }
  },
  {
    text: "Loki attempts to control you using the Mind Stone. Roll One Die. If your roll is: 'EVEN' - You resist his control! Collect 150. 'ODD' - You become Loki's pawn. Pay 150 to the bank.",
    event: () => {
      let result = singleDiceRoll();
      if (result % 2 == 0) {
        currentPlayer.bankTotal += 150;
      } else {
        currentPlayer.bankTotal -= 150;
      }
    }
  },
  {
    text: "You attempt to harness the power of the Mind Stone. Roll One Die. If your roll is: 'EVEN' - Trade any one of your heroes for any one of another player's heroes. You may not choose a hero that is part of a complete set. If there are no heroes available to trade, do nothing. 'ODD' - Choose one of your heroes, and auction their allegiance. You may not choose a hero that is part of a complete set. If you have no heroes, do nothing.",
    event: () => {
      let result = singleDiceRoll();
      if (result % 2 == 0){
        //initiate event listed above
      } else {
        //initiate event listed above
      }
    }
  }
]
//variable to set the amount of players for a single game
let playerAmount;
//the results of shuffling the decks of cards
let startingStarkDeck = [];
let startingInfinityDeck = [];
//player starting order
let playerTurnOrder = [];
//_______________________
// GAME START FUNCTIONS
//_______________________

//Shuffle Card Decks Function
const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}
const generatePlayers = (playerAmount) => {
  if (playerAmount == 2) {
    let player1 = new Player();
    let player2 = new Player();
    playersArray.push(player1, player2);
  } else if (playerAmount == 3) {
    let player1 = new Player();
    let player2 = new Player();
    let player3 = new Player();
    playersArray.push(player1, player2, player3);
  } else if (playerAmount == 4) {
    let player1 = new Player();
    let player2 = new Player();
    let player3 = new Player();
    let player4 = new Player();
    playersArray.push(player1, player2, player3, player4);
  } else if (playerAmount == 5) {
    let player1 = new Player();
    let player2 = new Player();
    let player3 = new Player();
    let player4 = new Player();
    let player5 = new Player();
    playersArray.push(player1, player2, player3, player4, player5);
  } else if (playerAmount == 6) {
    let player1 = new Player();
    let player2 = new Player();
    let player3 = new Player();
    let player4 = new Player();
    let player5 = new Player();
    let player6 = new Player();
    playersArray.push(player1, player2, player3, player4, player5, player6);
  }
}
const gameStart = () => {
  playerAmount = determinePlayerAmt();
  //Based on player amount, generate the players
  generatePlayers(playerAmount);
  //shuffle the chance card decks
  startingStarkDeck = shuffleDeck(starkCardPile);
  startingInfinityDeck = shuffleDeck(infinityGauntletPile);
  //determine who gets to go first
  while (playerAmount > 0) {
    let highestRoll = 0;
    let result;
    let winner;
    for (let i = 0; i < playersArray.length; i++) {
      result = doubleDiceRoll();
      if (result > highestRoll) {
        highestRoll = result;
        winner = playersArray[i];
      }
    }
    playerTurnOrder.push(winner);
    playerAmount--;
  }
}



//Player Class Object
  //1. Money in Bank
  //2. Owned Properties / Heroes
  //3. Owned Houses / Bases
  //4. Owned Hotels / HQ's
  //5. Game Piece.

//Variables Needed for Monopoly
  // 1.
