import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Zap, Gift, Briefcase, FileText, Coffee } from 'lucide-react';

const Perks = () => {
    const perks = [
        {
            type: 'PERK',
            title: 'NETWORKING',
            subtitle: 'Connect',
            desc: 'Meet like-minded innovators.',
            accent: 'border-primary',
            text: 'text-primary',
            bg: 'bg-primary/5',
            icon: <Users className="text-primary" size={32} />
        },
        {
            type: 'PERK',
            title: 'RECOGNITION',
            subtitle: 'Showcase',
            desc: 'Platform to show your skills.',
            accent: 'border-cyan-400',
            text: 'text-cyan-400',
            bg: 'bg-cyan-400/5',
            icon: <Star className="text-cyan-400" size={32} />
        },
        {
            type: 'PERK',
            title: 'SKILL BOOST',
            subtitle: 'Learn',
            desc: 'Enhance problem-solving.',
            accent: 'border-purple-400',
            text: 'text-purple-400',
            bg: 'bg-purple-400/5',
            icon: <Zap className="text-purple-400" size={32} />
        },
        {
            type: 'PERK',
            title: 'FUN & GAMES',
            subtitle: 'Enjoy',
            desc: 'A memorable experience.',
            accent: 'border-pink-400',
            text: 'text-pink-400',
            bg: 'bg-pink-400/5',
            icon: <Gift className="text-pink-400" size={32} />
        },
        {
            type: 'PERK',
            title: 'CERTIFICATE',
            subtitle: 'Proof',
            desc: 'Official participation certs.',
            accent: 'border-blue-400',
            text: 'text-blue-400',
            bg: 'bg-blue-400/5',
            icon: <FileText className="text-blue-400" size={32} />
        },
    ];

    return (
        <section id="perks" className="py-20 bg-[#0B1414] relative overflow-hidden">
            {/* Background Glows - Different positions for variety */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-2">
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Participate?</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {perks.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-[#111] border border-white/5 p-1 rounded-xl relative group hover:border-white/20 transition-all duration-300 w-full max-w-md"
                        >
                            <div className="bg-[#0B1414]/90 p-5 rounded-lg h-full flex flex-col justify-between min-h-[200px] relative overflow-hidden">
                                {/* Top Decoration */}
                                <div className={`absolute top-0 left-0 w-2 h-full ${card.accent} border-l-2 opacity-50`}></div>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/10 to-transparent"></div>

                                <div>
                                    <div className={`inline-block px-2 py-1 mb-3 border ${card.accent} border-opacity-30 rounded text-[10px] font-mono tracking-widest uppercase ${card.text} ${card.bg}`}>
                                        {card.type}
                                    </div>
                                    <h3 className="text-2xl font-orbitron font-bold text-white mb-1 uppercase leading-tight truncate">{card.title}</h3>
                                </div>

                                <div className="mt-6 border-t border-white/10 pt-3 flex items-end justify-between">
                                    <div>
                                        <h4 className={`text-base font-bold ${card.text}`}>{card.subtitle}</h4>
                                        <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-wider">{card.desc}</p>
                                    </div>
                                    <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform">
                                        {card.icon}
                                    </div>
                                </div>

                                {/* Corner Hover Accent */}
                                <div className={`absolute bottom-0 right-0 w-6 h-6 ${card.accent} border-b-2 border-r-2 rounded-br-lg opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Perks;
