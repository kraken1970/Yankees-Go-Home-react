import React from "react";
import PropTypes from "prop-types";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";
import CannonBall from "./CannonBall";

const Canvas = props => {
  const viewBox = [
    window.innerWidth /
      -2 /*min-x: это значение определяет самую левую точку, которую могут видеть пользователи. Таким образом, чтобы получить отображение оси (и круга) в центре экрана, ширина экрана делится на 2 со знаком "-" (window.innerWidth / -2) для получения значения атрибута (min-x). Обратите внимание, что необходимо делить именно на (-2), чтобы ваш холст показывал одинаковое количество точек в обе стороны от начала координат. */,
    100 -
      window.innerHeight /*min-y: определяется самая верхняя точка холста. Здесь нужно вычесть значение window.innerHeight из 100, чтобы задать определенную область (100 точек) от начала Y. */,
    window.innerWidth /*width и height: определяют количество точек по осям X и Y, которое пользователь будет видеть на своем экране. */,
    window.innerHeight
  ];
  return (
    <svg
      id="stupid-go-home-canvas"
      // preserveAspectRatio="xMaxYMax none" или использовать meet вместо none
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <Sky />
      {/* svg не понимает z-index */}
      <Ground />
      <CannonPipe rotation={props.angle} />
      <CannonBase />
      <CannonBall position={{ x: 0, y: -100 }} />
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired
};

export default Canvas;
