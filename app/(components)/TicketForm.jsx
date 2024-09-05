"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ticket}) => {
  const router = useRouter();
  const EDIT_MODE = ticket?._id === "new" ? false : true

  let startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not started",
    category: "Hardware Problem",
  };

  if (EDIT_MODE) {
    startingTicketData = ticket
  }

  const [formData, setFormData] = useState(startingTicketData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = {}
    if (EDIT_MODE) {
      res = await fetch(`/api/tickets/${ticket._id}`, {
      method: "PUT",
      "Content Type": "application/json",
      body: JSON.stringify(formData),
    });
  } else {
      res = await fetch("/api/tickets", {
      method: "POST",
      "Content Type": "application/json",
      body: JSON.stringify(formData),
    });
  }

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    router.push("/")
    router.refresh()
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3>{EDIT_MODE && "Edit Ticket" || "Create Ticket"}</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label>Category</label>
        <select
          id="category"
          name="category"
          onChange={handleChange}
          required={true}
          value={formData.category}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
          <option value="Other">Other</option>
        </select>
        <label>Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            value="1"
            onChange={handleChange}
            required={true}
            checked={formData.priority == 1}
          />
          <label htmlFor="priority-1">1</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            value="2"
            onChange={handleChange}
            required={true}
            checked={formData.priority == 2}
          />
          <label htmlFor="priority-2">2</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            value="3"
            onChange={handleChange}
            required={true}
            checked={formData.priority == 3}
          />
          <label htmlFor="priority-3">3</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            value="4"
            onChange={handleChange}
            required={true}
            checked={formData.priority == 4}
          />
          <label htmlFor="priority-4">4</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            value="5"
            onChange={handleChange}
            required={true}
            checked={formData.priority == 5}
          />
          <label htmlFor="priority-5">5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          min="0"
          max="100"
          onChange={handleChange}
          required={true}
          value={formData.progress}
        />
        <label>Status</label>
        <select
          id="status"
          name="status"
          onChange={handleChange}
          required={true}
          value={formData.status}
        >
          <option value="Not started">Not started</option>
          <option value="In progress">In progress</option>
          <option value="Done">Done</option>
        </select>
        <button type="submit" className="btn">
          {EDIT_MODE && "Update Ticket" || "Create Ticket"}
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
