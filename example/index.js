import Toast from "../dist/toasters.js";

// const TestNotification = new Toast({
// 	content: "persistent",
// 	persistent: true,
// 	interactable: false
// });

const TestNotification2 = new Toast({
	content: "2",
	persistent: true,
	interactable: true
});


setTimeout(() => {
	TestNotification2.show();
}, 2000);


setTimeout(() => {
	TestNotification2.visible = false;
}, 4000);

// const TestNotification3 = new Toast({
// 	content: "lorem ispum lorem hello my name is lorem ispum lorem ispum lorem ispum lorem ispum ",
// 	persistent: true,
// 	interactable: true
// });

