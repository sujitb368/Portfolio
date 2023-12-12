import styles from "./styles.module.css";

function Home() {
  return (
    <section
      className={`mt-5 pt-5 mt-md-0 pt-md-0${styles.home_section}`}
      id="home"
    >
      <p className={styles.greet}>Hi, my name is</p>
      <h1 className={styles.heading_1}>Sujit Barman.</h1>
      <h1 className={styles.heading_2}>I build things for the web.</h1>
      <p className={styles.desc}>
        I am a passionate and skilled full-stack developer with two years of
        hands-on experience in creating robust and user-friendly web
        applications. My expertise spans across a wide range of technologies,
        allowing me to bring ideas to life and solve complex problems
        effectively.
      </p>
      <a href="#work">
        <button className={styles.btn}>Check out my work !</button>
      </a>
    </section>
  );
}

export default Home;
