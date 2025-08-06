type StarsProps = {
  rating: number;
};

export const Stars = ({ rating }: StarsProps) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill={i < rating ? '#fdd663' : '#d1d5db'}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </span>
      ))}
    </div>
  );
};
