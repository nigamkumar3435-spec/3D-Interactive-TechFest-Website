"use client";

import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-primary pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-heading font-bold mb-4 tracking-wider">
              TECHFEST, <span className="text-accent-cyan">IIT BOMBAY</span>
            </h2>
            <p className="text-text-secondary max-w-md mb-6">
              Asia's Largest Science & Technology Festival. Represent. Build. Belong.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-accent-cyan/20 hover:text-accent-cyan transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-accent-cyan/20 hover:text-accent-cyan transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-accent-cyan/20 hover:text-accent-cyan transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li><a href="#about" className="hover:text-accent-cyan transition-colors">About Program</a></li>
              <li><a href="#benefits" className="hover:text-accent-cyan transition-colors">Benefits</a></li>
              <li><a href="#tasks" className="hover:text-accent-cyan transition-colors">Tasks</a></li>
              <li><a href="#timeline" className="hover:text-accent-cyan transition-colors">Timeline</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li><a href="mailto:info@techfest.org" className="hover:text-accent-cyan transition-colors">info@techfest.org</a></li>
              <li><a href="https://techfest.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-cyan transition-colors">
                <Globe className="w-4 h-4" /> Main Website
              </a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <p>© {new Date().getFullYear()} Techfest, IIT Bombay. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
