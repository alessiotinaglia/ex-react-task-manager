import { createPortal } from "react-dom";
import '../App.css';

function Modal({ title, content, show, onClose, onConfirm, confirmText = "Conferma" }) {
    if (!show) return null;

    return createPortal(
        <div className="modal-backdrop">
            <div className="modal-box">
                <h2 className="modal-title">{title}</h2>
                <div className="modal-content">{content}</div>
                <div className="modal-buttons">
                    <button className="btn cancel" onClick={onClose}>Annulla</button>
                    <button className="btn confirm" onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default Modal;
