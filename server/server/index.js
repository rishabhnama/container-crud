require("dotenv").config();

console.log(`Name: ${process.env.PROFILE_NAME}`);
console.log(`First Name: ${process.env.PROFILE_FIRSTNAME}`);
console.log(`Last Name: ${process.env.PROFILE_LASTNAME}`);
console.log(`Age: ${process.env.PROFILE_AGE}`);
console.log(`State: ${process.env.PROFILE_STATE}`);
