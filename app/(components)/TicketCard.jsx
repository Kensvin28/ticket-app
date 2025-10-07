import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";

const formatTimestamp = (timestamp) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("id-ID", options);

  return formattedDate;
};

const TicketCard = ({ ticket }) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-lg shadow-md hover:shadow-lg transition-all p-5">
      <Link href={`/ticket-page/${ticket._id}`} passHref>
        <div className="flex items-center justify-between mb-3">
          <PriorityDisplay priority={ticket.priority} />
          <DeleteBlock id={ticket._id} />
        </div>

        <h4 className="text-lg font-semibold mb-2 line-clamp-2">{ticket.title}</h4>
        <hr className="border-gray-200 mb-2"></hr>
        <p className="text-sm whitespace-pre-wrap line-clamp-3 mb-3 flex-grow">{ticket.description}</p>

        <div className="mt-auto space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span>Progress</span>
              <span className="font-medium">{ticket.progress}%</span>
            </div>
            <ProgressBar progress={ticket.progress} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs">
              {formatTimestamp(ticket.updatedAt)}
            </span>
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
