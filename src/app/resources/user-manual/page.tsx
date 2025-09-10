
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function UserManualPage() {
  const manualSteps = [
    {
      title: "Initial Setup",
      description: "Charge the hardhat’s built-in battery fully using the provided USB charger. Adjust the straps and padding to fit comfortably on your head. Power on the device using the designated button."
    },
    {
      title: "Activating the Hardhat",
      description: "Once powered on, the AI system initializes and begins monitoring sensor data immediately. The face shield can be lowered or raised as needed."
    },
    {
      title: "Using the Voice Command Flashlight",
      description: "To turn on the flashlight, say the activation command (e.g., “Turn on light”). To turn it off, say the deactivation command (e.g., “Turn off light”). The flashlight will respond instantly, allowing you to keep your hands free."
    },
    {
      title: "Receiving Hazard Alerts",
      description: "If the sensors detect a potential danger, the hardhat will alert you through sound, vibration, or flashing lights. Pay attention to the alerts and take appropriate safety actions immediately."
    },
    {
      title: "During Work",
      description: "Continue wearing the hardhat throughout your shift for continuous protection. Use voice commands as needed to control the flashlight or other supported features."
    },
    {
      title: "Charging and Maintenance",
      description: "After your shift, recharge the battery to ensure the hardhat is ready for the next use. Clean the face shield and helmet shell regularly to maintain visibility and hygiene. Inspect the hardhat for any damage and report issues promptly."
    }
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-secondary border-border/60">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-white text-center">User Manual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-muted-foreground px-6 md:px-12 pb-12">
              <ol className="space-y-6">
                {manualSteps.map((step, index) => (
                  <li key={index} className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-base">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="flex flex-col items-center text-center space-y-6 pt-8 border-t border-border/60">
                <p className="text-muted-foreground">For a printable version, you can download the full manual.</p>
                <Button size="lg">
                  <Download className="mr-2" />
                  Download Manual (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
