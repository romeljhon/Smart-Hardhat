import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, HeartPulse, ShieldAlert, Mic } from 'lucide-react';

const featuresData = [
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: 'Real-Time Location Tracking',
    description: 'Monitor personnel location with high-precision GPS for enhanced safety and coordination.',
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: 'Vital Sign Monitoring',
    description: 'Integrated sensors track heart rate and body temperature to prevent heatstroke and fatigue.',
  },
  {
    icon: <ShieldAlert className="h-10 w-10 text-primary" />,
    title: 'SOS Emergency Button',
    description: 'A dedicated button to instantly alert supervisors in case of an emergency.',
  },
  {
    icon: <Mic className="h-10 w-10 text-primary" />,
    title: 'Two-Way Audio Communication',
    description: 'Built-in microphone and speaker for clear, hands-free communication.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our Smart Hardhat is packed with technology to keep your team safe and connected.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="bg-background border-border/60 text-center flex flex-col items-center">
              <CardHeader>
                {feature.icon}
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="font-headline text-xl text-white">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
