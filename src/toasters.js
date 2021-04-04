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
		/** handles mouse drag **/
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
				this.handleInputLoss();
				window.removeEventListener("mousemove", move, false);
			}, false);
		}, false);

		/** handles touch devices **/
		this.element.addEventListener("touchstart", event => {
			const initialX = this.element.getBoundingClientRect().x;
			let shiftX = event.touches[0].clientX - initialX;

			const move = ({ touches }) => {
				// if multiple touches on device, none are registered to the toast anymore
				if (touches.length === 1) {
					let pageX = touches[0].pageX

					let opacity = 1.2 - Math.abs(pageX - shiftX - initialX) / 100;
					this.element.style.opacity = opacity;
					this.element.style.left = `${pageX - shiftX - initialX}px`;
				}
			}

			window.addEventListener("touchmove", move, false);

			window.addEventListener("touchend", () => {
				this.handleInputLoss();
				window.removeEventListener("touchmove", move, false);
			}, false);
		}, false);
	}

	handleInputLoss() {
		if (this.element.style.opacity < 0.15) return this.clear();
		else {
			this.element.style.opacity = 1;
			this.element.style.left = 0;
			this.element.style.transition = "opacity .2s linear, left .2s linear";
			setTimeout(() => {
				this.element.style.transition = null;
			}, 200)
		}
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
