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

      <button
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        className={`navbar-toggler d-md-none btn me-3 ${styles.hamburger}`}
      >
        <MenuIcon />
      </button>

      <div
        id="navbarContent"
        className={`collapse ms-auto justify-content-md-end  ${styles.mobile} ${styles.block}`}
      >
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
        <a
          href="https://drive.google.com/file/d/1zYJ0eqwPsCOaE4eXSL7BmAIMujIHFy_K/view?usp=sharing"
          target="_"
        >
          <button className={`${styles.nav_resume_btn}`}>Resume</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
