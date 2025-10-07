import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex items-center gap-1 p-1">
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          className={`${index < priority ? "text-red-400" : "text-slate-300"}`}
          icon={faFire}
        />
      ))}
    </div>
  );
};

export default PriorityDisplay;
