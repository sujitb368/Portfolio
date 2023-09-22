import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section id="about">
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
          {/* <p className={styles.desc}>
            I am enthusiastic about creating exceptional web experiences, and
            I'm always eager to take on new projects that allow me to push the
            boundaries of what's possible. If you're looking for a dedicated and
            skilled full-stack developer to bring your ideas to life, let's
            connect and make it happen!
            <hr />
            Thank you for visiting my portfolio website. Feel free to explore my
            work, and if you'd like to get in touch, please don't hesitate to
            reach out through the contact form. Let's work together to bring
            your ideas to life in the digital world!
          </p> */}
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
