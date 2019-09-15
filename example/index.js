import Toast from "../dist/toasters.js";

const toast = new Toast({ content: "This is a test for content", persistant: true, position: {
	horizontal: "right",
	vertical: "bottom"
}});