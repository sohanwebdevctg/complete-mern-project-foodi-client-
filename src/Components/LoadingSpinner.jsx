import spinner from '../../public/spinner.svg';


const LoadingSpinner = () => {
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="w-full">
      <img src={spinner}></img>
    </div>
  </div>
</div>
  );
};

export default LoadingSpinner;