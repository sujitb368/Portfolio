import styles from "./styles.module.css";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${styles.nav_container}`}
    >
      <div className={`${styles.nav_left}`}>
        <a href="#home">Sujit</a>
      </div>
      <button className={`d-md-none btn me-3 ${styles.hamburger}`}>
        <MenuIcon />
      </button>

      <div className={`${styles.nav_right} ${styles.mobile_nav}`}>
        <a href="#about" className={`${styles.nav_link}`}>
          <span>01.</span>About
        </a>
        <a href="#experience" className={`${styles.nav_link}`}>
          <span>02.</span>Experience
        </a>
        <a href="#work" className={`${styles.nav_link}`}>
          <span>03.</span>Work
        </a>
        <a href="#contact" className={`${styles.nav_link}`}>
          <span>04.</span>Contact
        </a>
        <button className={`${styles.nav_resume_btn}`}>Resume</button>
      </div>
    </nav>
  );
}

export default Navbar;
