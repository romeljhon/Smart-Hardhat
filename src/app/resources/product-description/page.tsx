
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductDescriptionPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-secondary border-border/60">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-white">Full Product Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p className="text-lg">The Smart Hardhat Powered by AI Offline is an innovative personal protective equipment (PPE) designed to enhance worker safety and productivity in hazardous environments without relying on continuous internet connectivity. Combining robust physical protection with advanced artificial intelligence capabilities, this smart hardhat offers real-time hazard detection, hands-free assistance, and enhanced visibility features — all operating offline for reliable performance in remote or connectivity-challenged sites.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
