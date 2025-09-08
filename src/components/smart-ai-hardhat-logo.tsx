import Image from 'next/image';

export function SmartAIHardhatLogo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image 
        src="/r.png" 
        alt="Smart AI Hardhat Logo" 
        width={200} 
        height={200}
        className="rounded-full"
        data-ai-hint="logo hardhat" 
      />
    </div>
  );
}
