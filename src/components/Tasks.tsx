"use client";

import { motion } from "framer-motion";
import { Share2, Users, Lightbulb, PenTool } from "lucide-react";

const tasks = [
  {
    icon: Share2,
    title: "Digital Outreach",
    description: "Spearhead social media campaigns and digital promotions within your college networks to drive Techfest awareness.",
  },
  {
    icon: Users,
    title: "Campus Engagement",
    description: "Organize workshops, mini-events, and information desks to encourage maximum student participation from your institute.",
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    description: "Formulate creative strategies and localized content to resonate with the specific crowd at your campus.",
  },
  {
    icon: Lightbulb,
    title: "Feedback & Ideation",
    description: "Act as the core feedback loop for Techfest, pitching new event ideas and improving the regional student experience.",
  }
];

export default function Tasks() {
  return (
    <section id="tasks" className="py-32 relative bg-bg-secondary">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Tasks & <span className="text-gradient">Responsibilities</span>
          </h2>
          <p className="text-text-secondary text-lg">
            As an ambassador, you are the face of Techfest. Your role is dynamic, focusing on community building, marketing, and leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tasks.map((task, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 p-6 glass-panel rounded-2xl hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center border border-accent-blue/30 shadow-[0_0_15px_rgba(0,85,255,0.2)]">
                  <task.icon className="w-6 h-6 text-accent-blue" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">{task.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {task.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
