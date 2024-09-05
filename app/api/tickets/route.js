import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        await Ticket.create(body)
        return NextResponse.json({ message: "Ticket created successfully" }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        const tickets = await Ticket.find();
        return NextResponse.json(tickets);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}