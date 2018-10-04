export const MOVE_OBJECTS = "MOVE_OBJECTS";

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition
});
// MOVE_OBJECTS для обновления пушки, анимации пушечных шаров и летающих объектов.
