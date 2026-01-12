import CustomDropzone from '@/components/custom/CustomDropzone';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

interface UploadGetterProps {
  form: any;
  name?: string;
  label?: string;
  required?: boolean;
  onFilesChange: (files: File[]) => void;
}

export default function UploadGetter({
  form,
  name = 'files',
  label,
  required = false,
  onFilesChange,
}: UploadGetterProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className="w-full flex flex-col gap-y-[0.875rem]">
          {label && (
            <FormLabel className="font-normal text-textBlack80 text-sm">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <CustomDropzone
              onFilesChange={(files) => {
                form.setValue(name, files, { shouldValidate: true });
                onFilesChange(files);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
