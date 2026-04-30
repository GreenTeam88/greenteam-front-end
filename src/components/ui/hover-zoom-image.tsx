'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/lib/utils';

interface HoverZoomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  zoomedSize?: number;
}

type Position = { top: number; left: number };

const PADDING = 12;

export default function HoverZoomImage({
  src,
  alt,
  width = 55,
  height = 55,
  className,
  zoomedSize = 320,
}: HoverZoomImageProps) {
  const [mounted, setMounted] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [position, setPosition] = React.useState<Position | null>(null);
  const [isCoarsePointer, setIsCoarsePointer] = React.useState(false);

  const triggerRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      const mq = window.matchMedia('(hover: none), (pointer: coarse)');
      setIsCoarsePointer(mq.matches);
      const handler = (e: MediaQueryListEvent) => setIsCoarsePointer(e.matches);
      mq.addEventListener?.('change', handler);
      return () => mq.removeEventListener?.('change', handler);
    }
  }, []);

  const computePosition = React.useCallback((): Position | null => {
    if (!triggerRef.current || typeof window === 'undefined') return null;
    const rect = triggerRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let left = rect.right + PADDING;
    let top = rect.top + rect.height / 2 - zoomedSize / 2;

    if (left + zoomedSize > vw - PADDING) {
      const leftSide = rect.left - PADDING - zoomedSize;
      if (leftSide >= PADDING) {
        left = leftSide;
      } else {
        left = Math.max(
          PADDING,
          Math.min(vw - zoomedSize - PADDING, rect.left + rect.width / 2 - zoomedSize / 2)
        );
        const above = rect.top - PADDING - zoomedSize;
        top = above >= PADDING ? above : rect.bottom + PADDING;
      }
    }

    top = Math.max(PADDING, Math.min(vh - zoomedSize - PADDING, top));
    return { top, left };
  }, [zoomedSize]);

  React.useEffect(() => {
    if (!hovering) return;
    const update = () => {
      const next = computePosition();
      if (!next) return;
      setPosition(next);
    };
    const onScroll = () => setHovering(false);
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', update);
    };
  }, [hovering, computePosition]);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    if (isCoarsePointer) return;
    const next = computePosition();
    if (next) setPosition(next);
    setHovering(true);
  };

  const handleMouseLeave = () => {
    if (isCoarsePointer) return;
    setHovering(false);
  };

  const stopFromSelecting = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleTriggerClick = (e: React.MouseEvent) => {
    if (!isCoarsePointer) return;
    stopFromSelecting(e);
    setMobileOpen(true);
  };

  const handleTriggerPointerDown = (e: React.PointerEvent) => {
    if (!isCoarsePointer) return;
    e.stopPropagation();
  };

  const closeMobile = (e?: React.SyntheticEvent) => {
    if (e) e.stopPropagation();
    setMobileOpen(false);
  };

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleTriggerClick}
        onPointerDown={handleTriggerPointerDown}
        className={cn(
          'relative inline-flex shrink-0 overflow-hidden rounded-sm',
          isCoarsePointer && 'cursor-zoom-in'
        )}
        style={{ width, height }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn('object-cover', className)}
        />
      </span>

      {mounted && hovering && position && createPortal(
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: position.top,
            left: position.left,
            width: zoomedSize,
            height: zoomedSize,
            zIndex: 9999,
            pointerEvents: 'none',
          }}
          className="overflow-hidden rounded-lg bg-white shadow-2xl ring-1 ring-black/10"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={`${zoomedSize}px`}
            className="object-cover"
          />
        </div>,
        document.body
      )}

      {mounted && mobileOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={closeMobile}
          onPointerDown={(e) => e.stopPropagation()}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg bg-white shadow-2xl"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 90vw, 400px"
              className="object-contain"
            />
            <button
              type="button"
              onClick={closeMobile}
              aria-label="Close preview"
              className="absolute top-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
