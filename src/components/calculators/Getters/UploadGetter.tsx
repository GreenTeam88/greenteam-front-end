import CustomDropzone from '@/components/custom/CustomDropzone';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

interface UploadGetterProps {
  form: any;
  onFilesChange: (files: File[]) => void; // New prop to pass files to the parent
}

export default function UploadGetter({ form, onFilesChange }: UploadGetterProps) {
  return (
    <FormField
      control={form.control}
      name={'files'}
      render={() => (
        // Removed the 'field' parameter since it's unused
        <FormItem className="w-full flex flex-col gap-y-[0.875rem]">
          <FormControl>
            <CustomDropzone
              onFilesChange={(files) => {
                form.setValue('files', files); // Update form state
                onFilesChange(files); // Pass files to the parent component
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
