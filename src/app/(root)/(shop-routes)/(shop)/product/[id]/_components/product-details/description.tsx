export const DescriptionTab = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col py-5">
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};
