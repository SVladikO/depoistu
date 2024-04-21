import {keyframes} from "styled-components";

export const COLOR = {
    PRIMARY:  '#458845',
    SECONDARY:  '#96CC00',
    ACCENT1: '#3B3A3F',
    ACCENT2: '#f3f3f3',
    ACCENT4: '#FFFFFF',
    ACCENT5: '#B5B5B5',
    ACCENT6: '#FF3937',
    ACCENT7: '#F6EBEF',
    ACCENT8: '#f3f3f3',
    ACCENT9: '#E6E8E9',
    ACCENT10: '#013f09',
    ACCENT11: '#737272',
    WARNING1: '#F1C21B',
    WARNING2: '#FFF8E1',
    INFO1: '#0244CF',
    INFO2: '#EDF5FF',
    ERROR1: '#DA1E28',
    ERROR2: '#FFF1F1',
    SUCCESS1: '#25A249',
    SUCCESS2: '#DEFCE6',
    WHITE: '#FFFFFF',
}

export const GRADIENT = {
    FROM: COLOR.SECONDARY,
    TO: COLOR.PRIMARY,
}

export const FONT = {
    SIZE_12: `
        font-size: 12px;
        line-height: 14px;
        `,
    SIZE_14: `
        font-size: 14px;
        line-height: 16px;
        `,
    SIZE_16: `
        font-size: 16px;
        line-height: 18px;
        `,
    SIZE_18: `
        font-size: 18px;
        line-height: 22px;
        `,
    SIZE_20: `
        font-size: 20px;
        line-height: 24px;
        `,
    SIZE_22: `
        font-size: 22px;
        line-height: 26px;
        `,
    SIZE_24: `
        font-size: 24px;
        line-height: 29px;
        `,
    SIZE_30: `
        font-size: 30px;
        line-height: 34px;
        `,
    SIZE_32: `
        font-size: 32px;
        line-height: 38px;
        `,
    WEIGHT_400: `font-weight: 400;`,
    WEIGHT_500: `font-weight: 500;`,
    WEIGHT_600: `font-weight: 600;`,
    WEIGHT_700: `font-weight: 700;`
}

export const BORDER_RADIUS = {
    BUTTON: '5px',
    DAY_IN_SCHEDULE: '8px',
    SUB_CATEGORY: '12px',
    COMPANY: '0px',
    MENU_ITEM: '0',
    FIRST: '0px',
    CITY_POPUP: '20px',
    THIRD: '0px',
    FOURTH: '0px',
    CIRCLE: '50%',
    INPUT: '4px',
    NOTIFICATION: '10px'
}

export const DEVICE_WIDTH = {
    MIN: '370px',
    MAX: '414px',
}

export const MEDIA = {
    phone: "(max-width: 414px) and (min-width: 370px)"
}

export const SHADOW = `box-shadow: rgba(0, 0, 0, 0.11) 0px 2px 4px 0px;`
export const SHADOW_DARK = `box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px 0px;`

export function lighterDarkerColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

export function hexToRgbA(hex, a = 1) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + a + ')';
    }
    throw new Error('Bad Hex');
}

export const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
