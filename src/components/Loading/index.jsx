import spinner from '../../assets/spinner.svg';

const Loading = () => {
  return (
    <div className="w-full grid place-content-center h-full">
      <img src={spinner} alt="spinner" className="animate-spin w-[40px]" />
    </div>
  );
};

export default Loading;
