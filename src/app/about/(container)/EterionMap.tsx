"use client";
import InteractiveMap from "@/components/map/InteractiveMap";

export default function EterionMap() {
    return (
        <div className="relative w-full p-4 shadow-2xl backdrop-blur-lg">
            {/* header Section */}
            <div className="relative px-2 pb-4 sm:px-4">
                {/* gradient for glow, still can't work tho i don't get gradient;-;*/}
                <div
                    className="absolute left-0 top-0 h-[10rem] w-[30rem] rounded-full"
                    style={{
                        backgroundImage: `linear-gradient(,
                            #3a1d95 0%, 
                            #e6e7e3 50%,
                            #dbf77e 50%,
                            #3a1d95 100%
                        )`,
                        filter: "blur(120px)",
                    }}
                    aria-hidden="true"
                ></div>
                <h1 className="relative text-2xl font-bold text-white mt-5 mb-5">
                    Eterion Map
                </h1>

                {/* Map Section */}
                <div className="mt-4">
                    <InteractiveMap />
                </div>
            </div>
        </div>
    );
}