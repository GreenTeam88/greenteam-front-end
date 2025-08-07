import { cn } from '@/lib/tailwind';

export const DropDownIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1498_6381)">
        <path
          d="M11.8187 5.25L7.44373 9.625L3.06873 5.25"
          className={cn('stroke-black', className)}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1498_6381">
          <rect width="14" height="14" fill="white" transform="translate(0.443726)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CarouselIcon = () => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      className="fill-none group-hover:fill-secondaryDefault"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="17.6646"
        cy="17.5215"
        r="16.2417"
        transform="rotate(-180 17.6646 17.5215)"
        className="stroke-secondaryDefault  "
      />
      <path
        d="M15.616 12.3999L20.7375 17.5214L15.616 22.643"
        className="stroke-secondaryDefault group-hover:stroke-[#fff]"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TickDropDownIcon = () => {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.972097 6.78571L7.5971 0.169643C7.71019 0.0565476 7.84412 0 7.99888 0C8.15365 0 8.28757 0.0565476 8.40067 0.169643L15.0257 6.78571C15.1388 6.89881 15.1953 7.03423 15.1953 7.19196C15.1953 7.3497 15.1388 7.48512 15.0257 7.59821L13.5435 9.07143C13.4304 9.18452 13.2965 9.24107 13.1417 9.24107C12.987 9.24107 12.8531 9.18452 12.74 9.07143L7.99888 4.33036L3.25781 9.07143C3.14472 9.18452 3.01079 9.24107 2.85603 9.24107C2.70126 9.24107 2.56734 9.18452 2.45424 9.07143L0.972097 7.59821C0.859002 7.48512 0.802455 7.3497 0.802455 7.19196C0.802455 7.03423 0.859002 6.89881 0.972097 6.78571Z"
        fill="#212529"
      />
    </svg>
  );
};
