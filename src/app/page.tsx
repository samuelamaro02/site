import styles from './page.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Samuel Amaro</h1>
      <p className={styles.subtitle}>Desenvolvedor Frontend | Criando experiências interativas</p>
      <div className={styles.links}>
        <a
          href="https://www.behance.net/samuelamaro4"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Meu Projeto
        </a>
        <a
          href="https://wa.me/5583998404188?text=Sim,%20vc%20fez%20deploy."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Contato via WhatsApp
        </a>
      </div>
    </section>
  );
}
