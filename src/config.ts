import * as dotenv from "dotenv";
dotenv.config()


export const config={
    port:process.env.PORT,
    db_url:process.env.DB_URL,
    privatekey:process.env.PRIVATE_KEY,
}