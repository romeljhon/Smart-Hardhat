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
            <CardContent className="space-y-4 text-muted-foreground">
              <p>The Smart Hardhat is a revolutionary piece of personal protective equipment designed for the modern construction and industrial workforce. It integrates advanced technology to provide unparalleled safety, communication, and data tracking on the job site.</p>
              <h3 className="text-xl font-bold pt-4 text-white">Key Features:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time GPS tracking and geofencing.</li>
                <li>Impact detection and automated emergency alerts.</li>
                <li>Integrated two-way communication headset.</li>
                <li>Environmental sensors for heat, noise, and air quality.</li>
                <li>Long-lasting rechargeable battery.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
