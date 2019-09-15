document.body.style.backgroundColor = "#eee";

const container = document.getElementById("toasts-container");

let incrementer = 0;

export default class Toast {
	// should add type checking
	constructor({ content, persistant, timeout, position }) {
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
			container.insertAdjacentHTML("beforeend", `<div class="toast ${this.identifier} toast-${this.position.horizontal} toast-${this.position.vertical}">${this.content}</div>`);
			this.find();
		} else
			this.element.innerHTML = this.content;

		this.visible = true;
	}

	dragListener() {
		this.element.addEventListener("mousedown", event => {
			let shiftX = event.clientX - this.element.getBoundingClientRect().x;

			const move = ({ pageX }) => {
				console.log(pageX - shiftX - );
				this.element.style.transform = `translateX(${pageX - shiftX}px)`;
			}

			window.addEventListener("mousemove", move, false);

			window.addEventListener("mouseup", () => {
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

const red = new Toast({ content: "ALWAYS RED", persistant: true, position: {
	horizontal: "left",
	vertical: "top"
}});
