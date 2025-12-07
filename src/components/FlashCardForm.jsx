import { X } from "lucide-react"
import "../styles/FlashCardForm.css"

function FlashCardForm({ showModal = true, onClose }) {
  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <form
            className="flashcard-form"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <button
              className="close-btn"
              type="button"
              aria-label="Close"
              onClick={() => onClose && onClose()}
            >
              <X size={16} />
            </button>

            <label htmlFor="question">Question</label>
            <input id="question" type="text" name="question" />

            <label htmlFor="answer">Answer</label>
            <input id="answer" type="text" name="answer" />

            <button type="submit">Add Flashcard</button>
          </form>
        </div>
      )}
    </>
  )
}

export default FlashCardForm