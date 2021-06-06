import { keysProperty } from "../main";
const keyMove = () => {
	document.addEventListener("keydown", (event: KeyboardEvent) => {
		const key = event.key;
		if (key === "ArrowUp") {
			keysProperty.up = true;
		}
		if (key === "ArrowRight") {
			keysProperty.right = true;
		}
		if (key === "ArrowDown") {
			keysProperty.down = true;
		}
		if (key === "ArrowLeft") {
			keysProperty.left = true;
		}
	});

	document.addEventListener("keyup", (event: KeyboardEvent) => {
		const key = event.key;
		if (key === "ArrowUp") {
			keysProperty.up = false;
		}
		if (key === "ArrowRight") {
			keysProperty.right = false;
		}
		if (key === "ArrowDown") {
			keysProperty.down = false;
		}
		if (key === "ArrowLeft") {
			keysProperty.left = false;
		}
	});
};

export { keyMove };
