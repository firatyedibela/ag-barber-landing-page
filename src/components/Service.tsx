type ServiceProps = {
  icon: string;
  title: string;
  description: string;
};

export const Service = ({ icon, title, description }: ServiceProps) => {
  return (
    <div className="max-w-[510px] flex flex-col gap-3 items-center">
      <img className="w-10 h-10" src={icon} alt="" />
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-[24px] font-semibold text-center">{title}</h3>
        <p className="text-[#757575] text-center">{description}</p>
      </div>
    </div>
  );
};
