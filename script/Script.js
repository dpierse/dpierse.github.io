let round = 0;         
let maxRounds = 3;   
  document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
	
	if (round >= maxRounds) {
        alert("Game over! No more rounds."); 
        return; 
    }
    let user1=document.getElementById("user1").value;
    let user2=document.getElementById("user2").value;
    let result;
    
	if (user1 === user2) {
      result = "It's a draw!";
    } else if (
      (user1 === "rock" && user2 === "scissors") ||
      (user1 === "paper" && user2 === "rock") ||
      (user1 === "scissors" && user2 === "paper")
    ) {
      result = "User 1 wins! Congratulations User 1";
    } else {
      result = "User 2 wins! Congratulations User 2";
    }

alert("Round " + (round + 1) + ": " + result); 
round++;  
});