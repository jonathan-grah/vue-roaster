document.body.style.backgroundColor = "#eee";

const container = document.getElementById("toasts-content");

let incrementer = 0;

export default class Toast {
	// should add type checking
	constructor({ content, persistant, timeout }) {
		this.identifier = `toast-${incrementer}`;
		incrementer++;

		this.visible = false;

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
			container.insertAdjacentHTML("beforeend", `<div class="toast ${this.identifier}">${this.content}</div>`);
			this.find();
		} else
			this.element.innerHTML = this.content;

		this.visible = true;
	}

	dragListener() {
		this.element.addEventListener("mousedown", event => {
			const initialX = this.element.getBoundingClientRect().x;
			let shiftX = event.clientX - initialX;

			const move = ({ pageX }) => {
				let opacity = 1.2 - Math.abs(pageX - shiftX - initialX) / 100;
				this.element.style.opacity = opacity;
				this.element.style.left = `${pageX - shiftX - initialX}px`;
			}

			window.addEventListener("mousemove", move, false);

			window.addEventListener("mouseup", () => {
				if (this.element.style.opacity < 0.15) return this.clear();
				else {
					this.element.style.opacity = 1;
					this.element.style.left = 0;
					this.element.style.transition = "opacity .2s linear, left .2s linear";
					setTimeout(() => {
						this.element.style.transition = null;
					}, 200)
				}
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
