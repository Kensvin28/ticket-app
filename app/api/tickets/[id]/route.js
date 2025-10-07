import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    console.log(req, params)
    try {
        const { id } = params
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({ message: "Ticket deleted successfully" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = params
        const body = await req.json();
        await Ticket.findByIdAndUpdate(id, body);
        return NextResponse.json({ message: "Ticket updated successfully" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}


export async function GET({ params }) {
    try {
        const { id } = params
        const foundTicket = await Ticket.findOne({_id : id});
        return NextResponse.json({ ticket: foundTicket }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ ticket: {
            title: "",
            description: "",
            category: "Hardware Problem",
            priority: 1,
            progress: 0,
            status: "Not started",
        }}, {status: 200});
        // NextResponse.json({ error: err.message }, { status: 500 });
    }
}