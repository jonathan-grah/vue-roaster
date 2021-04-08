import Toast from "../dist/toasters.js";

const TestNotification = new Toast({
	content: "Hello World",
	persistent: true,
	interactable: false
});

const TestNotification2 = new Toast({
	content: "Hello World",
	persistent: true,
	interactable: true
});

const TestNotification3 = new Toast({
	content: "Hello World",
	persistent: true,
	interactable: true
});

// setTimeout(() => {
// 	TestNotification.hide();

// 	setTimeout(() => {
// 		TestNotification.show();
// 	}, 2000);
// }, 2000);
