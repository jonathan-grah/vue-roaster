document.body.style.backgroundColor = "#eee";

const container = document.getElementById("toasts-container");

let incrementer = 0;

class Toast {
	// should add type checking
	constructor(content, persistant, timeout, position) {
		console.log(position);

		this.identifier = `toast-${incrementer}`;
		incrementer++;

		this.visible = false;

		this.position = position;
		this.content = content;
		this.persistant = persistant;
		this.timeout = timeout;

		if (!this.persistant) this.startTimer();

		this.dragListener();
	}

	get content() {
		return this._content;
	}

	set content(value) {
		this._content = value;
		this.display();
	}

	startTimer() {
		setTimeout(this.clear.bind(this), this.timeout);
	}

	display() {
		if (!this.visible) {
			container.insertAdjacentHTML("beforeend", `<div class="toast ${this.identifier} toast-${this.position} toast-bottom">${this.content}</div>`);
			this.find();
		} else
			this.element.innerHTML = this.content;

		this.visible = true;
	}

	dragListener() {
		this.element.addEventListener("mousedown", event => {

			// this.element.style.position = "absolute";

			// this.element.ondragstart = () => {
			// 	return false;
			// }

			let shiftX = event.clientX - this.element.getBoundingClientRect().x;

			const move = ({ pageX }) => {
				this.element.style.transform = `translate(${pageX - shiftX}px)`;
			}

			console.log("Mousedown");

			window.addEventListener("mousemove", move, false);

			window.addEventListener("mouseup", () => {
				console.log("Mouseup");
				window.removeEventListener("mousemove", move, false);
			}, false);

		}, false);
	}

	find() {
		for (let i = 0; i < container.childNodes.length; i++)
			if (container.childNodes[i].classList.contains(this.identifier))
				return this.element = container.childNodes[i];
	}

	clear() {
		this.element.remove();
	}
}

// const add = (
// 	content,
// 	persistant,
// 	timeout,
// ) => {
// 	const red = new Toast(
// 		content,
// 		persistant,
// 		timeout
// 	);
// }

const red = new Toast("This is a test for content", true, 5000, "right");
const pink = new Toast("ALWAYS HERE AND ALWAYS PINK", true, 5000, "left");


export default {
	
};
