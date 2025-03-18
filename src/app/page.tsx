import Image from "next/image";
import styles from './page.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Samuel Amaro</h1>
      <p className={styles.subtitle}>Desenvolvedor Frontend | Criando experiências interativas</p>
      <div className={styles.links}>
        <button className={styles.button}>Projetos</button>
        <button className={styles.button}>Contato</button>
      </div>
    </section>
  );
}
