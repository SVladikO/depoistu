import React from "react";

const MailIcon = ({
      style = {},
      fill = "#000";
      width = "100%",
      className = "",
      viewBox = "0 0 16 12"
                  }) => (
      <svg
        width = {width}
        style = {style}
        height = {width}
        viewBox = {viewBox}
        xmlns = "http://www.w3.org/2000/svg"
        className = {`svg-icon ${className || ""}`}
        xmlnsXlink = "http://www.w3.org/1999/xlink"
        >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.896798 0.0032948 0.0032948 0.896798 0 2V10C0.0032948 11.1032 0.896798 11.9967 2 12H14C15.1032 11.9967 15.9967 11.1032 16 10V2C15.9967 0.896798 15.1032 0.0032948 14 0H2ZM8 7L2 2H14L8 7Z" fill={fill}/>
      </svg>
)
export default MailIcon;