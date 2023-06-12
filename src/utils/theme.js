export const COLOR = {
    PRIMARY: '#709900',
    ACCENT1: '#3F3D56',
    ACCENT2: '#F5F6FB',
    ACCENT3: '#96CC00',
    ACCENT4: '#FFFFFF',
    ACCENT5: '#B5B5B5',
    ACCENT6: '#FF3937',
    ACCENT7: '#F6EBEF',
}

export const GRADIENT = {
    FROM: COLOR.ACCENT3,
    TO: COLOR.PRIMARY,
}

export const MEDIA = {
    phone: "(max-width: 414px) and (min-width: 370px)"
}

export const SHADOW = `box-shadow: 0px 2px 2px 0px #00000033;`

export const BORDER_RADIUS = {
    FIRST: '25px',
    SECOND: '10px',
    THIRD: '8px',
    FOURTH: '5px',
    CIRCLE: '50%'
}

export const DEVICE_WIDTH = {
    MIN: '370px',
    MAX: '414px',
}

export function hexToRgbA(hex, a=1){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length=== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' +a+')';
    }
    throw new Error('Bad Hex');
}