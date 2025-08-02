import instagramIcon from '../assets/instagram-icon.svg';
import phoneIcon from '../assets/phone-icon.svg';

type BarberCardProps = {
  avatar: string;
  name: string;
  title: string;
  introduction: string;
  instagram: string;
  phone: string;
};

export const BarberCard = ({
  avatar,
  name,
  title,
  introduction,
  instagram,
  phone,
}: BarberCardProps) => {
  return (
    <div className="max-w-[420px]">
      <div className="h-[260px] bg-[#3C3A3A]/60 shadow-sm flex justify-center items-center rounded-t-[40px]">
        <img
          className="w-[180px] h-[180px] rounded-full bg-gray-500 "
          src={avatar}
          alt="avatar image"
        />
      </div>
      <div className="flex flex-col gap-3 items-center px-8 py-5 bg-[#D9D9D9] shadow-lg rounded-b-[15px]">
        <div className="flex flex-col items-center">
          <h3 className="text-[22px] font-semibold">{name}</h3>
          <span className="text-[18px] font-medium text-black/60">{title}</span>
        </div>
        <div className="h-[1px] w-full max-w-[350px] bg-black"></div>
        <p className="text-[16px] font-medium leading-[140%] text-black/100 text-center">
          {introduction}
        </p>
        <div className="h-[1px] w-full max-w-[350px] bg-black"></div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <img
              className="w-[35px] h-[35px]"
              src={instagramIcon}
              alt="instagram icon"
            />
            <span>@{instagram}</span>
          </div>
          <div className="flex gap-4 items-center">
            <img
              className="w-[35px] h-[35px]"
              src={phoneIcon}
              alt="phone icon"
            />
            <span>+90 {phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
