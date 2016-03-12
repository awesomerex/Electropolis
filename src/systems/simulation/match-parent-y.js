"use strict";

module.exports = function(ecs, game) {
  game.entities.registerSearch("matchParentY", ["position", "matchY"]);
  ecs.addEach(function matchParent(entity, elapsed) { // eslint-disable-line no-unused-vars
    var match = game.entities.get(entity, "matchY");
    var position = game.entities.get(entity, "position");

    var parentPosition = game.entities.get(match.id, "position");
    if (parentPosition === undefined) {
      return;
    }

    game.entities.set(entity, "position", {
      x: position.x,
      y: parentPosition.y + match.offset,
      z: position.z
    });
  }, "matchParentX");
};