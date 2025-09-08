import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function UserManualPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-secondary border-border/60">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-white">User Manual</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center space-y-6">
              <p className="text-muted-foreground">Download the complete guide to setup, usage, and maintenance for your Smart Hardhat.</p>
              <Button size="lg">
                <Download className="mr-2" />
                Download Manual (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
