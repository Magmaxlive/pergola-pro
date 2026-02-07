import { useEffect, useState } from "react";
import ContactMain from "@/components/contact/main";

const PopupModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="popup-modal-overlay">
            <div className="popup-modal-content">
                <button className="popup-close-btn" onClick={onClose}>
                    ×
                </button>

                <div className="popup-row">
                    {/* <div className="popup-image-col">
                        <div className="popup-image-container">
                            <img 
                                src="/assets/img/popup/2.png" 
                                alt="Pergola Special Offer" 
                                className="popup-image" 
                            />
                        </div>
                    </div> */}

                    <div className="popup-form-col">
                        <div className="popup-form-container">
                            <div className="popup-contact-wrapper">
                                <ContactMain />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .popup-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .popup-modal-content {
          background: white;
          border-radius: 12px;
          max-width: 1000px;
          width: 100%;
          height: 80vh;
          max-height: 700px;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          animation: popup-appear 0.3s ease-out;
          display: flex;
          overflow: hidden;
        }

        @keyframes popup-appear {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .popup-close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: white;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .popup-close-btn:hover {
          background: #f5f5f5;
          color: #333;
          transform: scale(1.1);
        }

        .popup-row {
          display: flex;
          width: 100%;
          height: 100%;
        }

        .popup-image-col {
          flex: 0 0 50%; /* Fixed width for image column */
          display: flex;
          height: 100%;
          background: #f5f5f5; /* Fallback background */
        }

        .popup-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 20px;
        }

        .popup-image {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Changed from cover to contain */
          object-position: center;
          display: block;
        }

        .popup-form-col {
          flex: 1; /* Takes remaining space */
          display: flex;
          flex-direction: column;
          height: 100%;
          min-width: 0; /* Prevents flex item overflow */
        }

        .popup-form-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }

        .popup-contact-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          padding: 40px 30px 30px 30px;
        }

        /* Ensure ContactMain fills available space */
        .popup-contact-wrapper > :global(*) {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        /* Form container inside ContactMain */
        .popup-contact-wrapper > :global(*) > :global(*) {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          padding-right: 10px;
        }

        /* Custom scrollbar styling */
        .popup-contact-wrapper > :global(*) > :global(*)::-webkit-scrollbar {
          width: 6px;
        }

        .popup-contact-wrapper > :global(*) > :global(*)::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
          margin: 5px 0;
        }

        .popup-contact-wrapper > :global(*) > :global(*)::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        .popup-contact-wrapper > :global(*) > :global(*)::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* For Firefox */
        .popup-contact-wrapper > :global(*) > :global(*) {
          scrollbar-width: thin;
          scrollbar-color: #c1c1c1 #f1f1f1;
        }

        /* Medium screens adjustment */
        @media (max-width: 900px) {
          .popup-modal-content {
            max-width: 95vw;
            height: 85vh;
          }
          
          .popup-image-col {
            flex: 0 0 45%; /* Slightly smaller on medium screens */
          }
          
          .popup-image-container {
            padding: 15px;
          }
          
          .popup-contact-wrapper {
            padding: 30px 25px 25px 25px;
          }
        }

        @media (max-width: 768px) {
          .popup-modal-overlay {
            padding: 10px;
          }

          .popup-modal-content {
            flex-direction: column;
            height: 90vh;
            max-height: none;
            width: 95vw;
            max-width: 500px;
          }

          .popup-row {
            flex-direction: column;
            height: 100%;
          }

          .popup-image-col {
            flex: 0 0 35%;
            width: 100%;
            min-height: 200px;
          }

          .popup-image {
            object-fit: cover; /* Back to cover on mobile */
          }

          .popup-form-col {
            flex: 1;
            min-height: 300px;
          }

          .popup-contact-wrapper {
            padding: 25px 20px;
          }

          .popup-close-btn {
            top: 10px;
            right: 10px;
            width: 30px;
            height: 30px;
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .popup-modal-content {
            width: 100%;
            margin: 0;
            height: 100vh;
            border-radius: 0;
          }

          .popup-modal-overlay {
            padding: 0;
          }

          .popup-image-col {
            flex: 0 0 30%;
            min-height: 180px;
          }

          .popup-contact-wrapper {
            padding: 20px 15px;
          }
        }

        /* For very tall screens */
        @media (max-height: 600px) and (min-width: 769px) {
          .popup-modal-content {
            height: 90vh;
            max-height: none;
          }
          
          .popup-image-col {
            flex: 0 0 40%;
          }
        }

        /* Debug borders - remove in production */
        /* .popup-modal-content { border: 2px solid red; }
        .popup-image-col { border: 2px solid orange; }
        .popup-form-col { border: 2px solid blue; }
        .popup-contact-wrapper { border: 2px solid green; } */
      `}</style>
        </div>
    );
};

export default PopupModal;
