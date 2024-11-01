import styles from "./communityCard.module.scss";
import { useCommunityCard } from "../../lib/useCommunityCard";
import { TCommunityCard } from "../../types/TCommunityCard";

export const CommunityCard = ({
  icon,
  name,
  descr,
  url,
  aboutBtn,
}: TCommunityCard) => {
  
  const { hover, setHover, windowWidth, paragraphWidth } = useCommunityCard();

  return (
    <article
      className={styles.cardMain}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={icon} alt="name" />

      <h1>{name}</h1>

      <p style={{ width: paragraphWidth }}>{descr}</p>

      <a href={url} target="_blank" id="123" rel="noopener noreferrer">
        {aboutBtn}
        <span
          style={{
            transform: hover
              ? windowWidth > 1025
                ? "translateX(20px)"
                : "translateX(7px)"
              : "translateX(0)",
          }}
        >
          {" >"}
        </span>
      </a>
    </article>
  );
};
