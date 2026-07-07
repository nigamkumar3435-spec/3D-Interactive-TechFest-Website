import { create } from 'zustand';

interface AppState {
  currentSection: number;
  setCurrentSection: (section: number) => void;
  isAudioMuted: boolean;
  toggleAudio: () => void;
  easterEggActive: boolean;
  setEasterEggActive: (active: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentSection: 0,
  setCurrentSection: (section) => set({ currentSection: section }),
  isAudioMuted: true, // Start muted as per best practices
  toggleAudio: () => set((state) => ({ isAudioMuted: !state.isAudioMuted })),
  easterEggActive: false,
  setEasterEggActive: (active) => set({ easterEggActive: active }),
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
