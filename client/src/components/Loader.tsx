import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <PulseLoader />
    </div>
  );
};

export default Loader;
