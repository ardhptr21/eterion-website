import ARView from "@/components/layouts/Story/StorySection";


export default function Story() {
  return (
    <section>
      <div className="w-full h-screen pb-5">
      <ARView imageval="/images/background.png" />      
      {/* <StorySection /> */}
      {/* jangan dihapus dulu yang masih dicomment */}
    </div>
    </section>
  );
}

