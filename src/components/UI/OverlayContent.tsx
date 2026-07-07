'use client';

import { useAppStore } from '@/store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function OverlayContent() {
  const currentSection = useAppStore((state) => state.currentSection);

  const sections = [
    {
      id: 0,
      title: "COLLEGE AMBASSADOR",
      subtitle: "A Premier Internship Opportunity by IIT Bombay.",
      buttons: [
        { label: "Register Now", link: "https://ca.techfest.org/register" },
        { label: "Learn More", link: "#about" },
        { label: "Log In", link: "https://ca.techfest.org/login" }
      ]
    },
    {
      id: 1,
      title: "THE MISSION",
      subtitle: "Represent your college on a global stage.",
      text: "Build Interpersonal Skills | Expand Network | Explore Technology"
    },
    {
      id: 2,
      title: "YOUR MISSION DIRECTIVES",
      subtitle: "What it takes to be a CA.",
      text: "Promote Events | Conduct Workshops | Refer Students | Organize Zonals"
    },
    {
      id: 3,
      title: "INCENTIVES & REWARDS",
      subtitle: "Unlock exclusive benefits.",
      text: "IIT Bombay Certificates | Techfest Offer Letters | Top Internships"
    },
    {
      id: 4,
      title: "EXCLUSIVE ACCESS",
      subtitle: "Experience the ultimate fest.",
      text: "Mood Indigo Concert Passes | ProShows | Free Merchandise | VIP Speaker Sessions"
    },
    {
      id: 5,
      title: "DATA VAULT",
      subtitle: "Our Past Sponsors & Partners.",
      text: "Google | Microsoft | Amazon | IBM | Intel"
    },
    {
      id: 6,
      title: "NEURAL NETWORK",
      subtitle: "Join the largest network of students.",
      text: "2500+ Colleges | 10,000+ Ambassadors | Global Reach"
    },
    {
      id: 7,
      title: "INITIALIZE REGISTRATION",
      subtitle: "Your journey starts here.",
      buttons: [
        { label: "Begin Registration", link: "https://ca.techfest.org/register" },
        { label: "View Leaderboard", link: "https://ca.techfest.org/leaderboard" }
      ]
    }
  ];

  const content = sections.find(s => s.id === currentSection) || sections[0];

  return (
    <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center p-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={content.id}
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-center pointer-events-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {content.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide uppercase">
            {content.subtitle}
          </p>
          
          {content.text && (
            <p className="text-sm text-gray-500 tracking-widest uppercase mb-8">
              {content.text}
            </p>
          )}

          {content.buttons && (
            <div className="flex gap-6 justify-center">
              {content.buttons.map((btn, i) => (
                <a 
                  key={btn.label}
                  href={btn.link}
                  target={btn.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`px-8 py-3 uppercase tracking-widest text-sm font-semibold transition-all duration-300 border block ${
                    i === 0 
                      ? 'bg-[#ff0000] border-[#ff0000] text-black hover:bg-white hover:border-white shadow-[0_0_20px_rgba(255,0,0,0.5)]' 
                      : 'bg-transparent border-gray-700 hover:border-white hover:bg-white/5'
                  }`}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
