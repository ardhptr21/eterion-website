import SectionHeaderRight from "@/components/commons/SectionHeaderRight";
import CircleGradient from "@/components/commons/CircleGradient";

export default function SectionHeader() {
    const headerContainerStyle: React.CSSProperties = {
        display: 'grid',
        justifyItems: 'end', 
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
        margin: '2rem 0',
    };

  const gridChildStyle = {
    // make both components occupy the same grid cell
    gridColumn: '1 / -1',
    gridRow: '1 / -1',
  };

  return (
    <main>
        <div style={headerContainerStyle}>
            <div style={gridChildStyle}>
                <CircleGradient />
            </div>

            <div style={gridChildStyle}>
                <SectionHeaderRight
                    title="Our Philosophy"
                    subtitle="The Way Behind Eterion"
                />
            </div>
        </div>
    </main>
  )
}