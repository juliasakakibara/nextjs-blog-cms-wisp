'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

// Interface para as props do componente
interface BlotterTextProps {
  text: string;
  className?: string;
  fontSize?: number;
  color?: string;
  speed?: number;
  volatility?: number;
  seed?: number;
}

const BlotterText = ({
  text,
  className = '',
  fontSize = 80,
  color = '#000000',
  speed = 0.3,
  volatility = 0.15,
  seed = 0.2,
}: BlotterTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blotterInstance = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  // Efeito para verificar se o Blotter e o material estão prontos
  useEffect(() => {
    console.log('Verificando se o Blotter está pronto...');
    if (typeof window !== 'undefined') {
      console.log('Window está disponível');
      console.log('Blotter no window:', (window as any).Blotter);
      if ((window as any).Blotter) {
        console.log('Blotter encontrado no window');
        console.log('LiquidDistortMaterial disponível?', (window as any).Blotter.LiquidDistortMaterial);
        if ((window as any).Blotter.LiquidDistortMaterial) {
          console.log('LiquidDistortMaterial encontrado, definindo isReady como true');
          setIsReady(true);
        }
      }
    }
  }, []);

  // Efeito para inicializar o Blotter quando estiver pronto
  useEffect(() => {
    // Carrega o Blotter apenas no cliente e quando estiver pronto
    if (typeof window === 'undefined' || !isReady) return;

    // Limpa qualquer instância anterior
    if (blotterInstance.current) {
      blotterInstance.current.destroy();
      blotterInstance.current = null;
    }

    try {
      const Blotter = (window as any).Blotter;
      
      // Cria um material personalizado
      const material = new Blotter.LiquidDistortMaterial();
      material.uniforms.uSpeed.value = speed;
      material.uniforms.uVolatility.value = volatility;
      material.uniforms.uSeed.value = seed;

      // Configuração do texto
      const blotterText = new Blotter.Text(text, {
        family: 'sans-serif',
        size: fontSize,
        fill: color,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
      });

      // Cria uma nova instância do Blotter
      const blotter = new Blotter(material, { 
        texts: blotterText 
      });
      
      blotterInstance.current = blotter;

      // Aplica o efeito ao container
      if (containerRef.current) {
        // Limpa o conteúdo anterior
        containerRef.current.innerHTML = '';
        
        // Adiciona o novo texto
        const scope = blotter.forText(blotterText);
        scope.appendTo(containerRef.current);
      }
    } catch (error) {
      console.error('Erro ao inicializar o Blotter:', error);
    }

    // Limpeza ao desmontar o componente
    return () => {
      if (blotterInstance.current) {
        blotterInstance.current.destroy();
        blotterInstance.current = null;
      }
    };
  }, [text, fontSize, color, speed, volatility, seed, isReady]);

  const blotterScriptPath = '/blotter/build/blotter.min.js';
  const materialScriptPath = '/blotter/materials/liquidDistortMaterial.js';
  
  console.log('Caminho do script do Blotter:', blotterScriptPath);
  console.log('Caminho do script do material:', materialScriptPath);
  
  return (
    <>
      {/* Script para carregar o Blotter.js */}
      <Script 
        id="blotter-script"
        src={blotterScriptPath}
        onLoad={() => {
          console.log('Blotter.js carregado com sucesso!');
          console.log('Blotter no window após carregar:', (window as any).Blotter);
          
          // Carrega o material após o Blotter estar pronto
          const script = document.createElement('script');
          script.id = 'liquid-distort-material';
          script.src = materialScriptPath;
          script.onload = () => {
            console.log('Material LiquidDistort carregado com sucesso!');
            console.log('LiquidDistortMaterial disponível?', (window as any).Blotter?.LiquidDistortMaterial);
            setIsReady(true);
          };
          script.onerror = (error) => {
            console.error('Erro ao carregar o material:', error);
          };
          console.log('Adicionando script do material ao body...');
          document.body.appendChild(script);
        }}
        onError={(error) => {
          console.error('Erro ao carregar o Blotter:', error);
        }}
      />
      <div ref={containerRef} className={className} style={{ display: 'inline-block' }} />
    </>
  );
};

export default BlotterText;
