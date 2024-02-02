import {createContext, useEffect, useState} from "react";
import {SecondaryButton} from "components";
import {translate, TRANSLATION} from "utils/translation";

const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({uwConfig, onImageUpload}) {
    const [loaded, setLoaded] = useState(false);
    const [isWidgetLoading, setIsWidgetLoading] = useState(false);

    useEffect(() => {
        if (!loaded) {
            const uwScript = document.getElementById("uw");

            if (!uwScript) {
                // If not loaded, create and load the script
                const script = document.createElement("script");
                script.setAttribute("async", "");
                script.setAttribute("id", "uw");
                script.src = "https://upload-widget.cloudinary.com/global/all.js";

                script.addEventListener("load", () => {
                    setLoaded(true)
                });
                document.body.appendChild(script);
            } else {
                // If already loaded, update the state
                setLoaded(true);
            }
        }

    }, [loaded]);

    const openUploadWidget = () => {
        if (isWidgetLoading) {
            return;
        }

        setIsWidgetLoading(true)
        window.myWidget = window.cloudinary.createUploadWidget(
            uwConfig,
            (error, result) => {
                setIsWidgetLoading(false);
                if (!error && result && result.event === "success") {
                    onImageUpload(result.info);
                }
            }
        );

        window.myWidget.open()
    }

    return (
        <CloudinaryScriptContext.Provider value={{loaded}}>
            <SecondaryButton clickHandler={openUploadWidget} isWide withPadding isLoading={isWidgetLoading}>
                {translate(
                    isWidgetLoading
                        ? TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.WIDGET_LOADING
                        : TRANSLATION.PAGE.EDIT_MENU_ITEM.BUTTON.LOAD_IMAGE
                )
                }
            </SecondaryButton>
        </CloudinaryScriptContext.Provider>
    );
}

export default CloudinaryUploadWidget;
export {CloudinaryScriptContext};
