"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Gift, FileBadge, Mic, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: FileBadge,
    title: "Official Certificate",
    description: "Receive a verified Certificate of Appreciation from Techfest, IIT Bombay to validate your leadership.",
  },
  {
    icon: Briefcase,
    title: "Internship Opportunities",
    description: "Top ambassadors are fast-tracked for internships and roles at premium tech partner companies.",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Earn branded merchandise, free event passes, tech gadgets, and more based on your milestones.",
  },
  {
    icon: Mic,
    title: "Speaker Sessions",
    description: "Get exclusive access to closed-door networking and sessions with global tech leaders and founders.",
  },
  {
    icon: Award,
    title: "Offer Letter",
    description: "An official offer letter marking your selection as the campus representative for Asia's largest fest.",
  },
  {
    icon: TrendingUp,
    title: "Leadership Growth",
    description: "Gain hands-on experience in marketing, event management, and team building on a national scale.",
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-32 relative bg-bg-primary overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-green/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              What You <span className="text-gradient">Gain</span>
            </h2>
            <p className="text-text-secondary text-lg">
              This is more than a title. The CA program is designed to accelerate your career, build your resume, and reward your hustle with tangible benefits.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 via-transparent to-accent-blue/0 group-hover:from-accent-cyan/10 group-hover:to-accent-blue/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <benefit.icon className="w-10 h-10 text-accent-green mb-6" />
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent-cyan transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
