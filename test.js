$(() => {
  let playerAmount;
  const determinePlayerAmt = (trigger) => {
    console.log(trigger);
  }
  $('#btn-twoPlayer, #btn-threePlayer, #btn-fourPlayer, #btn-fivePlayer, #btn-sixPlayer').on('click', determinePlayerAmt(event.currentTarget))

})
