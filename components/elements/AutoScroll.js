"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function BreakingNews({ 
  label = "UPDATE", 
  messages = [], 
  link = "#", 
  buttonText = "Book Now" 
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      <div className="container-fluid bg-dark text-white border-bottom border-warning border-2 p-0" style={{ zIndex: 1029 }}>
        <div className="container d-flex align-items-center" style={{ height: '50px' }}>
          
          {/* Label Badge */}
          <div className="flex-shrink-0">
            <span className="badge bg-warning text-dark rounded-0 text-uppercase fw-bold py-2 px-3">
              <i className="fas fa-bullhorn me-2"></i> {label}
            </span>
          </div>

          {/* Scrolling Ticker Wrapper */}
          <div className="news-ticker-wrapper w-100 ms-3 position-relative overflow-hidden">
            <div className="news-ticker-content fw-light">
              {/* Loop through messages */}
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <span key={index} className="me-5 d-inline-block">
                    {msg}
                  </span>
                ))
              ) : (
                <span>Welcome to the event!</span>
              )}
            </div>
          </div>

          {/* Action Button (Desktop) */}
          <div className="flex-shrink-0 ms-3 d-none d-md-block">
            <Link href={link} className="btn btn-sm btn-outline-warning rounded-pill px-3">
              {buttonText}
            </Link>
          </div>

          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="btn-close btn-close-white ms-3" 
            aria-label="Close"
          ></button>

        </div>
      </div>

      {/* Scoped CSS for the animation */}
      <style jsx>{`
        .news-ticker-wrapper {
          white-space: nowrap;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        
        .news-ticker-content {
          display: inline-block;
          padding-left: 100%;
          animation: ticker 25s linear infinite;
        }

        /* Pause animation on hover */
        .news-ticker-wrapper:hover .news-ticker-content {
          animation-play-state: paused;
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        /* Add spacing to prevent overlap */
        .news-bar {
          margin-bottom: 0 !important;
        }
      `}</style>
    </>
  );
}