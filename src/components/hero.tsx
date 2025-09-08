'use client';

import Image from 'next/image';
import { SmartAIHardhatLogo } from '@/components/smart-ai-hardhat-logo';

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/construction-bg/1920/1080"
          alt="Construction background"
          fill
          className="object-cover"
          data-ai-hint="construction site background"
        />
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>
      
      <div className="absolute inset-0 bg-primary/90 clip-path-hero-right"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-white">
            <h2 className="text-2xl font-bold tracking-[0.2em] uppercase relative pl-16">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-12 bg-primary"></span>
              Madnus Construction Company
            </h2>
            <p className="text-xl text-primary font-bold tracking-widest">BUILDING THE FUTURE:</p>
            <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter">
              SMART HARDHAT
            </h1>
          </div>

          <div className="relative flex justify-center items-center h-full">
            <div className="absolute top-0 right-0 -mt-16 -mr-16">
              <Image 
                src="/r.png" 
                alt="Smart AI Hardhat Logo" 
                width={192} 
                height={192}
                className="w-48 h-48"
              />
            </div>  

            <div className="relative w-full aspect-[4/3] mt-24">
               <div className="absolute -bottom-8 -right-8 w-[70%] h-[70%]">
                 <div className="relative w-full h-full transform -rotate-15">
                    <Image
                      src="https://picsum.photos/seed/workers-group/600/450"
                      alt="Construction workers group"
                      fill
                      className="object-cover rounded-3xl shadow-2xl"
                      data-ai-hint="construction workers group"
                    />
                 </div>
              </div>
              <div className="absolute -top-8 -left-8 w-[60%] h-[60%]">
                 <div className="relative w-full h-full transform rotate-15">
                    <Image
                      src="https://picsum.photos/seed/worker-rebar/600/450"
                      alt="Construction worker with rebar"
                      fill
                      className="object-cover rounded-3xl shadow-2xl"
                      data-ai-hint="construction worker rebar"
                    />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .clip-path-hero-right {
          clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);
        }
      `}</style>
    </section>
  );
}
