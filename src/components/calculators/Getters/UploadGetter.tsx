import CustomDropzone from '@/components/custom/CustomDropzone';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import InfoTooltip from '@/components/ui/info-tooltip';

interface UploadGetterProps {
  form: any;
  name?: string;
  label?: string;
  tooltip?: string;
  required?: boolean;
  onFilesChange: (files: File[]) => void;
}

export default function UploadGetter({
  form,
  name = 'files',
  label,
  tooltip,
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
            <FormLabel className="font-normal text-textBlack80 text-sm inline-flex items-center gap-1">
              <span>{label}</span>
              {tooltip && <InfoTooltip text={tooltip} />}
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
