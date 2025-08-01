export const styles = {
  paddingX: {
    value: 18,
    label: "Horizontal Padding",
    type: "range",
    css: ["padding-left", "padding-right"],
    tw: "px",
  },
  paddingY: {
    value: 12,
    label: "Vertical Padding",
    type: "range",
    css: ["padding-top", "padding-bottom"],
    tw: "py",
  },
  color: {
    value: "#ffffff",
    label: "Text Color",
    type: "color",
    css: "color",
    tw: "color",
  },
  background: {
    value: "#1ca0ba",
    label: "Background Color",
    type: "color",
    css: "background-color",
    tw: "bg",
  },
  corners: {
    value: 4,
    label: "Corner Radius",
    type: "range",
    css: "border-radius",
    tw: "rounded",
  },
};
