import React from "react";
import { pathFromBezierCurve } from "../utils/formulas";

const Title = () => {
  const textStyle = {
    fontFamily: '"Joti One", cursive',
    fontSize: 120,
    fill: "#cbca62"
  };

  const yankeesLineCurve = {
    initialAxis: {
      x: -240,
      y: -950
    },
    initialControlPoint: {
      x: 120,
      y: -50
    },
    endingControlPoint: {
      x: 460,
      y: -50
    },
    endingAxis: {
      x: 500,
      y: 0
    }
  };

  const goHomeLineCurve = {
    ...yankeesLineCurve,
    initialAxis: {
      x: -250,
      y: -780
    },
    initialControlPoint: {
      x: 125,
      y: -90
    },
    endingControlPoint: {
      x: 375,
      y: -90
    },
    endingAxis: {
      x: 500,
      y: 0
    }
  };

  return (
    <g filter="url(#shadow)">
      <defs>
        <path id="YankeesPath" d={pathFromBezierCurve(yankeesLineCurve)} />
        <path id="GoHomePath" d={pathFromBezierCurve(goHomeLineCurve)} />
      </defs>
      <text {...textStyle}>
        <textPath xlinkHref="#YankeesPath">Yankees,</textPath>
      </text>
      <text {...textStyle}>
        <textPath xlinkHref="#GoHomePath">Go Home!</textPath>
      </text>
    </g>
  );
};

export default Title;
