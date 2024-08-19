import React, { useState } from "react";
import "../App.css";

function AddCard() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cardData = { id, title, description };

    try {
      const response = await fetch("http://localhost:5000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData),
      });

      if (response.ok) {
        alert("Card added successfully!");

        setId("");
        setTitle("");
        setDescription("");
      } else {
        alert("Failed to add card");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the card");
    }
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ margin: 20 }}
        />
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn" type="submit" style={{ marginLeft: 15 }}>
          Add Card
        </button>
      </form>
    </div>
  );
}

export default AddCard;
