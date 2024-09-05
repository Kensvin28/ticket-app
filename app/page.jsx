import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {cache: "no-store"})
    
    if (!res.ok) {
      throw new Error("Failed to fetch tickets");
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
        {uniqueCategories.sort((a, b) => tickets.filter(ticket => ticket.category === b).length - tickets.filter(ticket => ticket.category === a).length).map((category, i) => (
            <div key={i} className="mb-4">
              <h2>{category}</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2 mt-2">
                {tickets.filter((ticket)=> ticket.category === category).map((filteredTicket, index) => (
                  <TicketCard id={index} key={index} ticket={filteredTicket} />
                ))}
              </div>
              {tickets.filter((ticket)=> ticket.category === category).length === 0 && 
                <p className="mt-2">No tickets for this category yet</p>
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
