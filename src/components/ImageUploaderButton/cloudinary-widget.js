import { createContext, useEffect, useState } from "react";
import {SecondaryButton} from "components";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({ uwConfig, setPublicId }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Check if the script is already loaded
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

                    var myWidget = window.cloudinary.createUploadWidget(
                        uwConfig,
                        (error, result) => {
                            if (!error && result && result.event === "success") {
                                console.log("Done! Here is the image info: ", result.info);
                                setPublicId(result.info.public_id);
                            }
                        }
                    );

                    document.getElementById("upload_widget")
                        .addEventListener("click", () => myWidget.open(), false);

                });
                document.body.appendChild(script);
            } else {

                // If already loaded, update the state
                setLoaded(true);
            }
        }
    }, [loaded]);

    const initializeCloudinaryWidget = () => {
        // // These two rows block from creating more than one
        // const iframe = document.querySelector('iframe')
        // // if (iframe) return;return
        //
        // if (loaded && !iframe) {
        //
        // }
    };

    return (
        <CloudinaryScriptContext.Provider value={{ loaded }}>
            <SecondaryButton
                id="upload_widget"
                clickHandler={initializeCloudinaryWidget}
            >
                Загрузити фото
            </SecondaryButton>
        </CloudinaryScriptContext.Provider>
    );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
