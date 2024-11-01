import { ReactNode, Ref} from "react";

export type TButton  = {
    children: ReactNode,
    onClick?: () => void,
    className?: string | undefined,
    title: string,
    textForScreenReaders: string,
    refButton?: Ref<HTMLButtonElement>
}