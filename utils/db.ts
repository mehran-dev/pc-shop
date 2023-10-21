// @ts-nocheck
import mongoose from "mongoose";

async function connect() {
  await mongoose.connect(process.env.NEXT_DB_URL);

  console.log("Connected to : ", process.env.NEXT_DB_URL);
}

function convertToObj(doc) {
  doc._id = doc._id.toString();

  return doc;
}

const db = { connect, convertToObj };
export default db;
