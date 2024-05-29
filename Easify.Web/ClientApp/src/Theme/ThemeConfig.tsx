import { Color } from "./Enums";
import { Theme, ThemeType } from "./Model";

export const THEMES: Record<ThemeType, Theme> = {
    Default: {
        '--primary': Color.HIT_GRAY,
        '--secondary': Color.DARKGRAY,
        '--background': Color.SHERPA_BLUE,
        '--white': Color.WHITE,
        '--transparent': Color.TRANSPARENT_SHERPA
    },
    Violet: {
        '--primary': Color.LIGHT_VIOLET,
        '--secondary': Color.DARKBROWN,
        '--background': Color.DARK_VIOLET,
        '--white': Color.WHITE,
        '--transparent': Color.TRANSPARENT_VIOLET
    },
    Black: {
        '--primary': Color.GRAY,
        '--secondary': Color.WHITE,
        '--background': Color.BLACK,
        '--white': Color.WHITE,
        '--transparent': Color.TRANSPARENT_GRAY
    },
    LightBlue: {
        '--primary': Color.LIGHT_TURQUOISE_BLUE,
        '--secondary': Color.DARKBROWN,
        '--background': Color.BRIGHT_TURQUOISE_BLUE,
        '--white': Color.WHITE,
        '--transparent': Color.TRANSPARENT_TURQUOISE
    },
    DarkBlue: {
        '--primary': Color.LIGHT_BLUE,
        '--secondary': Color.DARKGRAY,
        '--background': Color.DARK_BLUE,
        '--white': Color.WHITE,
        '--transparent': Color.TRANSPARENT_BLUE
    },
    Green: {
        '--primary': Color.LIGHT_GREEN,
        '--secondary': Color.DARKBROWN,
        '--background': Color.GREEN,
        '--white': Color.WHITE,
        '--transparent': Color.TRANSPARENT_GREEN
    },
    Indigo: {
        '--primary': Color.LIGHT_INDIGO,
        '--secondary': Color.DARKBROWN,
        '--background': Color.INDIGO,
        '--white': Color.WHITE,
        '--transparent': Color.TRANSPARENT_INDIGO
    },
    Yellow: {
        '--primary': Color.LIGHT_YELLOW,
        '--secondary': Color.DARKBROWN,
        '--background': Color.SUPER_NOVA,
        '--white': Color.WHITE,
        '--transparent': Color.TRANSPARENT_YELLOW
    }
};
