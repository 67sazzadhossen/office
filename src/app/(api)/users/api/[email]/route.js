import { connectDb } from "@/Services/connectDb";

export const GET = async (request) => {
  console.log("params", request);
  try {
    const db = await connectDb();
    const usersCollection = db.collection("usersCollection");

    return Response.json({ message: "Success" });
  } catch (error) {
    return Response.json({ message: "error" });
  }
};
