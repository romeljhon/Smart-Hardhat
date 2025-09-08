import Image from 'next/image';

export function SmartAIHardhatLogo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image 
        src="https://picsum.photos/seed/ai-hardhat-logo/200" 
        alt="Smart AI Hardhat Logo" 
        width={200} 
        height={200}
        className="rounded-full"
        data-ai-hint="logo hardhat" 
      />
    </div>
  );
}
