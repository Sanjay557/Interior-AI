import { db } from "@/configs/db";
import { AiGeneratedImage } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { userEmail } = await req.json()

    try {
        const result = await db.select().from(AiGeneratedImage)
            .where(eq(AiGeneratedImage.userEmail, userEmail))

        return NextResponse.json(result);
    }
    catch(e){
        return NextResponse.json({error:e})
    }
    
}