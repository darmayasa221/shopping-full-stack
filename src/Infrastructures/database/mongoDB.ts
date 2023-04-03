import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
const database = client.db("shopping-app");

export default database;
