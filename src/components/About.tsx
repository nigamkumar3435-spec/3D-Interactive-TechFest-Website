"use client";

import { motion } from "framer-motion";
import { Users, Globe, Rocket, Shield } from "lucide-react";

const aboutCards = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Represent the most massive technological movement in Asia across 2500+ colleges.",
  },
  {
    icon: Shield,
    title: "Official Backing",
    description: "Backed by IIT Bombay, one of the world's most prestigious engineering institutes.",
  },
  {
    icon: Users,
    title: "Network Expansion",
    description: "Connect with 180,000+ participants, industry leaders, and tech enthusiasts.",
  },
  {
    icon: Rocket,
    title: "Career Launchpad",
    description: "Build leadership skills that top-tier companies actively recruit for.",
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-bg-secondary">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About the <span className="text-gradient">Program</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            The College Ambassador program is a dynamic initiative by Techfest, IIT Bombay to build a sprawling network of student leaders. You act as the bridge between your campus and the technological universe of IIT Bombay.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] border border-white/5 hover:border-accent-cyan/30"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
