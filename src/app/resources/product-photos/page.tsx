
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductPhotosPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-secondary border-border/60">
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-white">Madnus smart Hard-hat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full aspect-[8.5/11] rounded-lg overflow-hidden">
                <iframe
                  src="/pdf/Madnus smart Hard-hat.pdf"
                  className="w-full h-full"
                  title="Madnus Smart Hard-hat PDF"
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
