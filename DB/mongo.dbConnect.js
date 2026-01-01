import { config } from 'dotenv';
import { MongoClient, Db } from 'mongodb';

config();

const client = new MongoClient("mongodb+srv://davidkobyof_db_users:quoWn5kyEnlpYlfH@cluster0.nafjpmh.mongodb.net");

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */
export async function connect() {
    try {
        if (!db) {
            await client.connect();
            db = client.db("start_mongo");
            console.log("Connected to MongoDB");
        }
        return db;
    } catch (err) {
        console.error(err);
    }
}
