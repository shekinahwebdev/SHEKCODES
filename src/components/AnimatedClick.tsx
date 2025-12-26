const AnimatedClick = () => {
  // const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col md:flex-row items-center justify-center space-x-0 md:space-x-2 space-y-2 md:space-y-0 absolute top-1/2 left-1/3 lg:top-8/12 transform -translate-x-1/3 lg:-translate-1/3 -translate-y-1/2 text-white text-xl">
      <p className="hover:underline text-5xl font-bold lg:font-light md:text-2xl">
        Click Here
      </p>
      <div className="arrow-wrapper justify-center flex items-center space-x-0 md:space-x-2">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default AnimatedClick;
