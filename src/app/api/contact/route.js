import {connect} from "@/dbConfig/dbConfig";
import contactSchema from "@/models/contactSchema";
import {  NextResponse } from "next/server";

connect();
export async function POST(Request){
    try{
        const reqBody= await Request.json();
        const {name, email, message}= reqBody;
      

        const newForm= new contactSchema({
            name,
            email,
            message
        })
        const savedContact= await newForm.save();
        console.log(savedContact);
        return NextResponse.json({
            message:"Form submitted",
            success: true,
            savedContact
        })
    }catch(error){
        return NextResponse.json({error: error.message}, {status: 500})
    }
}