import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            question: "What is IDEATECH?",
            answer: "IDEATECH is an innovative hackathon organized by Developer Student Club SRM IST RMP, bringing together passionate minds to collaborate, learn, and build impactful solutions through technology."
        },
        {
            question: "Who can participate?",
            answer: "IDEATECH is open to all students regardless of their background or experience level. Whether you're a beginner or an experienced developer, designer, or creative thinker, you're welcome to join!"
        },
        {
            question: "What is the registration fee?",
            answer: "Registration details and fees (if any) will be announced on our official channels. Keep checking back for updates!"
        },
        {
            question: "Can I participate individually or do I need a team?",
            answer: "You can participate as an individual or form a team. Team size and composition details will be shared in the event guidelines."
        },
        {
            question: "What are the themes or problem statements?",
            answer: "Problem statements and themes will be announced closer to the event date. Stay tuned to our social media and website for announcements!"
        },
        {
            question: "What resources or tools will be provided?",
            answer: "We'll provide mentorship, technical guidance, and access to various tools and APIs. Details about specific resources will be shared with participants."
        },
        {
            question: "How will judging work?",
            answer: "Projects will be evaluated based on creativity, functionality, implementation quality, and presentation. A panel of expert judges will determine the winners."
        },
        {
            question: "What prizes can I win?",
            answer: "We offer exciting prizes, recognition, and portfolio-building opportunities. Check the Prizes section for detailed information about rewards!"
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-[#0B1414] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Find answers to common questions about IDEATECH
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-4"
                >
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-[#0B1414] to-[#0F1F22] hover:from-[#0F1F22] hover:to-[#0B1414] transition-all duration-300"
                            >
                                <span className="text-left text-white font-semibold text-lg">
                                    {item.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 ml-4"
                                >
                                    <ChevronDown className="w-5 h-5 text-primary" />
                                </motion.div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 py-4 bg-[#0F1F22]/50 border-t border-white/5">
                                    <p className="text-gray-300 text-base leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-400 text-lg">
                        Can't find your answer? <span className="text-primary">Contact us</span> for more information!
                    </p>
                </motion.div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute top-40 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default FAQ;
