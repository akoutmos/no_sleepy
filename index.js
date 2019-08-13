// Move the mouse across the screen as a sine wave.
const robot = require('robotjs')

// Speed up the mouse.
robot.setMouseDelay(1)

// Set the params required to move the mouse and invoke the timeout loop
// If no time argument is provided the script will run every 5 mins
const two_pi = Math.PI * 2.0
const screen_size = robot.getScreenSize()
const height = screen_size.height / 2 - 10
const width = screen_size.width
const arg_minutes = process.argv.length === 3 ? process.argv.reverse()[0] : 5
const awake_interval = (arg_minutes * 60000) / 2

let { x: last_position_x, y: last_position_y } = robot.getMousePos()

// Start the timeout loop
timeout_loop()

// Calls the timeout handler at the required interval to keep the machine awake
function timeout_loop() {
  setTimeout(function() {
    move_mouse()
    timeout_loop()
  }, awake_interval)
}

// Moves the mouse and keep track of the last location so that it doesn't move the mouse if it doens't have to
function move_mouse() {
  let { x: current_position_x, y: current_position_y } = robot.getMousePos()

  // Only move the mouse if no mouse movement has occurred
  if (last_position_x === current_position_x && last_position_y === current_position_y) {
    console.log(`Mouse was moved at ${new Date()}`)

    for (let x = 0; x < width; x += 2) {
      //Move the mouse
      y = height * Math.sin((two_pi * x) / width) + height
      robot.moveMouse(x, y)
    }

    // Move the mouse back to its original point before the script was invoked...for UX
    robot.moveMouse(current_position_x, current_position_y)
  }

  // Reset the mouse position
  const mouse_pos = robot.getMousePos()
  last_position_x = mouse_pos.x
  last_position_y = mouse_pos.y
}
