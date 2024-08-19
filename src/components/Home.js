import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Card from "./Card";
import Footer from "./Footer";
import AddCard from "./AddCard";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/cards")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched cards:", data); // Log data
        setCards(data);
        setFilteredCards(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setFilteredCards(
      cards.filter((card) =>
        card.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Header />

      <div className="container">
        <h1>How can we help?</h1>

        <SearchBar query={searchQuery} onSearch={handleSearch} />

        <div className="card-container">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
              />
            ))
          ) : (
            <p>No cards found.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
