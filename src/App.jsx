import "./App.css";
import { Plus } from "lucide-react";
import { useState } from "react";
import FlashCardForm from "./components/FlashCardForm";
import FlashCard from "./components/FlashCard";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);

  function toggleModal() {
    setShowAddModal((prev) => !prev);
  }

  return (
    <>
      <nav>
        <h1 className="nav-title">Flashcard App</h1>
        <button
          id="add-button"
          onClick={toggleModal}
          aria-label="Add flashcard"
          type="button"
        >
          <Plus />
        </button>
      </nav>

      <FlashCardForm
        showModal={showAddModal}
        onClose={() => setShowAddModal(false)}
      />

      <main>
        <div className="flashcard-container">
          <FlashCard />
        </div>
      </main>
    </>
  );
}

export default App;