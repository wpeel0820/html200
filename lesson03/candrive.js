const firstName = "Charlie";
const lastName = "Brown";
const age = 8; // Driver's age
const drivingAge = 16; // Legal driving age

if (age >= drivingAge) {
  console.log(`${firstName} ${lastName} can drive`);
} else {
  let countdown = 5;
  while (countdown >= 0) {
    console.log(countdown);
    countdown--;
  }
}