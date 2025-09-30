import TicketForm from "@/app/(components)/TicketForm"

const getTicketById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tickets/${id}`, {cache: "no-store"})

    if (!res.ok) {
      throw new Error(res.statusText);
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