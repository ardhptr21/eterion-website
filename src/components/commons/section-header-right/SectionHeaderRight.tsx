import styles from "./SectionHeaderRight.module.css";

export default function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}