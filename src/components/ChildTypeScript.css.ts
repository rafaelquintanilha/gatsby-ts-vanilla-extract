import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  backgroundColor: "#eee",
  ":hover": {
    backgroundColor: "#aaa",
  },
});

globalStyle(`${container} > span`, {
  fontWeight: 600,
});
