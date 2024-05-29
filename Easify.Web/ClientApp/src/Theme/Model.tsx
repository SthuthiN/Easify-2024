import { Color } from "./Enums";

export type ThemeType = ThemeName.Default | ThemeName.Violet | ThemeName.Black | ThemeName.LightBlue | ThemeName.DarkBlue | ThemeName.Green | ThemeName.Indigo 

export interface Theme {
    '--primary': Color;
   '--secondary': Color;
    '--background': Color;
    '--white': Color;
    '--transparent': Color;
}

export interface IThemeContextProps {
    themeType: ThemeType;
    theme: Theme;
}

export enum ThemeName {
    Default = 'Default',
    DarkBlue = 'DarkBlue',
    Indigo = 'Indigo',
    Green = 'Green',
    LightBlue = 'LightBlue',
    Violet = 'Violet',
    Black = 'Black',
    //Yellow = 'Yellow'

}