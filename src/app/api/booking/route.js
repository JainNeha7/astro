import {connect} from "@/dbConfig/dbConfig";
import AppointementSchema from "@/models/AppointementSchema";
import {  NextResponse } from "next/server";

connect();
export async function POST(Request){
    try{
        const reqApp= await Request.json();
        const {Service,category,price,name, email, phone, date}= reqApp;
        console.log(reqApp);

        const newAppoi= new AppointementSchema({
            Service,
            category,
            price,
            name,
            email,
            phone,
            date
        })

        const savedAppoin= await newAppoi.save();
        console.log(savedAppoin);
        
        return NextResponse.json({
            message:"Form submitted",
            success: true,
            savedAppoin
        },{status: 200})
    }catch(err){
        
        return NextResponse.json({err: err.message}, {status: 400})
    }
}