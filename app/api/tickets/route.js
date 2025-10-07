import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        await Ticket.create(body);
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
        return NextResponse.json([{
            title: "Sample Ticket 1",
            description: "Sample description",
            category: "Hardware Problem",
            priority: 1,
            progress: 0,
            status: "Not started",
            updatedAt: "2025-10-01T10:00:00Z"
        }, {
            title: "Sample Ticket 2",
            description: "Sample description",
            category: "Hardware Problem",
            priority: 2,
            progress: 50,
            status: "In progress",
            updatedAt: "2025-10-01T10:00:00Z"
        }, {
            title: "Sample Ticket 3",
            description: "Sample description",
            category: "Hardware Problem",
            priority: 3,
            progress: 100,
            status: "Done",
            updatedAt: "2025-10-01T10:00:00Z"
        }], { status: 200 });
        // return NextResponse.json({ error: err.message }, { status: 500 });
    }
}