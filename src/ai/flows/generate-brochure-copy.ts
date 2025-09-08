'use server';

/**
 * @fileOverview An AI agent for generating product brochure copy.
 *
 * - generateBrochureCopy - A function that generates the product brochure copy.
 * - GenerateBrochureCopyInput - The input type for the generateBrochureCopy function.
 * - GenerateBrochureCopyOutput - The return type for the generateBrochureCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBrochureCopyInputSchema = z.object({
  productCategory: z
    .string()
    .describe('The category of the product, e.g., "Electronics", "Home Goods", "Apparel".'),
  productName: z.string().describe('The name of the product.'),
  productFeatures: z.string().describe('Key features of the product, separated by semicolons.'),
  targetAudience: z
    .string()
    .describe('The target audience for the product, e.g., "young adults", "tech enthusiasts".'),
});
export type GenerateBrochureCopyInput = z.infer<typeof GenerateBrochureCopyInputSchema>;

const GenerateBrochureCopyOutputSchema = z.object({
  brochureCopy: z.string().describe('The generated brochure copy for the product.'),
});
export type GenerateBrochureCopyOutput = z.infer<typeof GenerateBrochureCopyOutputSchema>;

export async function generateBrochureCopy(input: GenerateBrochureCopyInput): Promise<GenerateBrochureCopyOutput> {
  return generateBrochureCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBrochureCopyPrompt',
  input: {schema: GenerateBrochureCopyInputSchema},
  output: {schema: GenerateBrochureCopyOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in writing compelling brochure copy.

  Based on the product category, name, features, and target audience, write brochure copy that highlights the product's benefits and persuades the target audience to purchase the product.

  Product Category: {{{productCategory}}}
  Product Name: {{{productName}}}
  Product Features: {{{productFeatures}}}
  Target Audience: {{{targetAudience}}}`,
});

const generateBrochureCopyFlow = ai.defineFlow(
  {
    name: 'generateBrochureCopyFlow',
    inputSchema: GenerateBrochureCopyInputSchema,
    outputSchema: GenerateBrochureCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
