import InfoOverlay from "./InfoOverlay";

export default function LocationMarker({
    locationData,
}: {
    locationData: {
        name: string;
        orang: number;
        top: string;
        left: string;
    };
}) {
    const markerStyle = {
        top: locationData.top,
        left: locationData.left,
    };

    return (
        <div
            style={markerStyle}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
        >
            <div className="relative flex h-6 w-6 cursor-pointer items-center justify-center transition-transform duration-300 group-hover:scale-110 filter drop-shadow-xl/50 drop-shadow-black">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-3 border-white bg-transparent"></div>
                {/* Inner Circle */}
                <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            {/* The overlay is hidden by default and shown on group-hover */}
            <div className="invisible absolute top-full left-1/2 mt-2 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <InfoOverlay
                    name={locationData.name}
                    orang={locationData.orang}
                />
            </div>
        </div>
    );
}
