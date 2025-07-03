"use client";
import IndonesiaMap from "./IndonesiaMap";
import LocationMarker from "./LocationMarker";

const locations = [
    {
        id: "sumut",
        name: "Sumatera Utara",
        orang: 2,
        top: "23%",
        left: "9%",
    },
    {
        id: "jambi",
        name: "Jambi",
        orang: 1,
        top: "34%",
        left: "15%",
    },
    {
        id: "sumsel",
        name: "Sumatera Selatan",
        orang: 1,
        top: "39.7%",
        left: "18.4%",
    },
    {
        id: "banten",
        name: "Banten",
        orang: 9,
        top: "54%",
        left: "24%",
    },
    {
        id: "jakarta",
        name: "DKI Jakarta",
        orang: 5,
        top: "53%",
        left: "27%",
    },
    {
        id: "jabar",
        name: "Jawa Barat",
        orang: 13,
        top: "56%",
        left: "29%",
    },
    {
        id: "jateng",
        name: "Jawa Tengah",
        orang: 11,
        top: "57%",
        left: "33.3%",
    },
    {
        id: "jatim",
        name: "Jawa Timur",
        orang: 63,
        top: "58%",
        left: "37.5%",
    },
    {
        id: "bali",
        name: "Bali",
        orang: 3,
        top: "59.2%",
        left: "44.6%",
    },
    {
        id: "kalsel",
        name: "Kalimantan Selatan",
        orang: 1,
        top: "29%",
        left: "47%",
    },
    {
        id: "kalteng",
        name: "Kalimantan Tengah",
        orang: 2,
        top: "37%",
        left: "39%",
    },
    {
        id: "kaltim",
        name: "Kalimantan Timur",
        orang: 4,
        top: "40%",
        left: "43.5%",
    },
    {
        id: "sulsel",
        name: "Sulawesi Selatan",
        orang: 1,
        top: "46%",
        left: "53.5%",
    },
    {
        id: "papua",
        name: "Papua",
        orang: 1,
        top: "45%",
        left: "91.6%",
    },
];

export default function InteractiveMap() {
    return (
        <div className="relative w-full overflow-hidden">
            {/*  the Gradient Background */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-40"
                aria-hidden="true"
            >
                <div
                    className="h-[10rem] w-[40rem] rounded-full"
                    style={{
                        backgroundImage: `conic-gradient(
                            from 90deg at 50% 50%,
                            #3a1d95 0%, 
                            #e6e7e3 50%,
                            #dbf77e 50%,
                            #3a1d95 100%
                        )`,
                        filter: "blur(120px)",
                    }}
                ></div>
            </div>
            {/* The Map and Markers */}
            <div className="relative mx-auto w-full max-w-5xl max-h-xl aspect-[4/3]">
                <IndonesiaMap />

                {locations.map((location) => (
                    <LocationMarker key={location.id} locationData={location} />
                ))}
            </div>
        </div>
    );
}