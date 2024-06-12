"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
    { image: 'https://images.unsplash.com/photo-1503314885798-a70f8f9028d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWF0cmltb25pb3xlbnwwfHwwfHx8MA%3D%3D', text: 'Mejor son dos que uno, porque tienen mejor paga por su trabajo.' },
    { image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0cmltb25pb3xlbnwwfHwwfHx8MA%3D%3D', text: 'Porque si caen, el uno levantará a su compañero, pero, jay del que está solo!, porque cuando caiga no habrá otro que lo levante' },
    { image: 'https://images.unsplash.com/photo-1519657814741-5781d2018f70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hdHJpbW9uaW98ZW58MHx8MHx8fDA%3D', text: 'También si dos duermen juntos, se alentarán mutuamente; pero, ¿cómo se calentará uno solo?'},
    { image: 'https://images.unsplash.com/photo-1550713450-94c9b4fc9f25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hdHJpbW9uaW98ZW58MHx8MHx8fDA%3D', text: 'Y si alguno prevalece contra el que está solo, dos estarán contra él, pues cordón de tres dobleces no se rompe pronto.'},
];

const Quote = () => {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(1); 

    const handleNextPage = () => {
        if (page < quotes.length - 1) {
            setDirection(1);
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            setDirection(-1);
            setPage(page - 1);
        }
    };

    return (
        <div className="book-container">
            <div className="book">
                <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.div
                        key={`page-left-${page}`}
                        className="book-page-left"
                        initial={{ rotateY: direction === 1 ? 0 : -180 }}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: direction === 1 ? 180 : 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={quotes[page].image}
                            alt="quote"
                            className="h-full w-full object-cover rounded-lg"
                        />
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.div
                        key={`page-right-${page}`}
                        className="book-page-right"
                        initial={{ rotateY: direction === 1 ? 180 : 0 }}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: direction === 1 ? 0 : -180 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-black text-center text-lg">{quotes[page].text}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="controls">
                <button
                    onClick={handlePreviousPage}
                    className="px-3 py-1 bg-[#7A9285] rounded-md hover:bg-[#4D665E] focus:outline-none"
                >
                    Anterior
                </button>
                <button
                    onClick={handleNextPage}
                    className="px-3 py-1 bg-[#7A9285] rounded-md hover:bg-[#4D665E] focus:outline-none"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default Quote;
