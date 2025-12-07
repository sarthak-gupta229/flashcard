import { X } from "lucide-react";
import { useRef, useEffect } from "react";
import "../styles/FlashCardForm.css";

function FlashCardForm({ onAddFlashcard, showAddModal, onClose }) {
  const questionRef = useRef(null);
  const answerRef = useRef(null);
  
  function handleSubmit(e) {
    e.preventDefault();

    const question = questionRef.current.value.trim();
    const answer = answerRef.current.value.trim();

    if (!question || !answer) return;

    onAddFlashcard({ question, answer });

    questionRef.current.value = "";
    answerRef.current.value = "";

    onClose();
  }

  useEffect(() => {
    if (showAddModal && questionRef.current) {
      questionRef.current.focus();
    }
  }, [showAddModal]);

  return (
    <>
      {showAddModal && (
        <div className="modal-overlay">
          <form className="flashcard-form" onSubmit={handleSubmit}>
            <button className="close-btn" type="button" onClick={onClose}>
              <X size={26} strokeWidth={2.5} />
            </button>

            <label>Question</label>
            <input ref={questionRef} type="text" name="question" />

            <label>Answer</label>
            <input ref={answerRef} type="text" name="answer" />

            <button type="submit">Add Flashcard</button>
          </form>
        </div>
      )}
    </>
  );
}

export default FlashCardForm;
