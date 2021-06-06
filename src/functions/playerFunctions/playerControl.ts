"use strict";

import { Player } from "../../class/Player";
import { consts, keysProperty } from "../../main";

const playerControl = (object: Player) => {
	if (keysProperty.up && object.y > object.radius) {
		object.y -= object.vectorY;
	}

	if (keysProperty.right && object.x < consts.canvasWidth - object.radius) {
		object.x += object.vectorX;
	}

	if (keysProperty.down && object.y < consts.canvasHeight - object.radius) {
		object.y += object.vectorY;
	}

	if (keysProperty.left && object.x > object.radius) {
		object.x -= object.vectorX;
	}
};

export { playerControl };
