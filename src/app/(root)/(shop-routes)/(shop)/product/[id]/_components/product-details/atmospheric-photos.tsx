export const AtmosphericPhotos = ({ photos }: { photos: string[] }) => {
  return (
    <div className="flex flex-col py-3 gap-7">
      <h3 className="text-[32px] text-paragraph font-medium">Sfeerfoto&apos;s</h3>
      <div className="flex gap-3">
        {photos.map((photo) => (
          <img key={photo} className="w-[288px] h-[300px]" src={photo} />
        ))}
      </div>
    </div>
  );
};
