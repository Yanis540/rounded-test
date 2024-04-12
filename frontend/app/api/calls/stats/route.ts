import { ErrorType } from "@/types";
import { callsValidator } from "@/types/validator";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { db } from "@/lib/db";
import { calculateAgentStatistics } from "@/lib/stats";


export async function POST(req:NextRequest){
    try{
        const body = await req.json()
        console.log(body)
        const  {to}= callsValidator.parse(body)
        const calls = db.getCallsByTo(to)
        const stats = calculateAgentStatistics(calls!)
        console.log(stats)
        return NextResponse.json({stats})
    }
    catch(e:any){
        // console.log(e)
        if(e instanceof ZodError){
            return NextResponse.json({message:"Error validation input",code:ErrorType.INVALID_INPUT},{status:403})
        }
        return NextResponse.json({message:"Internal Error Server",code:ErrorType.INTERNAL_SERVER_ERROR},{status:500})
    }
}