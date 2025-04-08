export const Spinner = () => {
  return (
    <div className="flex w-full h-min-screen justify-center items-center z-99">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent border-b-transparent rounded-full ease-in-out duration-2000 animate-spin flex items-center justify-center">
        <div className="w-4 h-4 border-4 border-blue-500 border-t-transparent border-b-transparent rounded-full ease-in-out duration-2000 animate-spin">
        </div>
      </div>
    </div>
  );
};