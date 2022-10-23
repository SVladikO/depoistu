export const THEME = (() => {
    const COLOR = {
        PRIMARY: '#FF3937',
        ACCENT1: '#383949',
        ACCENT2: '#F5F6FB',
        ACCENT3: '#FF7E5B',
        ACCENT4: '#FFFFFF',
    }
    const GRADIENT = {
      FROM: COLOR.ACCENT3,
      TO: COLOR.PRIMARY,
    }

    return {
        COLOR,
        GRADIENT
    }
})()

