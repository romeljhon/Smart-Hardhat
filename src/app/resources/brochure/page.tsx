import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

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
              {/* ------- EXISTING ROW ------- */}
              <div className="grid md:grid-cols-3">
                {/* Panel 1 */}
                <div className="p-6 md:p-8 flex flex-col items-center text-center bg-[#1e3a8a] text-white relative bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px]">
                  <div className="mb-4 w-24 h-24 p-2 rounded-full bg-white/10 flex items-center justify-center">
                    <Image
                      src="/img/logo.png"
                      alt="Madnus Construction Company Logo"
                      width={80}
                      height={80}
                      className="rounded-full"
                      data-ai-hint="logo construction"
                    />
                  </div>
                  <h2 className="text-5xl font-extrabold tracking-wider font-headline text-shadow-lg mb-2">
                    SMART
                  </h2>
                  <h3 className="text-3xl font-semibold tracking-wider font-headline text-shadow-md mb-8">
                    HARDHAT
                  </h3>
                  <p className="mt-auto font-semibold">MADNUS CONSTRUCTION COMPANY</p>
                </div>

                {/* Panel 2 */}
                <div className="relative p-6 md:p-8 overflow-hidden rounded-lg">
                  {/* Background image */}
                  <Image
                    src="/img/e386f2cb-edf4-4bd4-9f8e-566899e4a867.jpeg"
                    alt="Smart Hardhat Closeup"
                    fill
                    className="object-cover"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full items-center text-center">
                    <h2 className="text-3xl font-extrabold tracking-wide text-white mb-12 ">
                      "NOT JUST HARD BUT SMART"
                    </h2>
                    <p className="text-white/95 text-lg leading-relaxed max-w-prose">
                      The Smart Hardhat is designed to provide real-time safety monitoring and
                      hands-free assistance to workers in hazardous environments, all without
                      relying on internet connectivity. It integrates advanced sensors,
                      AI-powered hazard detection, and voice-activated controls to enhance
                      protection and convenience.
                    </p>
                  </div>
                </div>


                {/* Panel 3 */}
                <div className="p-6 md:p-8 bg-[#1e3a8a] text-white flex flex-col items-center relative bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px]">
                  <Image
                    src="/img/ai.png"
                    alt="AI Chip"
                    width={200}
                    height={200}
                    className="mb-6 opacity-80"
                    data-ai-hint="AI chip"
                  />
                  <h3 className="text-2xl font-bold font-headline mb-4 border-b-2 border-primary pb-2">
                    BENEFITS
                  </h3>
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

              {/* ------- NEW ROW: COPIES THE UPLOADED BROCHURE LAYOUT ------- */}
              <div className="grid md:grid-cols-3">
                {/* Column 1: BUSINESS MODEL */}
                <div className="p-6 md:p-8 bg-white text-[#1e3a8a]">
                  <h2 className="text-3xl font-extrabold tracking-wide text-center mb-6">
                    BUSINESS MODEL
                  </h2>

                  {/* Business model graphic pulled from uploaded PNG (place file in /public) */}
                  <div className="rounded-lg overflow-hidden border border-border/50 bg-white">
                    <Image
                      src="/img/Screenshot_10-9-2025_212951_www.canva.com.jpeg"
                      alt="Business Model, Manual, Maintenance and Solutions Brochure"
                      width={1200}
                      height={850}
                      className="w-full h-auto"
                      priority
                    />
                  </div>

                  <p className="mt-8 text-center text-2xl md:text-3xl font-black tracking-wide italic">
                    “NOT JUST HARD BUT SMART”
                  </p>
                </div>

                {/* Column 2: MANUAL + MAINTENANCE (blue panel) */}
                <div className="p-6 md:p-8 bg-[#16306b] text-white relative">
                  <h2 className="text-3xl font-extrabold tracking-wide text-white mb-4 text-center">
                    MANUAL:
                  </h2>

                  <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed">
                      <li>
                        <span className="font-semibold">Initial Setup:</span> Charge the hardhat’s built-in battery fully using the provided USB charger. Adjust the straps and padding to fit comfortably on your head. Power on the device using the designated button.
                      </li>
                      <li>
                        <span className="font-semibold">Activating the Hardhat:</span> Once powered on, the AI system initializes and begins monitoring sensor data immediately. The face shield can be lowered or raised as needed.
                      </li>
                      <li>
                        <span className="font-semibold">Using the Voice Command Flashlight:</span> To turn on the flashlight, say the activation command (e.g., “Turn on light”). To turn it off, say the deactivation command (e.g., “Turn off light”). The flashlight will respond instantly, allowing you to keep your hands free.
                      </li>
                  </ol>
                  <div className="text-right mt-2">
                    <Link href="/resources/user-manual" className="text-primary hover:underline text-sm">
                      ...see more
                    </Link>
                  </div>

                  <div className="mt-8 border-t border-white/30 pt-6">
                    <h3 className="text-2xl font-bold mb-3">Maintenance:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Recharge the battery after each use.</li>
                      <li>Wipe face shield & helmet with a soft cloth and mild cleaner.</li>
                      <li>Check for cracks, loose parts, and sensor damage.</li>
                      <li>Store cool & dry; avoid direct sunlight and extreme heat.</li>
                      <li>Report damage promptly; avoid use if compromised.</li>
                    </ul>
                  </div>
                </div>

                {/* Column 3: SOLUTIONS */}
                <div className="relative overflow-hidden rounded-lg min-h-[720px]">
                  {/* Background image */}
                  <Image
                    src="/img/447fc889-1481-43e6-8915-f2326d4fcc07.jpeg"
                    alt="Solutions background"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Readability overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 h-full p-6 md:p-8 flex flex-col text-white">


                    {/* Product visuals (stacked cards) */}
                    {/* Polaroid stack – tuned positions to match screenshot */}
                    <div className="absolute inset-0 pointer-events-none mt-25">
                      {/* Top card (far right) */}
                      <div className="absolute top-[0.5rem] right-[0.75rem] md:top-[0.75rem] md:right-[1.25rem] w-[7rem] md:w-[8.5rem] bg-white p-1 rounded shadow-2xl rotate-[1.5deg] z-30">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-yellow-200/90 rotate-[-3deg] rounded-[2px]" />
                        <Image
                          src="/img/447fc889-1481-43e6-8915-f2326d4fcc07.jpeg"
                          alt="Hardhat 1"
                          width={240}
                          height={240}
                          className="w-full h-[6.25rem] md:h-[7.25rem] object-cover rounded"
                        />
                      </div>

                      {/* Middle card (overlaps, slightly left) */}
                      <div className="absolute top-[4.5rem] right-[7.25rem] md:top-[5.5rem] md:right-[9.25rem] w-[8rem] md:w-[9rem] bg-white p-1 rounded shadow-2xl -rotate-[2deg] z-20">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-yellow-200 rotate-[2deg] rounded-[2px]" />
                        <Image
                          src="/img/e386f2cb-edf4-4bd4-9f8e-566899e4a867.jpeg"
                          alt="Hardhat 2"
                          width={260}
                          height={260}
                          className="w-full h-[7rem] md:h-[8rem] object-cover rounded"
                        />
                      </div>

                      {/* Bottom-left card (furthest left) */}
                      <div className="absolute top-[9.25rem] right-[13.5rem] md:top-[11rem] md:right-[17rem] w-[8rem] md:w-[9rem] bg-white p-1 rounded shadow-2xl rotate-[0.5deg] z-10">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-yellow-200/95 rotate-[-2deg] rounded-[2px]" />
                        <Image
                          src="/img/hat1.png"
                          alt="Hardhat 3"
                          width={260}
                          height={260}
                          className="w-full h-[7rem] md:h-[8rem] object-cover rounded"
                        />
                      </div>
                    </div>

                    {/* Solutions text block BELOW images */}
                    <div className="mt-[360px]"> {/* pushes text below image stack */}
                      <h2 className="text-2xl font-extrabold mb-4 font-serif tracking-wide">SOLUTIONS</h2>
                      <p className="text-sm leading-6 text-white/90 mb-6">
                        We offer a durable, practical, and safety-enhancing Smart Hardhat designed to
                        protect workers from head injuries and increase efficiency in construction
                        environments.
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="mt-auto pt-4 border-t border-white/20">
                      <p className="text-[11px] tracking-wide text-center font-semibold text-white/80">
                        FOR MORE INFO, VISIT US OR CALL US: MADNUS COMPANY
                      </p>
                      <div className="mt-3 space-y-2 text-sm">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[#3b82f6]">f</span>
                          <span>MADNUS SMART HARDHAT</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>📞</span><span>0907-335-5052</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>🌐</span><span>MADNUS SMART HARDHAT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              {/* ------- END NEW ROW ------- */}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
