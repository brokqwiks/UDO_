import { TButton } from "./TButton";
export type TLearnButton = {
    onClick: () => void,
    imgSrc: string,
    imgAlt: string,
    title: string,
    textForScreenReaders: string,
    text: string,
  } & Pick<TButton, "refButton">