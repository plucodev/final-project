const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "Blood Test",
					price: "$ 99",
					content:
						"With supporting text below as a natural lead-in to additional content."
				},
				{
					title: "Mammogram ",
					price: "$ 120",
					content:
						"With supporting text below as a natural lead-in to additional content."
				},
				{
					title: "MRI with Contrast",
					price: "$ 120",
					content:
						"With supporting text below as a natural lead-in to additional content."
				},
				{
					title: "Colonoscopy",
					price: "$ 120",
					content:
						"With supporting text below as a natural lead-in to additional content."
				}
			],

			cart: [
				/*
				{
					sku: "5896802",
					quantity: 2
				},
				{
					sku: "77650321",
					quantity: 1
				}
				*/
			],

			users: [
				{
					email: "john@gmail.com",
					password: "1234",
					logStatus: false
				},
				{
					email: "mark@gmail.com",
					password: "5678",
					logStatus: false
				}
			]
		},
		actions: {
			updateQuantity: (sku, math, history) => {
				const store = getStore();

				let cartItem = store.cart.find(products => {
					return products.sku === sku;
				});
				if (math === "add") {
					cartItem.quantity = cartItem.quantity + 1;
				} else if (math === "minus" && cartItem.quantity > 0) {
					cartItem.quantity = cartItem.quantity - 1;
				}

				setStore({ store: store });

				history.push("/cart");
			},

			addProductToCart: (sku, quantity) => {
				const store = getStore();

				let index = store.cart.findIndex(products => {
					return products.sku == sku;
				});
				if (index == -1) {
					store.cart.push({
						sku: sku,
						quantity: quantity
					});
				} else if (quantity > 0) {
					store.cart[index].quantity += quantity;
				}

				setStore({ store: store });
			},

			removeItemFromCart: (index, history) => {
				const store = getStore();

				store.cart.splice(index, 1);

				setStore({ store: store });

				history.push("/cart");
			},

			signInUserClick: (emailInput, passwordInput, history) => {
				const store = getStore();
				// let attempt = 3;
				let userLogIndex = store.users.findIndex(x => {
					return x.email === emailInput;
				});

				if (
					(emailInput === store.users[userLogIndex].email &&
						passwordInput === store.users[userLogIndex].password) ||
					(emailInput === store.users[userLogIndex].email &&
						passwordInput === store.users[userLogIndex].password)
				) {
					alert("Login Successfully");
					store.users[userLogIndex].logStatus = true;
					// alert(store.users[userLogIndex].logStatus);
					setStore({ store: store });
					history.push("/");
				} else {
					// attempt--;
					alert("Try Again");
				}
			}
		}
	};
};

export default getState;
