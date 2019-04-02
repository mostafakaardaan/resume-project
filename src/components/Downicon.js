import React, {component} from "react";
import PropTypes from 'prop-types';

const DownIcon = (props, context) => {
  const { theme: { colorPrimary } } = context;
    return (
        <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "-34px",
          transform: "translateY(-45px)"
        }}
      >
        <div
          style={{
            color: colorPrimary ,
            maxWidth: "30px"
          }}
        >
          <img src={props.icon}  />
        </div>
      </div>
    )
}
DownIcon.contextTypes = {
  theme: PropTypes.any
};
export default DownIcon;