import { useEffect, useState } from "react";
import { getCards } from "./api";
import { sortCards } from "./utils/sortData";
import "./App.css";
import Card from "./components/Card/Card";

// Questions:
// 1. Load data from local file (path: “https://ac.aws.citizennet.com/assets/qspreviews/qs_interview_data.json”)
// 2. Use the screenshot as an example, implement a generic function for reading any JSON file in that format, then display the top 12 brands based on audience_size. We always want to have 4 items in one row.
// 3. Add a hover state with a dark, semi-transparent overlay and display the ID of the hovered brand.

function App() {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getCards();
      setCards(sortCards(response.data));
    })();
  }, []);

  return (
    <div className="App">
      <ul className="card-container">
        {cards &&
          cards.map((card) => {
            return <Card key={card.source_items.id} card={card} />;
          })}
      </ul>
    </div>
  );
}

export default App;
