'use client';

import { Paperclip, Trash2 as RemoveIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from '@/components/extension/file-upload';
import CreateButton from './CreateButton';

const FileSvgDraw = () => {
  return (
    <div className={'flex flex-col  gap-y-2 items-center w-[85%] mx-auto'}>
      <div className={'flex flex-col gap-y-2 items-center w-full'}>
        <h4 className={'text-textBlack text-sm font-semibold truncate text-center'}>
          Drag and drop files here or upload
        </h4>
        <p className={'text-xs text-textBlack40 truncate text-center'}>Accepted file types: JPEG, PNG</p>
      </div>
      <CreateButton
        type={'button'}
        className={
          'h-auto py-2 px-4 border-orange-600 border rounded-lg text-orange-600 text-sm w-auto mx-auto ' +
          'hover:bg-orange-600 hover:text-white transition-colors duration-200'
        }
      >
        Upload
      </CreateButton>
    </div>
  );
};

interface CustomDropzoneProps {
  onFilesChange: (files: File[]) => void;
}

const CustomDropzone = ({ onFilesChange }: CustomDropzoneProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const dropZoneConfig = {
    maxSize: 1024 * 1024 * 5, // 5MB
    maxFiles: 5,
    multiple: true,
    accept: {
      'image/*': ['.jpeg', '.png'],
    },
  };

  const handleFilesChange = (newFiles: File[] | null) => {
    if (!newFiles) return;

    // Combine existing files and new files, ensuring no duplicates
    const updatedFiles = [...files, ...newFiles].filter(
      (file, index, self) =>
        index ===
        self.findIndex((f) => f.name === file.name && f.size === file.size && f.lastModified === file.lastModified)
    );

    // Enforce maxFiles limit
    if (updatedFiles.length > dropZoneConfig.maxFiles) {
      toast.error(`You can only upload up to ${dropZoneConfig.maxFiles} files.`);
      setFiles(updatedFiles.slice(0, dropZoneConfig.maxFiles));
    } else {
      setFiles(updatedFiles);
    }

    onFilesChange(updatedFiles);
  };

  const handleDeleteFile = (fileIndex: number) => {
    const updatedFiles = files.filter((_, index) => index !== fileIndex);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  return (
    <div className="relative">
      <FileUploader
        value={files}
        onValueChange={handleFilesChange}
        dropzoneOptions={dropZoneConfig}
        className="relative bg-white flex flex-col items-center"
      >
        <FileInput className="outline-dashed outline-1 outline-white">
          <div className="border-[2px] border-gray py-10 border-dashed rounded-lg">
            <FileSvgDraw />
          </div>
        </FileInput>
        <FileUploaderContent className="!p-0 w-full max-w-[85%] mx-auto ">
          {files.map((file, i) => (
            <FileUploaderItem
              className="h-auto py-3 px-2 bg-white border border-borderBlack10 rounded-lg flex items-center gap-x-3 w-full"
              key={i}
              index={i}
            >
              <div className="flex-shrink-0">
                {file.type.includes('image') ? (
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-9 h-9 rounded-lg"
                    width={36}
                    height={36}
                  />
                ) : (
                  <Paperclip size={16} />
                )}
              </div>
              <div className="flex flex-col gap-y-[2px] truncate">
                <h5 className="font-semibold text-xs text-textDefault truncate">
                  {file.name.length > 33 ? file.name.slice(0, 31) + '...' : file.name}
                </h5>
                <span className="font-normal text-xs text-textSecDefault">{Math.floor(file.size / 1000)}kb</span>
              </div>
              <div className="ml-auto flex items-center">
                <RemoveIcon
                  type="button"
                  onClick={() => handleDeleteFile(i)}
                  className="w-4 h-4 hover:stroke-destructive duration-200 ease-in-out cursor-pointer hover:text-red-800 transition-all"
                />
              </div>
            </FileUploaderItem>
          ))}
        </FileUploaderContent>
      </FileUploader>
    </div>
  );
};

export default CustomDropzone;
