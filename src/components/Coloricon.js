import React, {component} from "react"

const ColorIcon = (props) => {
    return (
        <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "left",
          justifyContent: "left",
          marginBottom: " -34px",
          transform: "translateY(-13px)"
        }}
      >
        <div>
          <img src={props.icon} style={{
            maxWidth: "45px"
          }}/>
        </div>
      </div>
    )
}

export default ColorIcon;