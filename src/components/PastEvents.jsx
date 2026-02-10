import React from 'react';
import { motion } from 'framer-motion';

const PastEvents = () => {
    const events = [
        {
            id: 1,
            title: 'Hackcelerate',
            description: 'A 24-hour hackathon that sparked valid industry solutions, bringing focused problem-solving and practical ideas together within a tight timeframe.',
            image: '/ChatGPT Image Feb 10, 2026, 07_08_26 PM.png',
        },
        {
            id: 2,
            title: 'Techno Rally',
            description: 'The ultimate tech scavenger hunt across campus, blending challenges, exploration, and hands-on learning into a high-energy experience.',
            image: '/technorally.png',
        },
    ];

    return (
        <section id="past-events" className="py-20 bg-background relative scroll-mt-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(110,193,195,0.3)]">
                        Previous Events
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="group glass-card overflow-hidden hover:shadow-[0_0_30px_rgba(110,193,195,0.2)] transition-all duration-500 h-64 relative"
                        >
                            {/* Image Layer - Fades out on hover */}
                            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Layer - Fades in on hover */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-2">
                                    {event.title}
                                </h3>
                                <p className="text-gray-400">
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastEvents;
