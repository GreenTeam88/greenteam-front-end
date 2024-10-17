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
