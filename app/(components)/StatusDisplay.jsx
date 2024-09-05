const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    switch (status) {
      case "Not started":
        return "bg-red-200";
      case "In progress":
        return "bg-yellow-200";
      case "Done":
        return "bg-green-200";
      default:
        return "bg-slate-700";
    }
  }
  return (
    <span
      className={
        `inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`
      }
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
