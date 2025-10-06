'use client';
import { useState } from 'react'

const Accordion = () => {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <div className="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                    <button
                        className={
                            isActive.key === 1
                                ? "accordion-button"
                                : "accordion-button collapsed"
                        } >
                        Are roller blinds waterproof?
                    </button>
                </h2>
                <div
                    className={
                        isActive.key === 1
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                    } >
                    <div className="accordion-body">
                        <p>
                            Yes, our blinds are made from waterproof and UV-resistant fabrics to
                            handle rain and harsh sunlight.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                    <button
                        className={
                            isActive.key === 2
                                ? "accordion-button"
                                : "accordion-button collapsed"
                        } >
                        Can I get motorized blinds?
                    </button>
                </h2>
                <div
                    className={
                        isActive.key === 2
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                    } >
                    <div className="accordion-body">
                        <p>
                            Absolutely! We offer motorized options that you can control with a
                            remote or smartphone app.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                    <button
                        className={
                            isActive.key === 3
                                ? "accordion-button"
                                : "accordion-button collapsed"
                        }   >
                        How do I clean my roller blinds?
                    </button>
                </h2>
                <div
                    className={
                        isActive.key === 3
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                    }  >
                    <div className="accordion-body">
                        <p>
                            Just wipe them down with a soft cloth and mild soapy water—no special
                            products needed.
                        </p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                    <button
                        className={
                            isActive.key === 4
                                ? "accordion-button"
                                : "accordion-button collapsed"
                        }  >
                        What’s the warranty on your roller blinds?
                    </button>
                </h2>
                <div
                    className={
                        isActive.key === 4
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                    }  >
                    <div className="accordion-body">
                        <p>We provide a 2-year warranty on both materials and installation.</p>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" onClick={() => handleToggle(5)}>
                    <button
                        className={
                            isActive.key === 5
                                ? "accordion-button"
                                : "accordion-button collapsed"
                        } >
                        Can I use roller blinds for indoor spaces?
                    </button>
                </h2>
                <div
                    className={
                        isActive.key === 5
                            ? "accordion-collapse collapse show"
                            : "accordion-collapse collapse"
                    } >
                    <div className="accordion-body">
                        <p>
                            Yes, our roller blinds are also suitable for indoor use, especially
                            for blocking sunlight in rooms facing direct sun.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Accordion;