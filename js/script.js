// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$('#shoot').click(function(){

    let inputVal = $('#input').val()
    console.log(inputVal)
    $('#userChoice').text(inputVal)


    let cpuval = Math.random();
    if (cpuval > .66){
    cpuval = 'rock'
    $('#computerChoice').text('rock')    
    }

    else if (cpuval > .33){
    cpuval = 'paper'
    $('#computerChoice').text('paper')}

    else if (cpuval > 0){
    cpuval = 'scissor'
    $('#computerChoice').text('scissor')}


    if (inputVal === 'rock' && cpuval === 'rock'){
    $('#result').text('Tie')}

    else if(inputVal === 'rock' && cpuval === 'paper'){
    $('#result').text('You Lose')}

    else if(inputVal === 'rock' && cpuval === 'scissor'){
    $('#result').text('You Win')}

    else if(inputVal === 'paper' && cpuval === 'rock'){
    $('#result').text('You Win')}

     else if(inputVal === 'paper' && cpuval === 'paper'){
    $('#result').text('Tie')}

     else if(inputVal === 'paper' && cpuval === 'scissor'){
    $('#result').text('You Lose')}

     else if(inputVal === 'scissor' && cpuval === 'rock'){
    $('#result').text('You Lose')}

     else if(inputVal === 'scissor' && cpuval === 'paper'){
    $('#result').text('You Win')}

     else if(inputVal === 'scissor' && cpuval === 'scissor'){
    $('#result').text('Tie')}

})


// DOCUMENT READY FUNCTION BELOW

