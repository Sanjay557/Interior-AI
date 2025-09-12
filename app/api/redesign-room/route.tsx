import { db } from "@/configs/db";
import { AiGeneratedImage } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

export const replicate = new Replicate({
    auth:process.env.REPLICATE_API_KEY
})

export async function POST(req:any){
    // const {user} = useUser()

    const {imageUrl,roomType,designType,additionalReq,userEmail} = await req.json()

    try{
        const prompt = `
      Give me a ${roomType} with a ${designType} design.
      ${additionalReq ? "Additional requirements: " + additionalReq : ""}
    `;

    const input = {
        prompt,
        aspect_ratio: "3:2",
    };

    // const output = await replicate.run("bytedance/sdxl-lightning-4step:6f7a773af6fc3e8de9d5a3c00be77c17308914bf67772726aff83496ba1e3bbe", { input });

    // //@ts-ignore
    // const url = output[0].url ? output[0].url() : output;

    // console.log("Final image URL:", url.href);

    //Uncomment the code if you actually need something.

    const url = {
        href: "https://ik.imagekit.io/qt3mh7bup/1757600595687.png"
    }

    const dbResult = await db.insert(AiGeneratedImage).values({
        roomType: roomType,
        designType: designType,
        orgImage: imageUrl,
        aiImage: url.href,
        userEmail: userEmail

    }).returning({id:AiGeneratedImage.id})

    console.log(dbResult)
    return NextResponse.json({ result: dbResult[0] });

    }catch(e){
    return NextResponse.json({error:e})
    }

    

    

    

    
    



}