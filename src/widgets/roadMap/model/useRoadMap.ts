import roadMap_line from '/icons/roadMap_line.webp'
import roadMap_line_mobilka from '/icons/roadMap_line_mobilka.webp'
import roadMap_line_tablet from '/icons/roadMap_line_tablet.webp'
export const useRoadMap = () => {
    const isScreen = window.screen.width

  const sizeRodmap = () => {
    if(isScreen < 485){
      return roadMap_line_mobilka
    }else if(isScreen < 1025){
      return roadMap_line_tablet
    }else{
      return roadMap_line
    }
  }
  return {sizeRodmap}
}