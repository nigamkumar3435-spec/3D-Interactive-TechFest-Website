import SceneContext from '@/components/3D/SceneContext';
import AICore from '@/components/3D/scenes/AICore';
import ResearchLab from '@/components/3D/scenes/ResearchLab';
import InnovationCity from '@/components/3D/scenes/InnovationCity';
import CoreReactor from '@/components/3D/scenes/CoreReactor';
import AndroidGallery from '@/components/3D/scenes/AndroidGallery';
import DataVault from '@/components/3D/scenes/DataVault';
import NeuralNetwork from '@/components/3D/scenes/NeuralNetwork';
import HUD from '@/components/UI/HUD';
import AudioManager from '@/components/Audio/AudioManager';
import ScrollManager from '@/components/3D/ScrollManager';
import OverlayContent from '@/components/UI/OverlayContent';
import EasterEggs from '@/components/UI/EasterEggs';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white selection:bg-red-500/30">
      <AudioManager />
      <HUD />
      <EasterEggs />
      
      {/* 3D Environment */}
      <SceneContext>
        <ScrollManager />
        <AICore />
        <ResearchLab />
        <InnovationCity />
        <CoreReactor />
        <AndroidGallery />
        <DataVault />
        <NeuralNetwork />
        {/* Loop back to start for the final section */}
        <AICore position={[0, 0, -140]} />
      </SceneContext>

      {/* HTML Overlay for text synced with sections */}
      <OverlayContent />
    </main>
  );
}
