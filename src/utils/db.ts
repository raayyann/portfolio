import mongoose from "mongoose";

const db = async () => mongoose.connect(process.env.MONGO_URI as string);

export default db;
