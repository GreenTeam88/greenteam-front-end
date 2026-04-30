'use client';

import { Info, X } from 'lucide-react';
import * as React from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/lib/utils';

interface InfoTooltipProps {
  text: string;
  className?: string;
  iconSize?: number;
  ariaLabel?: string;
}

type Position = { top: number; left: number; placement: 'top' | 'bottom' };

const PADDING = 12;
const TOOLTIP_MAX_WIDTH = 260;

export default function InfoTooltip({
  text,
  className,
  iconSize = 14,
  ariaLabel = 'More information',
}: InfoTooltipProps) {
  const [mounted, setMounted] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [position, setPosition] = React.useState<Position | null>(null);
  const [isCoarsePointer, setIsCoarsePointer] = React.useState(false);

  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

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

  const computePosition = React.useCallback((tooltipHeight: number): Position | null => {
    if (!triggerRef.current || typeof window === 'undefined') return null;
    const rect = triggerRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const width = Math.min(TOOLTIP_MAX_WIDTH, vw - PADDING * 2);

    const triggerCenterX = rect.left + rect.width / 2;
    let left = triggerCenterX - width / 2;
    left = Math.max(PADDING, Math.min(vw - width - PADDING, left));

    const spaceAbove = rect.top - PADDING;
    const spaceBelow = vh - rect.bottom - PADDING;

    let placement: 'top' | 'bottom' = 'top';
    let top: number;
    if (spaceAbove >= tooltipHeight + 8 || spaceAbove >= spaceBelow) {
      placement = 'top';
      top = rect.top - tooltipHeight - 8;
      if (top < PADDING) top = PADDING;
    } else {
      placement = 'bottom';
      top = rect.bottom + 8;
      if (top + tooltipHeight > vh - PADDING) {
        top = Math.max(PADDING, vh - tooltipHeight - PADDING);
      }
    }

    return { top, left, placement };
  }, []);

  React.useLayoutEffect(() => {
    if (!hovering) return;
    const measure = () => {
      const h = tooltipRef.current?.offsetHeight ?? 60;
      const next = computePosition(h);
      if (next) setPosition(next);
    };
    measure();
  }, [hovering, computePosition, text]);

  React.useEffect(() => {
    if (!hovering) return;
    const onScroll = () => setHovering(false);
    const onResize = () => {
      const h = tooltipRef.current?.offsetHeight ?? 60;
      const next = computePosition(h);
      if (next) setPosition(next);
    };
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onResize);
    };
  }, [hovering, computePosition]);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    if (isCoarsePointer) return;
    setHovering(true);
  };

  const handleMouseLeave = () => {
    if (isCoarsePointer) return;
    setHovering(false);
  };

  const handleFocus = () => {
    if (isCoarsePointer) return;
    setHovering(true);
  };

  const handleBlur = () => {
    if (isCoarsePointer) return;
    setHovering(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isCoarsePointer) {
      setMobileOpen(true);
    } else {
      setHovering((v) => !v);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
  };

  const closeMobile = (e?: React.SyntheticEvent) => {
    if (e) e.stopPropagation();
    setMobileOpen(false);
  };

  if (!text) return null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        onPointerDown={handlePointerDown}
        className={cn(
          'inline-flex items-center justify-center rounded-full text-primaryDefault transition-colors hover:text-primaryGreenD1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primaryDefault focus-visible:ring-offset-1',
          className
        )}
        style={{ width: iconSize + 4, height: iconSize + 4 }}
      >
        <Info style={{ width: iconSize, height: iconSize }} strokeWidth={2.25} />
      </button>

      {mounted && hovering && !isCoarsePointer && createPortal(
        <div
          ref={tooltipRef}
          role="tooltip"
          style={{
            position: 'fixed',
            top: position?.top ?? -9999,
            left: position?.left ?? -9999,
            maxWidth: TOOLTIP_MAX_WIDTH,
            zIndex: 9999,
            visibility: position ? 'visible' : 'hidden',
            pointerEvents: 'none',
          }}
          className="rounded-md bg-primaryDefault px-3 py-2 text-xs leading-snug text-white shadow-lg"
        >
          {text}
        </div>,
        document.body
      )}

      {mounted && mobileOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeMobile}
          onPointerDown={(e) => e.stopPropagation()}
          className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/60 p-4 sm:items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-lg bg-white p-4 pr-10 shadow-2xl"
          >
            <p className="text-sm leading-relaxed text-textBlack">{text}</p>
            <button
              type="button"
              onClick={closeMobile}
              aria-label="Close"
              className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
