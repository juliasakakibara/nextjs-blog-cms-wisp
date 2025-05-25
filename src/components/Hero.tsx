'use client';

import dynamic from 'next/dynamic';

// Importação dinâmica do BlotterText para evitar problemas com SSR
const BlotterText = dynamic(
  () => import('@/components/BlotterText'),
  { ssr: false, loading: () => <div className="h-32">Carregando...</div> }
);

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              <BlotterText 
                text="Julia Sakakibara" 
                fontSize={80}
                color="#000000"
                speed={0.3}
                volatility={0.15}
                seed={0.2}
                className="block w-full"
              />
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Desenvolvedora e entusiasta de tecnologia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
