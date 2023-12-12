import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section className="pt-3" id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>Hello,</p>
          <p className={styles.desc}>
            I'm Sujit Barman, a dedicated and experienced full-stack developer
            based in Kolkata, India. With a strong passion for creating digital
            solutions and a background of over two years in the industry, I've
            had the privilege of working on a wide range of projects that have
            honed my skills and allowed me to grow as a developer.
          </p>
          <p className={styles.desc}>
            Over the years, I've had the opportunity to work with a diverse set
            of technologies and tools, and I've found my niche in creating web
            applications that are both functional and visually appealing.
          </p>
          <p className={styles.desc}>
            What I find most rewarding about my work is the opportunity to solve
            complex problems. I approach challenges with enthusiasm and a
            detail-oriented mindset, ensuring that the solutions I provide are
            not only effective but also efficient. The field of web development
            is constantly evolving, and I'm committed to staying up-to-date with
            the latest trends and best practices. Continuous learning is a
            fundamental part of my professional journey, and I relish the
            opportunity to expand my knowledge and skill set
          </p>
        </div>
        {/* <div className={styles.right}>
          <img
            src="./images/profile.jpg"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div> */}
      </div>
    </section>
  );
}

export default About;
