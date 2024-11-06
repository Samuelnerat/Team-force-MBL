const ColoredCards = ({ icon, title, variant = 'default', className = '' }) => {
  const styles = {
    one: { bgColor: 'bg-[#9FD4F0]', bgGradient: 'bg-stackedOne' },
    two: { bgColor: 'bg-[#7AD178]', bgGradient: 'bg-stackedTwo' },
    three: { bgColor: 'bg-[#F89FBF]', bgGradient: 'bg-stackedThree' },
    default: { bgColor: 'bg-[#B085F8]', bgGradient: 'bg-stackedFour' },
  };

  const { bgColor, bgGradient } = styles[variant] || styles.default;

  return (
    <article className={`relative w-full h-[200px] lg:h-[280px] group ${className}`}>
      <div
        className={`absolute inset-0 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 ${bgColor} rounded-2xl w-full h-full shadow-stackedCard`}
      />
      <div
        className={`relative backdrop-blur-[20px] ${bgGradient} bg-opacity-10 rounded-2xl shadow-custom px-8 py-10 flex flex-col items-start justify-between w-full h-full min-h-full`}
      >
        <div className="mb-4">{icon}</div>
        <p className="text-xl lg:text-2xl font-semibold text-gray-800">{title}</p>
      </div>
    </article>
  );
};

export default ColoredCards;

