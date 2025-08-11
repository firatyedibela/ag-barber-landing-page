import { ArrowDown } from '../svg/ArrowDown';

export const ScrollDownButton = () => {
  const handleScrollDown = () => {
    const el = document.getElementById('section-services');
    if (el) {
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      aria-label="scroll down"
      className="more-info-btn cursor-pointer"
      onClick={handleScrollDown}
    >
      <ArrowDown />
    </button>
  );
};
