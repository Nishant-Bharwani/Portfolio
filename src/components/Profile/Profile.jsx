import { FaDownload } from "react-icons/fa";
import styles from "./Profile.module.css";

function Profile() {
    return (
        <div className={styles.profileCard}>
            <div className={styles.profileText}>
                <h1>
                    <span className={styles.hello}>Hello</span>
                    <br />
                    My name is Nishant...
                </h1>
                <h2>I'm a student at SKIT, Jaipur</h2>
                <h2>
                    and a{" "}
                    <span style={{ color: "#ff8906" }}>Web Developer</span>

                </h2>
                <a href='/Nishant_Bharwani_Resume.pdf' target='_blank' rel='noopener noreferrer'>
                    Resume <FaDownload className='tooltip-svg' />
                </a>
            </div>
            {/* <ProfilePhoto /> */}
        </div>
    );
}

export default Profile;
