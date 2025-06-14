import React from 'react';
import styles_modal from './Modal.module.css';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles_modal.backdrop} onClick={onClose}>
            <div className={styles_modal.modal} onClick={e => e.stopPropagation()}>
                <button className={styles_modal.closeButton} onClick={onClose}>
                    <X size={24} />
                </button>
                <div className={styles_modal.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Modal;

