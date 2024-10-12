import { Dispatch, ReactNode, SetStateAction } from "react";
import { i18n, TFunction } from "i18next";

export type TNavigationHeader = {
    navBar: ReactNode,
    setNavBar: Dispatch<SetStateAction<boolean>>,
    scrollHeader: (height: number) => void,
    t: TFunction<"translation", undefined>,
    changeLanguages: (lng: string) => void,
    i18n: i18n
}