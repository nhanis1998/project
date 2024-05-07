import React from "react";

export default function Login() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          zIndex: "-1",
          position: "fixed",
        }}
      >
        <source
          src="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          type="video/mp4"
        />
      </video>

      <div>
        <div
          style={{
            width: 500,
            height: 500,
            background: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div>Login Website</div>
        </div>
      </div>
    </div>
  );
}
