import { Trash2 } from "lucide-react";
import "../styles/FlashCard.css";

function FlashCard(){
    return(
        <div className="flash-box">
            <button className="delete-btn">
                <Trash2 size={18} strokeWidth={2.5}/>
            </button>
            <div className="flashcard">
                <div className="question">
                    <p>Hello</p>
                </div>
                <div className="answer">
                    <p>world</p>
                </div>
            </div>
        </div>
    )
}

export default FlashCard;