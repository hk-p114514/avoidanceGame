"use strict";

import { drawObject } from "../functions/drawObject";
import { playerControl } from "../functions/playerFunctions/playerControl";
import { consts } from "../main";
import { Character } from "./Character";

class Player extends Character {
	update() {
		super.update();
		playerControl(this);
	}

	draw() {
		drawObject(this, consts.playerColor);
	}
}

export { Player };
