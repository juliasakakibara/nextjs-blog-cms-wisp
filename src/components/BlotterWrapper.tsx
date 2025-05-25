'use client';
import { useEffect, useRef, useState } from 'react';

// Funções de easing
const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

export default function BlotterWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Efeito para controlar a animação no hover
  useEffect(() => {
    if (!materialRef.current) return;
    
    const duration = 800; // ms
    const startTime = performance.now();
    const startVolatility = materialRef.current.uniforms.uVolatility.value;
    const startSpeed = materialRef.current.uniforms.uSpeed.value;
    const targetVolatility = isHovered ? 0.1 : 0.0;
    const targetSpeed = isHovered ? 0.1 : 0.0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);

      if (materialRef.current) {
        materialRef.current.uniforms.uVolatility.value = 
          startVolatility + (targetVolatility - startVolatility) * easedProgress;
        materialRef.current.uniforms.uSpeed.value = 
          startSpeed + (targetSpeed - startSpeed) * easedProgress;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isHovered]);

  // Efeito para inicialização do Blotter
  useEffect(() => {
    if (typeof window === 'undefined' || !window.Blotter) {
      console.warn('Blotter not loaded');
      return;
    }

    try {
      // Configuração do texto
      const text = new window.Blotter.Text('HOVER ME', {
        family: 'sans-serif',
        size: 80,
        fill: '#000',
        paddingLeft: 50,
        paddingRight: 50
      });

      // Configuração do material
      const material = new window.Blotter.LiquidDistortMaterial();
      material.uniforms.uSpeed.value = 0.01;
      material.uniforms.uVolatility.value = 0.01;
      material.uniforms.uSeed.value = 0.1;
      
      materialRef.current = material;

      // Cria e aplica o Blotter
      const blotter = new window.Blotter(material, { texts: text });
      const scope = blotter.forText(text);
      
      // Aplica ao container
      if (containerRef.current) {
        scope.appendTo(containerRef.current);
      }

    } catch (error) {
      console.error('Error initializing Blotter:', error);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        width: '100%', 
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }} 
    />
  );
}