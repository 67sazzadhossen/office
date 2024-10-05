import { connectDb } from "@/Services/connectDb";

export const PUT = async(request)=> {
    const data = await request.json();
    console.log(data)
    try {
        const db = await connectDb();
        const projectCollection = db.collection("projectCollection")
        const res = await projectCollection.insertOne(data);
        return Response.json({message: "success"})
    } catch (error) {
        return Response.json(error)
    }
}


export const GET = async(request)=> {
    try {
        const db = await connectDb();
        const projectCollection = db.collection("projectCollection")
        const res = await projectCollection.find().toArray();
        return Response.json({message: "success",data: res});
    } catch (error) {
        return Response.json(error)
    }
}