import { ImageResponse } from "next/og";

export const alt =
  "Sanu Raj — Product Engineer. Thoughtfully designed. End-to-end engineered.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#101416",
        color: "#f0f2ed",
        padding: "65px 80px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 25,
        }}
      >
        <span>Sanu Raj</span>
        <span style={{ color: "#b9dfba", fontSize: 20 }}>Kerala, India ↗</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{ fontSize: 100, letterSpacing: "-5px", lineHeight: 1.05 }}
        >
          Product
        </span>
        <span
          style={{
            fontSize: 100,
            letterSpacing: "-5px",
            color: "#b9dfba",
            lineHeight: 1.05,
          }}
        >
          Engineer.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #35433a",
          paddingTop: 25,
          fontSize: 20,
          color: "#a0aaa8",
          justifyContent: "space-between",
        }}
      >
        <span>Modern web · AI-powered products · Backend systems</span>
        <span>Idea → Build → Ship</span>
      </div>
    </div>,
    size,
  );
}
