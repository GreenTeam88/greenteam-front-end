import { cn } from '@/lib/tailwind';

export const DropDownIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1498_6381)">
        <path
          d="M11.8187 5.25L7.44373 9.625L3.06873 5.25"
          className={cn('stroke-black', className)}
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
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

export const CrauselIcon = () => {
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
