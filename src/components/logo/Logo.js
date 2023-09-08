import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../theme/ThemeProvider";
import "./Logo.css";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    position: "fixed",
    bottom: theme.spacing(91),
    right: theme.spacing(205.7),
    width: "40px",
    height: "40px",
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles();

  return (
    <div>
      {theme === "light" ? (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="1600.000000pt"
          height="1600.000000pt"
          viewBox="0 0 1600.000000 1600.000000"
          preserveAspectRatio="xMidYMid meet"
          className={classes.svgHover}
        >
          <g
            transform="translate(0.000000,1600.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M3550 9975 l0 -4605 950 0 950 0 0 2065 0 2065 1335 0 1335 0 0
-3835 0 -3835 950 0 950 0 0 3835 0 3835 1410 0 1410 0 0 770 0 770 -3695 0
-3695 0 0 1770 0 1770 -950 0 -950 0 0 -4605z"
            />
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_5" data-name="Layer 5">
                <path
                  d="M3550 9975 l0 -4605 950 0 950 0 0 2065 0 2065 1335 0 1335 0 0
     -3835 0 -3835 950 0 950 0 0 3835 0 3835 1410 0 1410 0 0 770 0 770 -3695 0
     -3695 0 0 1770 0 1770 -950 0 -950 0 0 -4605z"
                />
                <rect
                  className="cls-1"
                  x="133.62"
                  y="57.1"
                  width="9.9"
                  height="108.08"
                  rx="3.75"
                />
                <rect
                  className="cls-1"
                  x="30.39"
                  y="21.71"
                  width="9.9"
                  height="112.54"
                  rx="3.75"
                  transform="translate(-38.83 35.21) rotate(-35.65)"
                />
                <rect
                  className="cls-1"
                  x="90.6"
                  y="-17.08"
                  width="9.9"
                  height="201.44"
                  rx="3.75"
                  transform="translate(65.78 -39.81) rotate(35.24)"
                />
                <rect
                  className="cls-1"
                  x="78.17"
                  y="39.68"
                  width="9.9"
                  height="201.55"
                  rx="3.75"
                  transform="translate(96.28 -22.22) rotate(35.24)"
                />
              </g>
            </g>
          </g>
        </svg>
      ) : (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="1600.000000pt"
          height="1600.000000pt"
          viewBox="0 0 1600.000000 1600.000000"
          preserveAspectRatio="xMidYMid meet"
          className={classes.svgHover}
        >
          <g>
            <path
              fill="#fefffe"
              d="M 354.5,141.5 C 418.167,141.5 481.833,141.5 545.5,141.5C 545.5,265.5 545.5,389.5 545.5,513.5C 794.5,513.5 1043.5,513.5 1292.5,513.5C 1292.5,565.167 1292.5,616.833 1292.5,668.5C 1198.5,668.5 1104.5,668.5 1010.5,668.5C 1010.5,923.833 1010.5,1179.17 1010.5,1434.5C 946.833,1434.5 883.167,1434.5 819.5,1434.5C 819.5,1179.17 819.5,923.833 819.5,668.5C 728.167,668.5 636.833,668.5 545.5,668.5C 545.5,799.833 545.5,931.167 545.5,1062.5C 481.833,1062.5 418.167,1062.5 354.5,1062.5C 354.5,755.5 354.5,448.5 354.5,141.5 Z"
            />
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_5" data-name="Layer 5">
                <path
                  d="M3550 9975 l0 -4605 950 0 950 0 0 2065 0 2065 1335 0 1335 0 0
     -3835 0 -3835 950 0 950 0 0 3835 0 3835 1410 0 1410 0 0 770 0 770 -3695 0
     -3695 0 0 1770 0 1770 -950 0 -950 0 0 -4605z"
                />
                <rect
                  className="cls-1"
                  x="133.62"
                  y="57.1"
                  width="9.9"
                  height="108.08"
                  rx="3.75"
                />
                <rect
                  className="cls-1"
                  x="30.39"
                  y="21.71"
                  width="9.9"
                  height="112.54"
                  rx="3.75"
                  transform="translate(-38.83 35.21) rotate(-35.65)"
                />
                <rect
                  className="cls-1"
                  x="90.6"
                  y="-17.08"
                  width="9.9"
                  height="201.44"
                  rx="3.75"
                  transform="translate(65.78 -39.81) rotate(35.24)"
                />
                <rect
                  className="cls-1"
                  x="78.17"
                  y="39.68"
                  width="9.9"
                  height="201.55"
                  rx="3.75"
                  transform="translate(96.28 -22.22) rotate(35.24)"
                />
              </g>
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};
