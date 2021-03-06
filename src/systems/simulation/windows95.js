"use strict";

var powerLevel = require("../../powerLevel");

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
  ecs.addEach(function windows95(entity, elapsed) { // eslint-disable-line no-unused-vars
    var powerThreshold = game.entities.getComponent(entity, "powerThreshold");
    var animation = game.entities.getComponent(entity, "animation");
    animation.loop = false;
    if (powerThreshold > powerLevel.get()) {
      animation.frame = 0;
      //animation.speed = 0;
    } else {
      animation.speed = 1;
    }

  }, "powerThreshold");
};
