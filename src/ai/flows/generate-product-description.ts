'use server';

/**
 * @fileOverview An AI agent for generating product descriptions, feature lists, and brochure copy.
 *
 * - generateProductDescription - A function that generates the product description, feature list, and brochure copy.
 * - GenerateProductDescriptionInput - The input type for the generateProductDescription function.
 * - GenerateProductDescriptionOutput - The return type for the generateProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductDescriptionInputSchema = z.object({
  productCategory: z
    .string()
    .describe('The category of the product, e.g., "Electronics", "Clothing", "Home Goods".'),
  productName: z.string().describe('The name of the product.'),
  productFeatures: z
    .string()
    .describe(
      'A list of the product features, separated by commas.  Example: "Waterproof, Lightweight, Durable".'
    ),
  targetAudience: z
    .string()
    .describe(
      'The target audience for the product, e.g., "Young adults", "Tech enthusiasts", "Budget-conscious consumers".'
    ),
  keyPoints: z
    .string()
    .describe(
      'Key selling points of the product, separated by commas. Example: "Eco-friendly, Innovative design, Easy to use".'
    ),
  siteFocus: z
    .string()
    .describe(
      'The focus of the website, either "marketing-focused" for sales or "informational" for support and manuals.'
    ),
  technicalInfo: z
    .string()
    .describe(
      'Technical specifications, dimensions and material. Example: "Dimensions: 10x5x2 inches, Material: Aluminum".'
    ),
});
export type GenerateProductDescriptionInput = z.infer<
  typeof GenerateProductDescriptionInputSchema
>;

const GenerateProductDescriptionOutputSchema = z.object({
  productDescription: z.string().describe('A detailed description of the product.'),
  featureList: z.string().describe('A list of the product features.'),
  brochureCopy: z.string().describe('Copy for the product brochure.'),
});
export type GenerateProductDescriptionOutput = z.infer<
  typeof GenerateProductDescriptionOutputSchema
>;

export async function generateProductDescription(
  input: GenerateProductDescriptionInput
): Promise<GenerateProductDescriptionOutput> {
  return generateProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductDescriptionPrompt',
  input: {schema: GenerateProductDescriptionInputSchema},
  output: {schema: GenerateProductDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in product descriptions.  You will be provided information about the product, and you will generate content for a product description, a feature list, and brochure copy.

Product Category: {{{productCategory}}}
Product Name: {{{productName}}}
Product Features: {{{productFeatures}}}
Target Audience: {{{targetAudience}}}
Key Points: {{{keyPoints}}}
Site Focus: {{{siteFocus}}}
Technical Info: {{{technicalInfo}}}

Generate a compelling product description, a concise feature list, and engaging brochure copy.`,
});

const generateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductDescriptionFlow',
    inputSchema: GenerateProductDescriptionInputSchema,
    outputSchema: GenerateProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
