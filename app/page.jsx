export const dynamic = "force-dynamic";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tickets`, { cache: "no-store" })

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  } catch (err) {
    console.log("Failed to get tickets", err);
  }
};

const Dashboard = async () => {
  const tickets = await getTickets();
  const uniqueCategories = [
    ...new Set(["Hardware Problem", "Software Problem", "Project", "Other"]),
  ];
  return (
    <div className="p-5">
      <div>
        {uniqueCategories
          .map((category, i) => {
            const filteredTickets = tickets?.filter(ticket => ticket.category === category);
            return (
              <div key={i} className={"mb-6 grid gap-2"}>
                <h2>{category}</h2>
                {filteredTickets.length ? (
                  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2 mt-2">
                    {filteredTickets.map((filteredTicket, index) => (
                      <TicketCard id={index} key={index} ticket={filteredTicket} />
                    ))}
                  </div>
                ) : (
                  <p>No tickets for this category yet</p>
                )}
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Dashboard;
