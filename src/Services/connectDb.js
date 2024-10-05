import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDb = async () => {
  if (db) return db;
  try {
    const uri =
      "mongodb+srv://company:cBdr7o1SHhfwpym9@cluster0.rfr5aqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
