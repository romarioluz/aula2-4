import dotenv from 'dotenv'
if(process.env.PRD !== "true") dotenv.config();
console.log(process.env.USER_DB);