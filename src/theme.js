export const THEME = (() => {
    const COLOR = {
        PRIMARY: '#FF3937',
        SECONDARY: '#FF7E5B',
        LIGHT: '#fff',
        DARK: '#000'
    }
    const GRADIENT = {
      FROM: COLOR.SECONDARY,
      TO: COLOR.PRIMARY,
    }

    return {
        COLOR,
        GRADIENT
    }
})()

