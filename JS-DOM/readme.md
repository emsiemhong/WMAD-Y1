# Final Challenge: DOM Mini-Game:
  1. Variable Declarations:
     - Added references to the DOM elements we'll need to manipulate
  2. moveTarget() Function:
     - Calculates maximum X and Y positions by subtracting target size from game area size (prevents target from going outside bounds)
     - Uses Math.random() to generate random coordinates
     - Applies the new position using style.left and style.top with pixel units
  3. Click Event Listener:
     - Increases score by 1 on each click
     - Updates the score display text
     - Calls moveTarget() to relocate the target after each click
  4. Game Start:
     - Initial call to moveTarget() positions the target when page loads

  This creates a simple but functional game where:

     - A red circle target appears in a random position
     - Clicking it increases your score
     - The target jumps to a new random position after each click
     - The score display updates in real-time

  The target stays within the game area boundaries and the game continues indefinitely as you click.