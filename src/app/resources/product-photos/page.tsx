import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function ProductPhotosPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-secondary border-border/60">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-white">Product Photos</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Isometric</h3>
                <Image
                  src="https://picsum.photos/seed/hardhat-iso/600/400"
                  alt="Smart Hardhat Isometric View"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  data-ai-hint="isometric hardhat"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Orthographic</h3>
                <Image
                  src="https://picsum.photos/seed/hardhat-ortho/600/400"
                  alt="Smart Hardhat Orthographic View"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  data-ai-hint="side profile hardhat"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
