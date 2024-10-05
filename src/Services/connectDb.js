import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDb = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGO_URI;

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("myOfficeDb");
    return db;
  } catch (error) {
    console.log(error);
  }
};
