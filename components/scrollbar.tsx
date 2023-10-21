"use client";

import Scrollbars, { ScrollValues } from "rc-scrollbars";
import React from "react";

const ScrollbarWrapper = (props: { children: React.ReactNode }) => {
  const [top, setTop] = React.useState(0)
  const handleUpdate = (values: ScrollValues) => {
    setTop(values.top);
  };

  const renderThumb = ({ style, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const thumbStyle = {
      backgroundColor: `rgb(${Math.round(255 - top * 255)}, ${Math.round(
        255 - top * 255,
      )}, ${Math.round(255 - top * 255)})`,
      borderRadius: 'inherit',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <Scrollbars
      style={{
        zIndex: "1",
        width: "100%",
        height: "100vh",
        overflowX: "hidden",
      }}
      renderThumbVertical={renderThumb}
      autoHide
      onUpdate={handleUpdate}
      universal={true}
    >
      {props.children}
    </Scrollbars>
  );
};

export default ScrollbarWrapper;
