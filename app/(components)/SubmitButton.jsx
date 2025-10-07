import React, { useState } from "react";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubmitButton = ({
    isLoading = false,
    children = "Submit",
    loadingText = "Submitting...",
    className = "",
    disabled = false
}) => {
    return (
        <button
            type="submit"
            disabled={isLoading || disabled}
            className={`
        px-6 py-2.5 rounded-lg font-medium
        bg-blue-600 hover:bg-blue-700 
        text-white
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        flex items-center justify-center gap-2 w-full
        ${className}
      `}
        >
            {isLoading && <FontAwesomeIcon icon={faSpinner} className="icon fa-spin" />}
            <span>{isLoading ? loadingText : children}</span>
        </button>
    );
};

export default SubmitButton;
