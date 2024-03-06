import {URL} from "./config";

export const resetSettings = () => {
    localStorage.clear()
    window.location.href = window.location.origin
}

export const resetProjectVersion = () => {
    localStorage.clear()
    window.location.href = window.location.origin + URL.PROJECT_UPDATED;
}



