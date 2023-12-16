import { createContext, useEffect, useState } from "react";
import {SecondaryButton} from "components";

const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({ uwConfig, onImageUpload}) {
    const [loaded, setLoaded] = useState(false);

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

                    window.myWidget = window.cloudinary.createUploadWidget(
                        uwConfig,
                        (error, result) => {
                            if (!error && result && result.event === "success") {
                                console.log("Image uploaded", {result}, {onImageUpload});
                                onImageUpload(result.info);
                            }
                        }
                    );
                 });
                document.body.appendChild(script);
            } else {
                alert('already loaded')
                // If already loaded, update the state
                setLoaded(true);
            }
        } else {

        }
    }, [loaded]);

    return (
        <CloudinaryScriptContext.Provider value={{ loaded }}>
            <SecondaryButton clickHandler={() => window.myWidget.open()} isWide withPadding>
                Загрузити фото
            </SecondaryButton>
        </CloudinaryScriptContext.Provider>
    );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
