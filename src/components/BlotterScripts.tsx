'use client';
import Script from 'next/script';
import { useEffect } from 'react';

export function BlotterScripts() {
  useEffect(() => {
    const handleLoad = () => {
      console.log('Blotter scripts loaded');
      // Dispara um evento quando o Blotter estiver pronto
      window.dispatchEvent(new Event('blotter:ready'));
    };

    // Adiciona o event listener para o carregamento do script
    window.addEventListener('blotter:loaded', handleLoad);

    // Limpeza
    return () => {
      window.removeEventListener('blotter:loaded', handleLoad);
    };
  }, []);

  const handleScriptLoad = () => {
    console.log('Blotter.js loaded');
    window.dispatchEvent(new Event('blotter:loaded'));
  };

  return (
    <>
      <Script
        src="/blotter/build/blotter.min.js"
        strategy="beforeInteractive"
        onLoad={handleScriptLoad}
      />
      <Script
        src="/blotter/materials/liquidDistortMaterial.js"
        strategy="beforeInteractive"
      />
    </>
  );
}