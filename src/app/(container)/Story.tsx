import ARView from "@/components/layouts/Story/StorySection";


export default function Story() {
  return (
    <section>
      <div className="w-full h-screen py-10">
        <div className="flex justify-start pt-8">          
        <div
          className="absolute w-[60%] h-[100px] bg-gradient-to-t from-[#0B068E] to-[#310E61] opacity-90 blur-xl -z-10"
          style={{
            // clipPath: 'ellipse(60% 40% at 50% 50%)',
            borderRadius: '60% 40% 60% 40% / 60% 60% 40% 40%',
            top: '230px',
            left: '-70px',
          }}
        />
          <h1 className="text-5xl font-bold font-nexa">Our Story</h1>
        </div>        
          <ARView imageval="/images/background.png" />              
        {/* <StorySection /> */}
        {/* jangan dihapus dulu yang masih dicomment */}
      </div>
    </section>
  );
}

