"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  { step: "01", title: "Applications Open", desc: "Register online via the portal." },
  { step: "02", title: "Selection", desc: "Interviews & profile shortlisting." },
  { step: "03", title: "Training", desc: "Onboarding and task allocation." },
  { step: "04", title: "Active Period", desc: "Executing campaigns on campus." },
  { step: "05", title: "Rewards", desc: "Performance tracking & recognition." },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 relative bg-bg-primary">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Program <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Glowing track */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 hidden md:block">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-accent-cyan to-accent-blue shadow-[0_0_15px_rgba(0,240,255,0.8)]"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
            {timelineEvents.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-12 h-12 rounded-full bg-bg-primary border-2 border-accent-cyan flex items-center justify-center text-accent-cyan font-bold mb-6 shadow-[0_0_20px_rgba(0,240,255,0.3)] z-10">
                  {item.step}
                </div>
                <div className="glass-panel p-4 rounded-xl max-w-[150px] w-full">
                  <h4 className="font-bold text-white mb-2 text-sm">{item.title}</h4>
                  <p className="text-xs text-text-secondary">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
