import TicketForm from "@/app/(components)/TicketForm"

const getTicketById = async (id) => {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {cache: "no-store"})

    if (!res.ok) {
      throw new Error("Failed to fetch tickets");
    }
    return res.json();
}

const TicketPage = async ({params}) => {
  const EDIT_MODE = params.id === "new" ? false : true
  let updateTicketData = {}

  if (EDIT_MODE) {
    updateTicketData = await getTicketById(params.id)
    updateTicketData = updateTicketData.ticket
  } else {
    updateTicketData = {
      _id: "new",
    }
  }

  return (
    <TicketForm ticket={updateTicketData}/>
  )
}

export default TicketPage