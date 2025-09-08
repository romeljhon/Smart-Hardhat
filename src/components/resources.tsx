import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Camera, FileText, BookOpen, Wrench, Eye } from 'lucide-react';
import Link from 'next/link';

const resourcesData = [
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: 'Promotional Video',
    description: 'Watch our promo video to see the Smart Hardhat in action.',
    href: '/resources/promotional-video',
  },
  {
    icon: <Camera className="h-8 w-8 text-primary" />,
    title: 'Product Photos',
    description: 'High-resolution isometric and orthographic photos.',
    href: '/resources/product-photos',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Full Product Description',
    description: 'A detailed document of all features and specifications.',
    href: '/resources/product-description',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Brochure',
    description: 'Download our official product brochure for a comprehensive overview.',
    href: '/resources/brochure',
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: 'User Manual',
    description: 'The complete guide to setup, usage, and maintenance.',
    href: '/resources/user-manual',
  },
];

export function Resources() {
  return (
    <section id="downloads" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white">Downloads & Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about the Smart Hardhat, all in one place.
            </p>
        </div>
        <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourcesData.map((resource, index) => (
                <Card key={index} className="bg-secondary border-border/60 flex flex-col">
                  <CardContent className="p-6 flex-grow flex flex-col text-center items-center">
                    <div className="flex-grow">
                      <div className="flex justify-center mb-4">{resource.icon}</div>
                      <h3 className="font-headline text-xl text-white mb-2">{resource.title}</h3>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </div>
                    <div className="mt-auto pt-6 w-full">
                      <Link href={resource.href} className='w-full'>
                        <Button variant="outline" className="w-full">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
