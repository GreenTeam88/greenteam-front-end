import * as React from 'react';

const ANNOUNCEMENTS = [
  'Twijfels? even bellen! 085 401 93 45',
  'Traprenovatie op maat!',
  'Gratis thuisadvies',
  'Razendsnel een offerte',
  'Vrijblijvende afspraak plannen',
  'Stalen bij u thuis bekijken',
  'Deskundig advies',
  'Specialist in traprenovaties',
  'Liever bellen? 085 401 93 45',
  'Gratis interieuradvies',
  'Traprenovatie door echte vakspecialisten',
  'Interieur adviseur gratis inplannen',
  'Geen showroom nodig. Wij komen naar u toe!',
  'Binnen enkele uren een offerte in uw mailbox',
];

/**
 * 28-05-2026
 * @author abdelhafid
 * @returns JSX
 */
export default function AnnouncementTicker() {
  return (
    <div className="w-full overflow-hidden text-white select-none bg-primaryDefault">
      <div className="flex flex-nowrap group">
        <TickerItem list={ANNOUNCEMENTS} />

        {/* we add a copy to make the loop illusion and hidding its area from screen readers */}
        <TickerItem list={ANNOUNCEMENTS} ariaHidden={true} />
      </div>
    </div>
  );
}

function TickerItem({ list, ariaHidden = false }: { list: string[]; ariaHidden?: boolean }) {
  return (
    <div
      className="flex items-center justify-around gap-16 pr-16 py-3 w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] whitespace-nowrap"
      aria-hidden={ariaHidden}
    >
      {list.map((message, index) => (
        <div
          key={`message-${index}`}
          className="flex items-center gap-16 text-base leading-5 font-medium -tracking-[2%] shrink-0 md:text-base"
        >
          <span>{message}</span>
          <span className="w-2 h-2 bg-white rounded-full opacity-80" />
        </div>
      ))}
    </div>
  );
}
