import { DoneIcon } from '@/components/icons/done';
import { cn } from '@/lib/tailwind';

// type ListInstalationService = {
//   service: string;
//   isImportant: boolean;
// };

// const listInstalationServices: ListInstalationService[] = [
//   { service: 'Laagste prijs', isImportant: false },
//   { service: 'Al onze prijzen zijn inclusief BTW', isImportant: false },
//   { service: 'Beste kwaliteit voor de laagste prijs!', isImportant: true },
//   { service: 'Gratis verzending boven de €300,-', isImportant: true },
//   { service: 'Snelle levering', isImportant: true },
//   { service: 'Allround legservice door heel Nederland', isImportant: true },
// ];

// const ListInstalationServiceUI: React.FC<ListInstalationService> = ({ isImportant, service }) => {
//   return (
//     <div className="flex gap-1">
//       <DoneIcon />
//       <p className={cn({ 'text-[}': isImportant })}>{service}</p>
//     </div>
//   );
// };
export const FloorInstalation = () => {
  return (
    <div className="flex pb-10 flex-col items-center gap-6 ">
      <p>Vloer laten leggen door onze specialist?</p>
      <div className="flex flex-col w-full gap-4">
        <div className="flex gap-1 items-center">
          <DoneIcon />
          <p className="text-[#212529]">Laagste prijs</p>
        </div>
        <div className="flex gap-1 items-center">
          <DoneIcon />
          Al onze prijzen zijn <span className="font-bold">inclusief BTW</span>
        </div>
        <div className="flex gap-1 items-center">
          <DoneIcon />{' '}
          <p className="text-[#195B35]">
            <span className="font-bold">Beste kwaliteit</span> voor de laagste prijs!
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <DoneIcon />{' '}
          <p className="text-[#195B35]">
            <span className="font-bold">Gratis verzending</span> boven de €300,-
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <DoneIcon /> <p className="text-[#195B35] font-bold">Snelle levering</p>
        </div>
        <div className="flex gap-1 items-center">
          <DoneIcon /> <p className="text-[#195B35] font-bold">Allround legservice door heel Nederland</p>
        </div>
      </div>
    </div>
  );
};
