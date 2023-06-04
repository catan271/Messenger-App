const Body = () => {
  return (
    <div className="grid grid-cols-1 h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover bg-black"
        autoPlay
        playsInline>
        Hello
      </video>
      <video
        className="w-full h-full object-cover bg-black hidden"
        autoPlay
        playsInline>
        Hello
      </video>
    </div>
  );
};

export default Body;
