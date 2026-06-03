import { cn } from '@/lib/utils';
import { PrimaryBtnLink, SecondaryBtnLink } from './theme/buttons';

export default function CTAButtons({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex gap-[22px] items-center flex-col lg:flex-row lg:flex-wrap w-full lg:w-fit *:w-full lg:*:w-fit',
        className
      )}
    >
      <SecondaryBtnLink href="/offerte">Offerte aanvragen</SecondaryBtnLink>
      <PrimaryBtnLink href="tel:085 401 93 45">Bel 85 401 93 45</PrimaryBtnLink>
      <PrimaryBtnLink href="/contact">Gratis thuisadvies</PrimaryBtnLink>
    </div>
  );
}
