import styles from "./partners.module.scss";
import partners_icon_users from '../../../../public/partners_icon_users.svg'
export const Partners = () => {
  return (
    <section className={styles.partnersContainer}>
      <div className={styles.partnersHeading}>
        <h2>Our Partners</h2>
        <img loading="lazy" src={partners_icon_users} alt="" />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ae50c9a9e5fdbf14b9382cd0903203ec4bfa092842edd419e6009837550766?placeholderIfAbsent=true&apiKey=3527a7c709f44ff99b5721dcacc53223"
        alt="Our partners logos"
        className={styles.allPartners}
      />
    </section>
  );
};
