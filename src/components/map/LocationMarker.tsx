import InfoOverlay from "./InfoOverlay";

export default function LocationMarker({
  locationData,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  locationData: {
    name: string;
    orang: number;
    top: string;
    left: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) {
  const markerStyle = {
    top: locationData.top,
    left: locationData.left,
  };

  return (
    <div
      style={markerStyle}
      className={"absolute -translate-x-1/2 -translate-y-1/2" + (isActive ? " z-20" : " z-10")}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        onClick={onClick}
        className={
          "relative flex h-6 w-6 cursor-pointer items-center justify-center transition-transform duration-300 group-hover:scale-110 filter drop-shadow-xl/50 drop-shadow-black" +
          (isActive ? " scale-110" : "")
        }
      >
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-3 border-accent bg-transparent"></div>
        {/* Inner Circle */}
        <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
      </div>

      {/* The overlay is hidden by default and shown on group-hover */}
      <div
        className={
          "invisible absolute top-full left-1/2 mt-2 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100" +
          (isActive ? " visible opacity-100" : "")
        }
      >
        <InfoOverlay name={locationData.name} orang={locationData.orang} />
      </div>
    </div>
  );
}
