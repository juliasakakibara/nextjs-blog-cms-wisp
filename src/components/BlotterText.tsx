'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Blotter: any;
  }
}

function useBlotter() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkBlotter = () => {
      if (typeof window !== 'undefined' && window.Blotter) {
        setIsReady(true);
        return true;
      }
      return false;
    };

    if (checkBlotter()) return;

    const interval = setInterval(() => {
      if (checkBlotter()) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return isReady;
}

interface BlotterTextProps {
  text: string;
  className?: string;
  fontSize?: number;
  color?: string;
  speed?: number;
  volatility?: number;
  seed?: number;
}

export default function BlotterText({ 
  text, 
  className = '', 
  fontSize = 60,
  color = '#000000',
  speed = 0.3,
  volatility = 0.1,
  seed = 0.1
}: BlotterTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blotterRef = useRef<any>(null);
  const isBlotterReady = useBlotter();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isBlotterReady || !containerRef.current) return;

    console.log('Initializing Blotter...');
    
    let isMounted = true;
    let blotterInstance: any = null;

    try {
      // Cria o texto
      const textObj = new window.Blotter.Text(text, {
        family: 'sans-serif',
        size: fontSize,
        fill: color,
        paddingLeft: 20,
        paddingRight: 20
      });

      // Cria o material
      const material = new window.Blotter.LiquidDistortMaterial();
      material.uniforms.uSpeed.value = speed;
      material.uniforms.uVolatility.value = volatility;
      material.uniforms.uSeed.value = seed;

      // Cria o Blotter
      blotterInstance = new window.Blotter(material, { 
        texts: textObj 
      });

      const scope = blotterInstance.forText(textObj);
      blotterRef.current = blotterInstance;
      
      // Adiciona ao DOM
      scope.appendTo(containerRef.current);
      setIsInitialized(true);

    } catch (error) {
      console.error('Error initializing Blotter:', error);
      // Fallback
      if (isMounted && containerRef.current) {
        containerRef.current.textContent = text;
        containerRef.current.style.fontSize = `${fontSize}px`;
        containerRef.current.style.color = color;
      }
    }

    // Limpeza
    return () => {
      isMounted = false;
      if (blotterRef.current) {
        try {
          // Remove os elementos do DOM primeiro
          if (containerRef.current) {
            containerRef.current.innerHTML = '';
          }
          // O Blotter não tem um método destroy, então apenas removemos a referência
          blotterRef.current = null;
        } catch (e) {
          console.error('Error cleaning up Blotter:', e);
        }
      }
    };
  }, [isBlotterReady, text, fontSize, color, speed, volatility, seed]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ 
        display: 'inline-block',
        overflow: 'hidden'
      }}
    >
      {!isInitialized && (
        <div 
          style={{ 
            fontSize: `${fontSize}px`, 
            color,
            visibility: 'hidden'
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}