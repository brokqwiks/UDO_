import { useEffect} from "react";
import { TCross } from "../../types/TCross";
import icons_cross from "/svg/icons_cross.svg";
import styles from './cross.module.scss'

export const Cross = ({setCross}: TCross) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            setCross(false);
          }
        };
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [setCross]);
    return <img onClick={() => setCross(false)} src={icons_cross} alt="cross" className={styles.cross}/>
}