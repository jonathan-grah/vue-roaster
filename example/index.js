import Toast from "../dist/toasters.js";

// const TestNotification = new Toast({
// 	content: "persistent",
// 	persistent: true,
// 	interactable: false
// });

const TestNotification1 = new Toast("Hello world 1 asdsad asds", { persistent: true });


const TestNotification2 = new Toast({
	content: "Hello World test 2",
	persistent: true,
	interactable: false
});

// setTimeout(() => {
// 	TestNotification2.show();
// }, 2000);


// setTimeout(() => {
// 	TestNotification2.visible = false;
// }, 4000);

const TestNotification3 = new Toast("lorem ispum lorem hello lorem ispum lorem ispum lorem ispum lorem ispum ", { interactable: false });

