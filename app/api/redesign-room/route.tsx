import { NextResponse } from "next/server";

export async function POST(req:any){
    return NextResponse.json({result:'Hello'})
}