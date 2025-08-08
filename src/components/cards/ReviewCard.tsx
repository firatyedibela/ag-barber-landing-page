import type { Review } from '../../types';
import { Stars } from '../Stars';
import googleIcon from '../../assets/google-icon.svg';

export const ReviewCard = (props: Review) => {
  const { avatar, owner, stars, timeAgo, review, href } = props;

  return (
    <a
      href={href}
      target="_blank"
      className="w-[300px] h-[200px] m-auto block flex flex-col gap-3 p-4 shadow-[0_0_5px_1px_#D1D5DB] rounded-lg hover:scale-102 transition duration-150"
    >
      <div className="flex justify-between">
        <div className="flex gap-3 items-start">
          <img
            src={avatar}
            alt="profile image of review owner"
            className="w-13 h-13"
          />
          <div>
            <h4 className="text-[15px] font-semibold max-w-[150px]">{owner}</h4>
            <span className="text-black/80 text-[14px]">{timeAgo}</span>
          </div>
        </div>
        <img className="w-8 h-8" src={googleIcon} alt="google icon" />
      </div>
      <Stars rating={stars} />
      <p className="text-[15px]">{review}</p>
    </a>
  );
};
