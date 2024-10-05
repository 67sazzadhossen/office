import { connectDb } from "@/Services/connectDb";

export const PUT = async (request) => {
  const data = await request.json();
  console.log(data);
  try {
    const db = await connectDb();
    const bannerCollection = db.collection("bannerCollection");
    const filter = {};
    const updatedDoc = {
      $set: {
        image: data.image,
        title: data.description,
      },
    };
    const res = await bannerCollection.updateOne(filter, updatedDoc, {
      upsert: true,
    });

    return Response.json({ message: "success" });
  } catch (error) {
    return Response.json({ message: "error" });
  }
};

export const GET = async (request) => {
  try {
    const db = await connectDb();
    const bannerCollection = db.collection("bannerCollection");
    const res = await bannerCollection.find().toArray();
    return Response.json({ message: "success", data:res });
  } catch (error) {
    return Response.json({ message: "error" });
  }
};
