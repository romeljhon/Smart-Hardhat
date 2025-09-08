'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="relative bg-background py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-white uppercase tracking-wider">
                  Conclusion & Call <br />
                  to Action
                </h1>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <h2 className="text-lg font-bold text-primary tracking-widest">
                      THE CONSTRUCTION INDUSTRY IS EVOLVING
                    </h2>
                  </div>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    at ipsum vitae lacus lobortis lacinia. Donec tristique arcu
                    massa, at
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] md:min-h-0">
                <div className="absolute inset-0 bg-primary clip-path-diagonal"></div>
                <Image
                  src="https://picsum.photos/seed/construction-worker/800/600"
                  alt="Construction Worker"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl relative clip-path-diagonal"
                  data-ai-hint="construction worker"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .clip-path-diagonal {
          clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
      <Footer />
    </div>
  );
}
