import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <section className={styles.profile}>
      <h3>About Me</h3>
      <p>
        I am currently studying coding at CodeWeekend.
        I love coding, learning new technologies, and building projects.
      </p>
    </section>
  );
};

export default Profile;
