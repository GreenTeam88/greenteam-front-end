import { cva } from 'class-variance-authority';
import { CheckIcon, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import type { VariantProps } from 'class-variance-authority';

const singleSelectVariants = cva(
  'm-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300',
  {
    variants: {
      variant: {
        default: 'border-foreground/10 drop-shadow-md text-foreground bg-card hover:bg-card/80',
        secondary: 'border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        inverted: 'inverted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface SingleSelectFormFieldProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof singleSelectVariants> {
  asChild?: boolean;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
    imageUrl?: string; // Add this line to include imageUrl in options
  }[];
  defaultValue?: string;
  disabled?: boolean;
  placeholder: string;
  btnClassName?: string;
  menuClassName?: string;
  placeholderClassName?: string;
  menuListItemsClassName?: string;
  onValueChange: (value: string) => void;
}

const SingleSelectFormField = React.forwardRef<HTMLButtonElement, SingleSelectFormFieldProps>(
  (
    {
      btnClassName,
      menuClassName,
      placeholderClassName,
      menuListItemsClassName,
      options,
      defaultValue,
      onValueChange,
      placeholder,
      ...props
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = React.useState<string>(defaultValue || '');
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

    React.useEffect(() => {
      setSelectedValue(defaultValue || '');
    }, [defaultValue]);

    const handleOptionSelect = (value: string) => {
      setSelectedValue(value);
      onValueChange(value);
      setIsPopoverOpen(false); // Close the dropdown after selection
    };

    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            {...props}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            className={cn(
              'flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-card',
              btnClassName
            )}
          >
            {selectedValue ? (
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center overflow-hidden text-sm">{selectedValue}</div>
                <ChevronDown className="h-4 ml-2 cursor-pointer text-muted-foreground" />
              </div>
            ) : (
              <div className="flex items-center justify-between w-full mx-auto">
                <span className={cn('text-sm text-gray-600 mx-3', placeholderClassName)}>{placeholder}</span>
                <ChevronDown className="h-4 cursor-pointer text-muted-foreground ml-2" />
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn('w-[200px] p-0 drop-shadow-sm', menuClassName)}
          align="start"
          onEscapeKeyDown={() => setIsPopoverOpen(false)}
        >
          <Command>
            <CommandList>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selectedValue === option.value;
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => handleOptionSelect(option.value)}
                      style={{
                        pointerEvents: 'auto',
                        opacity: 1,
                      }}
                      className={cn(
                        'cursor-pointer px-3 py-1.5',
                        'hover:bg-green-50',
                        menuListItemsClassName,
                        isSelected ? 'bg-green-50 font-bold text-green-900' : ''
                      )}
                    >
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className={cn(
                              'mr-2 rounded-[2px] !outline-transparent !ring-transparent flex h-4 w-4 items-center justify-center border border-green-100',
                              isSelected ? 'bg-green-600 text-white rounded-s-sm' : 'opacity-50 [&_svg]:invisible'
                            )}
                          >
                            <CheckIcon className={`h-4 w-4 ${isSelected ? 'text-white' : ''}`} />
                          </div>
                          <span>{option.label}</span>
                        </div>

                        {/* Move the Image to the Right Side */}
                        {option.imageUrl && (
                          <Image
                            src={option.imageUrl}
                            alt={option.label}
                            width={50}
                            height={50}
                            className="ml-2 rounded-sm transition-transform duration-200 ease-in-out hover:scale-130"
                          />
                        )}
                      </div>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

SingleSelectFormField.displayName = 'SingleSelectFormField';

export default SingleSelectFormField;
