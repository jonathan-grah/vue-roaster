import Toast from "../dist/toasters.js";

const TestNotification = new Toast({
	content: "Hello World",
	persistent: true,
	interactable: false
});

setTimeout(() => {
	TestNotification.hide();

	setTimeout(() => {
		TestNotification.show();
	}, 2000);
}, 2000);
