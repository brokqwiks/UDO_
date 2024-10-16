import { TButton } from "./TButton";
export type TLearnButton = {
    onClick: () => void;
    imgSrc: string;
    text: string;
  } & Pick<TButton, "refButton">