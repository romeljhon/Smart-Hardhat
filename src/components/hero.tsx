import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-white uppercase tracking-wider">
              Work Smarter, <br />
              <span className="text-primary">Not Harder.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              The Future of Jobsite Safety is Here. The Smart Hardhat is a revolutionary piece of personal protective equipment designed for the modern construction and industrial workforce.
            </p>
            <Button size="lg">Request a Demo</Button>
          </div>
          <div>
            <Image
              src="https://picsum.photos/seed/hardhat-hero/800/600"
              alt="Smart Hardhat"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
              data-ai-hint="hardhat technology"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
