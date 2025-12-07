import { useState } from "react";
import "./App.css";
import FlashCardForm from "./components/FlashCardForm";
import FlashCard from "./components/FlashCard";
import { Plus } from "lucide-react";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [cards, setCards] = useState([]);
  function handleAddFlashcard(card) {
    setCards([...cards, card]);
  }

  function deleteFlashcard(id) {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  }

  function changeAddModal() {
    setShowAddModal(!showAddModal);
  }

  return (
    <>
      <nav>
        <h1 className="nav-title">Flashcard App</h1>
        <button onClick={changeAddModal} id="add-button">
          <Plus />
        </button>
      </nav>
      <div>
        <FlashCardForm
          onAddFlashcard={handleAddFlashcard}
          showAddModal={showAddModal}
          onClose={changeAddModal}
        />

        <div className="flashcard-container">
          {cards.map((card) => {
            return (
              <FlashCard
                key={card.id}
                id={card.id}
                question={card.question}
                answer={card.answer}
                onDelete={deleteFlashcard}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
