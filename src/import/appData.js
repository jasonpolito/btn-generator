export const appData = {
  tabs: {
    active: "base",
    all: {
      base: {
        label: "Base",
      },
      hover: {
        label: "Hover",
      },
      focus: {
        label: "Focus",
      },
    },
  },
  variables: {
    paddingX: {
      value: {
        base: 18,
        hover: 18,
        focus: 18,
      },
      label: "Horizontal Padding",
      type: "range",
      css: ["padding-left", "padding-right"],
      tw: "px",
    },
    paddingY: {
      value: {
        base: 12,
        hover: 12,
        focus: 12,
      },
      label: "Vertical Padding",
      type: "range",
      css: ["padding-top", "padding-bottom"],
      tw: "py",
    },
    color: {
      value: {
        base: "#ffffff",
        hover: "#ffffff",
        focus: "#ffffff",
      },
      label: "Text Color",
      type: "color",
      css: "color",
      tw: "color",
    },
    background: {
      value: {
        base: "#1ca0ba",
        hover: "#1ca0ba",
        focus: "#1ca0ba",
      },
      label: "Background Color",
      type: "color",
      css: "background-color",
      tw: "bg",
    },
    corners: {
      value: {
        base: 4,
        hover: 4,
        focus: 4,
      },
      label: "Corner Radius",
      type: "range",
      css: "border-radius",
      tw: "rounded",
    },
  },
};
