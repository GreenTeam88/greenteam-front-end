'use client';

import { Paperclip } from 'lucide-react';

import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from '@/components/extension/file-upload';
import { Button } from '@/components/ui/button';

const FileSvgDraw = () => {
  return (
    <div className={'flex flex-col  gap-y-2 items-center w-[85%] mx-auto'}>
      <div className={'flex flex-col gap-y-2 items-center w-full'}>
        <h4 className={'text-textBlack text-sm font-semibold truncate text-center'}>
          Drag and drop files here or upload
        </h4>
        <p className={'text-xs text-textBlack40 truncate text-center'}>Accepted file types: JPEG, Doc, PDF, PNG</p>
      </div>
      <Button
        type={'button'}
        className={'h-auto py-2 px-4 border-orange-600 border rounded-lg text-orange-600 text-sm w-auto mx-auto'}
      >
        Upload
      </Button>
    </div>
  );
};

interface CustomDropzoneProps {
  files: File[] | null;
  setFiles: (files: File[] | null) => void;
}

const CustomDropzone = ({ files, setFiles }: CustomDropzoneProps) => {
  const dropZoneConfig = {
    maxSize: 1024 * 1024 * 4,
    maxFiles: 5,
    multiple: true,
    accept: {
      'image/*': ['.jpeg', '.png'],
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
    },
  };

  return (
    <FileUploader
      value={files}
      onValueChange={setFiles}
      dropzoneOptions={dropZoneConfig}
      className="relative bg-white flex flex-col items-center"
    >
      <FileInput className="outline-dashed outline-1 outline-white">
        <div className="border-[2px] border-gray py-2 border-dashed rounded-lg ">
          <FileSvgDraw />
        </div>
      </FileInput>
      <FileUploaderContent className={'!p-0 w-full max-w-[85%] mx-auto'}>
        {files &&
          files.length > 0 &&
          files.map((file, i) => (
            <FileUploaderItem
              className={
                'h-auto py-3 px-2 bg-white border border-borderBlack10 rounded-lg flex items-center gap-x-3 w-full'
              }
              key={i}
              index={i}
            >
              <div className="flex-shrink-0">
                {file.type.includes('image') ? (
                  <img src={URL.createObjectURL(file)} alt={file.name} className={'w-9 h-9 rounded-full'} />
                ) : (
                  <Paperclip size={16} />
                )}
              </div>
              <div className={'flex flex-col gap-y-[2px] truncate'}>
                <h5 className={'font-semibold text-xs text-textDefault truncate'}>{file.name}</h5>
                <span className={'font-normal text-xs text-textSecDefault'}>{Math.floor(file.size / 1000)}kb</span>
              </div>
            </FileUploaderItem>
          ))}
      </FileUploaderContent>
    </FileUploader>
  );
};

export default CustomDropzone;
