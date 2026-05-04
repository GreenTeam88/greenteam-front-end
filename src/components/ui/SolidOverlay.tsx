import React from 'react';

export default function SolidOverlay({ opacity = 50, show = false }: { opacity?: number; show?: boolean }) {
  if (!show) return null;

  return <div className="absolute inset-0 bg-white pointer-events-none z-1" style={{ opacity: opacity / 100 }} />;
}
