import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCanvasPosition } from "./utils/formulas";
import Canvas from "./components/Canvas";

class App extends Component {
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);
    window.onresize = () => {
      const cnv = document.getElementById("stupid-go-home-canvas");
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        trackMouse={event => this.trackMouse(event)}
      />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired
};

export default App;
// componentDidMount: вы задали этот метод жизненного цикла (lifecycle method) для запуска интервала (setInterval), который вызывает экшн moveObjects;
// trackMouse: задан для обновления свойства canvasMousePosition компонента App. Это свойство задействовано в экшне moveObjects. Заметьте, что это свойство не имеет отношения к позиции мыши над HTML-документом. Позиция мыши вычисляется относительно холста. Так же была определена функция canvasMousePosition.
// render: необходим для передачи свойств угла (angle) и метода trackMouse к вашему компоненту Canvas. Этот компонент использует angle для обновления вращения вашей пушки и trackMouse для присоединения к элементу SVG в качестве слушателя событий.
// App.propTypes: теперь здесь определяются два свойства: angle и moveObjects. Первое задает угол наклона, под которым целится ваша пушка. Второe, moveObjects — это функция, которая обновляет положение пушки во время срабатывания интервала.
