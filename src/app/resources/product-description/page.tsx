
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductDescriptionPage() {
  const keyFunctionalities = [
    {
      title: 'Hazard Detection',
      description: 'Sensors monitor the environment and detect dangers using on-device AI.',
    },
    {
      title: 'Instant Alerts',
      description: 'Audible, vibration, or visual warnings notify the wearer of hazards immediately.',
    },
    {
      title: 'Voice-Controlled Flashlight',
      description: 'Hands-free activation of the LED flashlight via simple voice commands.',
    },
    {
      title: 'Comfortable Fit',
      description: 'Adjustable straps and padding ensure secure, all-day comfort.',
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-secondary border-border/60">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-white">Full Product Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-muted-foreground">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Image
                  src="https://picsum.photos/seed/hardhat-iso/600/400"
                  alt="Smart Hardhat Isometric View"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                  data-ai-hint="isometric hardhat"
                />
                <Image
                  src="https://picsum.photos/seed/hardhat-ortho/600/400"
                  alt="Smart Hardhat Orthographic View"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                  data-ai-hint="side profile hardhat"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Description</h3>
                <p className="text-lg">
                  The Smart Hardhat is designed to provide real-time safety monitoring and hands-free assistance to workers in hazardous environments, all without relying on internet connectivity. It integrates advanced sensors, AI-powered hazard detection, and voice-activated controls to enhance protection and convenience.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Video Link</h3>
                <Link
                  href="https://youtu.be/Cx03spcHtUk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://youtu.be/Cx03spcHtUk
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Key Functionalities</h3>
                <ul className="space-y-4">
                  {keyFunctionalities.map((item) => (
                    <li key={item.title}>
                      <p className="font-bold text-white/90">
                        {item.title}:{' '}
                        <span className="font-normal text-muted-foreground">{item.description}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
