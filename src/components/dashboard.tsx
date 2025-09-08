"use client";

import { useState } from "react";
import type { FC } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormDescription as FormDescriptionComponent,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  BookOpen,
  Camera,
  CheckCircle2,
  FileText,
  Loader2,
  PenSquare,
  Sparkles,
  Upload,
  Video,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { GenerateProductDescriptionOutput } from "@/ai/flows/generate-product-description";


type ContentState = {
  productName: string;
  description: string;
  features: string[];
  brochureCopy: string;
  promoVideoUrl: string | null;
  isometricPhotosUrls: string[];
  orthographicPhotosUrls: string[];
};

const initialState: ContentState = {
  productName: "",
  description: "",
  features: [],
  brochureCopy: "",
  promoVideoUrl: null,
  isometricPhotosUrls: [],
  orthographicPhotosUrls: [],
};

const checklistItems = [
  {
    id: "description",
    title: "Description & Features",
    description: "Generate compelling product copy with AI.",
    icon: PenSquare,
    statusKey: (content: ContentState) => content.description.length > 0 && content.features.length > 0,
  },
  {
    id: "photos",
    title: "Product Photos",
    description: "Upload isometric and orthographic views.",
    icon: Camera,
    statusKey: (content: ContentState) => content.isometricPhotosUrls.length > 0 && content.orthographicPhotosUrls.length > 0,
  },
  {
    id: "video",
    title: "Promotional Video",
    description: "Add a link to your promotional video.",
    icon: Video,
    statusKey: (content: ContentState) => !!content.promoVideoUrl,
  },
  {
    id: "brochure",
    title: "Brochure",
    description: "Preview and export a downloadable PDF.",
    icon: FileText,
    statusKey: (content: ContentState) => content.brochureCopy.length > 0,
  },
  {
    id: "manual",
    title: "User Manual",
    description: "Offer a pre-filled template for users.",
    icon: BookOpen,
    statusKey: (content: ContentState) => content.description.length > 0, // Manual can be generated once description exists
  },
];

export function Dashboard() {
  const [content, setContent] = useState<ContentState>(initialState);
  const { toast } = useToast();

  const handleContentGenerated = (data: GenerateProductDescriptionOutput) => {
    setContent((prev) => ({
      ...prev,
      description: data.productDescription,
      features: data.featureList.split('\n').filter(f => f.trim() !== ''),
      brochureCopy: data.brochureCopy,
    }));
  };

  const renderDialogContent = (id: string) => {
    switch (id) {
      case "description":
        return (
          <DescriptionGenerator
            content={content}
            setContent={setContent}
            onContentGenerated={handleContentGenerated}
          />
        );
      case "photos":
        return (
          <VisualAssetOrganizer
            isometricPhotos={content.isometricPhotosUrls}
            orthographicPhotos={content.orthographicPhotosUrls}
            onUpload={(type, url) => {
              if (type === "isometric") {
                setContent((prev) => ({ ...prev, isometricPhotosUrls: [...prev.isometricPhotosUrls, url] }));
              } else {
                setContent((prev) => ({ ...prev, orthographicPhotosUrls: [...prev.orthographicPhotosUrls, url] }));
              }
              toast({ title: "Photo Uploaded", description: "A new product photo has been added." });
            }}
            onDelete={(type, urlToDelete) => {
               if (type === "isometric") {
                setContent((prev) => ({ ...prev, isometricPhotosUrls: prev.isometricPhotosUrls.filter(url => url !== urlToDelete) }));
              } else {
                setContent((prev) => ({ ...prev, orthographicPhotosUrls: prev.orthographicPhotosUrls.filter(url => url !== urlToDelete) }));
              }
              toast({ title: "Photo Removed", description: "The product photo has been removed." });
            }}
          />
        );
      case "video":
        return (
          <VideoUploader
            promoVideoUrl={content.promoVideoUrl}
            onUrlChange={(url) => setContent(prev => ({ ...prev, promoVideoUrl: url }))}
            onSave={() => toast({ title: "Video Link Saved", description: "The promotional video link is updated." })}
          />
        );
      case "brochure":
        return <BrochurePreview brochureCopy={content.brochureCopy} productName={content.productName || "Product Name"} />;
      case "manual":
        return <ManualPreview productName={content.productName || "Product Name"} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-headline text-3xl font-bold tracking-tight">Content Checklist</h1>
      </div>
       <Card>
        <CardHeader>
          <CardTitle>Product Name</CardTitle>
          <CardDescription>Enter the name of your product. This will be used across all generated content.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="e.g. Heavy-Duty Excavator X500"
            value={content.productName}
            onChange={(e) => setContent(prev => ({ ...prev, productName: e.target.value }))}
          />
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {checklistItems.map((item) => {
          const isComplete = item.statusKey(content);
          return (
            <Dialog key={item.id}>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <item.icon className="h-8 w-8 text-primary" />
                    <Badge variant={isComplete ? "default" : "secondary"} className={cn(isComplete && "bg-green-600")}>
                      {isComplete ? <CheckCircle2 className="mr-2 h-4 w-4" /> : null}
                      {isComplete ? "Done" : "Pending"}
                    </Badge>
                  </div>
                  <CardTitle className="font-headline pt-4">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <DialogTrigger asChild>
                    <Button className="w-full" variant={isComplete ? "secondary" : "default"}>
                      {isComplete ? "View & Edit" : "Start"}
                    </Button>
                  </DialogTrigger>
                </CardContent>
              </Card>
              {renderDialogContent(item.id)}
            </Dialog>
          );
        })}
      </div>
    </>
  );
}

// Sub-components for Dialogs
const generatorFormSchema = z.object({
  productName: z.string().min(1, "Product name is required."),
  productCategory: z.string().min(1, "Product category is required."),
  productFeatures: z.string().min(1, "Please list at least one feature."),
  targetAudience: z.string().min(1, "Target audience is required."),
  keyPoints: z.string().min(1, "Please list at least one key point."),
  siteFocus: z.enum(["marketing-focused", "informational"]),
  technicalInfo: z.string().min(1, "Technical info is required."),
});

type GeneratorFormValues = z.infer<typeof generatorFormSchema>;

const DescriptionGenerator: FC<{
  content: ContentState;
  setContent: React.Dispatch<React.SetStateAction<ContentState>>;
  onContentGenerated: (data: GenerateProductDescriptionOutput) => void;
}> = ({ content, setContent, onContentGenerated }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<GeneratorFormValues>({
    resolver: zodResolver(generatorFormSchema),
    defaultValues: {
      productName: content.productName || "",
      productCategory: "",
      productFeatures: "",
      targetAudience: "",
      keyPoints: "",
      siteFocus: "marketing-focused",
      technicalInfo: "",
    },
  });
  
  // Sync productName from dashboard to form
  form.watch((values, { name }) => {
    if (name !== 'productName') {
      if (content.productName !== values.productName) {
        form.setValue('productName', content.productName);
      }
    }
  });


  const handleSubmit = async (values: GeneratorFormValues) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/flows/generateProductDescription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to generate content.");
      }

      const result = await response.json();
      onContentGenerated(result);
      toast({
        title: "Content Generated!",
        description: "AI has created the first draft for you. Check the 'Content Editor' tab.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: error.message || "An unknown error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DialogContent className="sm:max-w-4xl">
      <DialogHeader>
        <DialogTitle className="font-headline">Generate Description & Features</DialogTitle>
        <DialogDescription>
          Use the generator to create content with AI, then switch to the editor to refine it.
        </DialogDescription>
      </DialogHeader>
      <Tabs defaultValue="generator" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="generator">AI Generator</TabsTrigger>
          <TabsTrigger value="editor">Content Editor</TabsTrigger>
        </TabsList>
        <TabsContent value="generator" className="py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Quantum Drill X3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Category</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Power Tools" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productFeatures"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Features</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Comma-separated: Brushless motor, 2-speed gearbox, LED light" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="keyPoints"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Key Selling Points</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Comma-separated: 5-year warranty, Ultra-lightweight, Patented safety clutch" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="targetAudience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Audience</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Professional contractors, DIY enthusiasts" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="technicalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Technical Info</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g. Weight: 2.5kg, Voltage: 20V, Max RPM: 2000" {...field} />
                      </FormControl>
                       <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="siteFocus"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Website Focus</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="marketing-focused" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Marketing-Focused (Sales)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="informational" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Informational (Support/Manuals)
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90">
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                  Generate Content
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </TabsContent>
        <TabsContent value="editor" className="py-4">
           <div className="space-y-4">
              <div>
                <Label htmlFor="description" className="font-bold">Description</Label>
                <Textarea id="description" value={content.description} onChange={e => setContent(c => ({...c, description: e.target.value}))} className="mt-2 min-h-[120px]" />
              </div>
              <div>
                <Label htmlFor="features" className="font-bold">Features (one per line)</Label>
                <Textarea id="features" value={content.features.join('\n')} onChange={e => setContent(c => ({...c, features: e.target.value.split('\n')}))} className="mt-2 min-h-[150px]" />
              </div>
               <div>
                <Label htmlFor="brochureCopy" className="font-bold">Brochure Copy</Label>
                <Textarea id="brochureCopy" value={content.brochureCopy} onChange={e => setContent(c => ({...c, brochureCopy: e.target.value}))} className="mt-2 min-h-[180px]" />
              </div>
           </div>
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
};

const VisualAssetOrganizer: FC<{
  isometricPhotos: string[];
  orthographicPhotos: string[];
  onUpload: (type: 'isometric' | 'orthographic', url: string) => void;
  onDelete: (type: 'isometric' | 'orthographic', url: string) => void;
}> = ({ isometricPhotos, orthographicPhotos, onUpload, onDelete }) => {
  const handleFakeUpload = (type: 'isometric' | 'orthographic') => {
    const randomId = Math.floor(Math.random() * 1000);
    onUpload(type, `https://picsum.photos/seed/${randomId}/600/400`);
  };

  const PhotoGrid: FC<{ type: 'isometric' | 'orthographic', photos: string[] }> = ({ type, photos }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((url) => (
        <div key={url} className="relative group">
          <Image
            src={url}
            alt={`${type} view`}
            width={600}
            height={400}
            className="rounded-lg object-cover aspect-video"
            data-ai-hint="product photo"
          />
          <Button variant="destructive" size="icon" className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => onDelete(type, url)}>
            <X className="h-4 w-4"/>
          </Button>
        </div>
      ))}
      <Button variant="outline" className="flex flex-col items-center justify-center aspect-video h-full w-full" onClick={() => handleFakeUpload(type)}>
        <Upload className="h-6 w-6 mb-2 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Upload</span>
      </Button>
    </div>
  );

  return (
    <DialogContent className="sm:max-w-4xl">
      <DialogHeader>
        <DialogTitle className="font-headline">Visual Asset Organizer</DialogTitle>
        <DialogDescription>
          Upload and categorize your product photos.
        </DialogDescription>
      </DialogHeader>
      <Tabs defaultValue="isometric" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="isometric">Isometric</TabsTrigger>
          <TabsTrigger value="orthographic">Orthographic</TabsTrigger>
        </TabsList>
        <TabsContent value="isometric" className="py-4">
          <PhotoGrid type="isometric" photos={isometricPhotos} />
        </TabsContent>
        <TabsContent value="orthographic" className="py-4">
          <PhotoGrid type="orthographic" photos={orthographicPhotos} />
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
};


const VideoUploader: FC<{
    promoVideoUrl: string | null,
    onUrlChange: (url: string) => void,
    onSave: () => void
}> = ({ promoVideoUrl, onUrlChange, onSave }) => {
    const [localUrl, setLocalUrl] = useState(promoVideoUrl || '');

    const handleSave = () => {
        onUrlChange(localUrl);
        onSave();
    }
    
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="font-headline">Promotional Video</DialogTitle>
                <DialogDescription>Add a link to your product's promotional video (e.g., from YouTube or Vimeo).</DialogDescription>
            </DialogHeader>
            <div className="py-4">
                <Label htmlFor="videoUrl">Video URL</Label>
                <Input id="videoUrl" value={localUrl} onChange={(e) => setLocalUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=..." />
                {localUrl && (
                    <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                        <Video className="h-16 w-16 text-muted-foreground" />
                        <p className="sr-only">Video preview placeholder</p>
                    </div>
                )}
            </div>
            <DialogFooter>
                <Button onClick={handleSave}>Save Link</Button>
            </DialogFooter>
        </DialogContent>
    )
}

const BrochurePreview: FC<{ brochureCopy: string, productName: string }> = ({ brochureCopy, productName }) => {
  return (
    <DialogContent className="sm:max-w-2xl">
      <DialogHeader>
        <DialogTitle className="font-headline">Brochure Preview</DialogTitle>
      </DialogHeader>
      <div className="my-4 h-[500px] overflow-y-auto rounded-lg border bg-white p-8 text-black shadow-inner">
        <div className="flex justify-between items-start">
            <h2 className="font-headline text-4xl mb-4 text-gray-800">{productName}</h2>
             <span className="font-bold text-primary">Product Launchpad</span>
        </div>
        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className="font-body text-gray-600 leading-relaxed">
                    {brochureCopy || "Generate brochure copy from the 'Description & Features' section to see it here."}
                </p>
            </div>
            <div className="col-span-1">
                 <Image src="https://picsum.photos/seed/brochure/600/800" data-ai-hint="product design" alt="Product" width={600} height={800} className="rounded-md" />
            </div>
        </div>
      </div>
       <DialogFooter>
          <Button variant="default" className="bg-accent hover:bg-accent/90">
            Download as PDF
          </Button>
        </DialogFooter>
    </DialogContent>
  );
};


const ManualPreview: FC<{ productName: string }> = ({ productName }) => {
  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle className="font-headline">User Manual Template</DialogTitle>
        <DialogDescription>Download a pre-filled manual template for your product.</DialogDescription>
      </DialogHeader>
      <div className="my-4 rounded-lg border p-6 bg-card flex flex-col items-center text-center">
        <BookOpen className="h-16 w-16 text-primary mb-4" />
        <h3 className="font-headline text-2xl font-bold">{productName}</h3>
        <p className="text-lg text-muted-foreground">User Manual</p>
        <p className="mt-4 text-sm max-w-xs">Includes sections for safety warnings, maintenance schedules, and technical diagrams.</p>
      </div>
      <DialogFooter>
        <Button variant="default">Download Template</Button>
      </DialogFooter>
    </DialogContent>
  );
};

    