// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./styles.module.css";

function ContactBar() {
  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a
          href="https://www.linkedin.com/in/sujit-barman-1a6a01204/"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/sujitb368"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <GitHubIcon />
        </a>

        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <a href="mailto:johnsmith@gmail.com" className={styles.email}>
          sujitbedu@gmail.com
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default ContactBar;
