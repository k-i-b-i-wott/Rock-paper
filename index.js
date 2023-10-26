    let userScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
      alert(`Round ${round}`);

      // Get the user's choice
      let userChoice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();

      // Generate a random choice for the computer
      let computerChoice = computerPlay();

      // Determine the winner for this round
      let result = playRound(userChoice, computerChoice);

      // Update the scores
      if (result === "You win!") {
        userScore++;
      } else if (result === "Computer wins!") {
        computerScore++;
      }

      alert(`You chose ${userChoice}. Computer chose ${computerChoice}. ${result}\n\nScores: You ${userScore} - Computer ${computerScore}`);
    }

    // Display the winner after 5 rounds
    if (userScore > computerScore) {
      alert("You win the game!");
    } else if (userScore < computerScore) {
      alert("Computer wins the game!");
    } else {
      alert("It's a tie!");
    }

    // Function to generate the computer's choice
    function computerPlay() {
      const choices = ["rock", "paper", "scissors"];
      return choices[Math.floor(Math.random() * 3)];
    }

    // Function to determine the winner of a round
    function playRound(user, computer) {
      if (user === computer) {
        return "It's a tie!";
      } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "scissors" && computer === "paper") ||
        (user === "paper" && computer === "rock")
      ) {
        return "You win!";
      } else {
        return "Computer wins!";
      }
    }