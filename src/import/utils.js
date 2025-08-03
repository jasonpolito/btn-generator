export function stylesObjectToCssMap(styles, variant) {
  return Object.entries(styles).reduce((acc, [key, style]) => {
    if (Array.isArray(style.css)) {
      style.css.forEach((cssKey) => {
        acc[cssKey] =
          style.value[variant ?? "base"] + (style.type === "color" ? "" : "px");
      });
    } else {
      acc[style.css] =
        style.value[variant ?? "base"] + (style.type === "color" ? "" : "px");
    }
    return acc;
  }, {});
}

export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
