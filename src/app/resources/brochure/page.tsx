import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function BrochurePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-secondary border-border/60 overflow-hidden">
            <CardHeader className="p-0">
              <div className="bg-primary/10 p-6 md:p-8">
                <CardTitle className="text-3xl md:text-4xl font-headline text-white text-center">
                  Smart Hardhat Brochure
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3">
                {/* Panel 1 */}
                <div className="p-6 md:p-8 flex flex-col items-center text-center bg-[#1e3a8a] text-white relative bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px]">
                  <div className="mb-4 w-24 h-24 p-2 rounded-full bg-white/10 flex items-center justify-center">
                      <Image src="https://picsum.photos/seed/logo-dark/100" alt="Madnus Construction Company Logo" width={80} height={80} className="rounded-full" data-ai-hint="logo construction" />
                  </div>
                  <h2 className="text-5xl font-extrabold tracking-wider font-headline text-shadow-lg mb-2">SMART</h2>
                  <h3 className="text-3xl font-semibold tracking-wider font-headline text-shadow-md mb-8">HARDHAT</h3>
                  <p className="mt-auto font-semibold">MADNUS CONSTRUCTION COMPANY</p>
                </div>

                {/* Panel 2 */}
                <div className="p-6 md:p-8 relative bg-background/50">
                   <Image
                    src="https://picsum.photos/seed/hardhat-close/600/800"
                    alt="Smart Hardhat Closeup"
                    fill
                    className="object-cover opacity-20"
                    data-ai-hint="hardhat technology"
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <h2 className="text-2xl font-bold font-headline text-center text-primary mb-6">"NOT JUST HARD BUT SMART"</h2>
                    <p className="text-muted-foreground text-lg">
                      The Smart Hardhat is designed to provide real-time safety monitoring and hands-free assistance to workers in hazardous environments, all without relying on internet connectivity. It integrates advanced sensors, AI-powered hazard detection, and voice-activated controls to enhance protection and convenience.
                    </p>
                  </div>
                </div>

                {/* Panel 3 */}
                <div className="p-6 md:p-8 bg-[#1e3a8a] text-white flex flex-col items-center relative bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px]">
                   <Image
                    src="https://picsum.photos/seed/ai-chip/400"
                    alt="AI Chip"
                    width={200}
                    height={200}
                    className="mb-6 opacity-80"
                    data-ai-hint="AI chip"
                  />
                  <h3 className="text-2xl font-bold font-headline mb-4 border-b-2 border-primary pb-2">BENEFITS</h3>
                  <ul className="space-y-4 text-left text-lg">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">◆</span>
                      <span>Reduces risk of head injuries from falling objects.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">◆</span>
                      <span>Promotes faster incident response through alert signals.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">◆</span>
                      <span>Improves safety compliance and worker confidence.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}