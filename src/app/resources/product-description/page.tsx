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
              <p className="text-lg">The Smart Hardhat is a revolutionary piece of personal protective equipment designed for the modern construction and industrial workforce. It integrates advanced technology to provide unparalleled safety and hands-free assistance, even in environments without internet connectivity. By leveraging on-device AI, it offers real-time monitoring and hazard detection to keep workers safe and productive.</p>
              
              <div>
                <h3 className="text-xl font-bold pt-4 text-white">Advanced Technology for Unmatched Safety</h3>
                <p>Our Smart Hardhat is not just hard, it's smart. It's engineered to provide real-time safety monitoring and assistance in hazardous environments. The integrated sensors and AI-powered hazard detection system work together to identify potential dangers, from falling objects to environmental risks, and provide immediate alerts to the wearer.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold pt-4 text-white">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Offline AI-Powered Hazard Detection:</strong> Operates fully without internet connectivity, ensuring reliability in remote or underground locations.</li>
                  <li><strong>Advanced Impact Sensors:</strong> Detects falls and impacts, automatically triggering alert signals for faster incident response.</li>
                  <li><strong>Voice-Activated Controls:</strong> Allows for hands-free operation, enabling workers to stay focused on their tasks.</li>
                  <li><strong>Enhanced Safety Compliance:</strong> Promotes a culture of safety and boosts worker confidence with proactive protection.</li>
                  <li><strong>Durable &amp; Lightweight Design:</strong> Built to withstand tough conditions while ensuring comfort for all-day wear.</li>
                  <li><strong>Long-Lasting Battery:</strong> A rechargeable power source designed to last through long shifts.</li>
                </ul>
              </div>

              <div>
                  <h3 className="text-xl font-bold pt-4 text-white">Benefits</h3>
                  <p>The primary benefit of the Smart Hardhat is a significant reduction in the risk of head injuries. By providing proactive alerts and enabling faster response times, it not only protects workers but also improves overall site safety and compliance. Give your team the confidence they need to work safely and efficiently.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
