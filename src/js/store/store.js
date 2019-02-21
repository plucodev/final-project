import PropTypes from "prop-types";
import fetch from "isomorphic-fetch";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			parameter: "ciao",
			demo: [
				{
					title: "Blood Test",
					price: "$ 99",
					estimated: "Estimated National Average $156",
					content:
						"With supporting text below as a natural lead-in to additional content."
				},
				{
					title: "Mammogram ",
					price: "$ 120",
					estimated: "Estimated National Average $196",
					content:
						"With supporting text below as a natural lead-in to additional content."
				},
				{
					title: "MRI with Contrast",
					price: "$ 120",
					estimated: "Estimated National Average $156",
					content:
						"With supporting text below as a natural lead-in to additional content."
				},
				{
					title: "Colonoscopy",
					price: "$ 120",
					estimated: "Estimated National Average $206",
					content:
						"With supporting text below as a natural lead-in to additional content."
				}
			],

			contactList: [],
			procedures: [],
			locations: [],
			specialties: [],
			specialty: [],
			proceduresLocations: [],
			providers: [],
			searchResults: [],
			procedures_test: [
				{
					id: "",
					providerName: "",
					providerDescription: "",
					providerID: "",
					procedureDescription: "",
					price: "",
					procedureName: "",
					locationAddress: "",
					locationZipCode: "",
					locationCity: "",
					locationState: "",
					locationLat: "",
					locationLong: ""
				}
			],

			providers_test: [
				{
					name: "Northern Lousisana Medical Center",
					about:
						"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.",
					locations: [
						{
							id: 1,
							address: "8000 West Ave",
							city: "Miami",
							state: "Florida",
							zip_code: 33141,
							procedures: [
								{
									id: 4,
									name: "Barium Swallow (Esophagram)",
									price: 99,
									category: "Imaging"
								},
								{
									id: 7,
									name: "Bone Density DXA Scan",
									price: 199,
									category: "Labs"
								},
								{
									id: 9,
									name: "Complex X-ray",
									price: 159,
									category: "General Medicine"
								}
							]
						},
						{
							id: 2,
							address: "1234 West Ave",
							city: "Orlando",
							state: "Florida",
							zip_code: 33159,
							procedures: [
								{
									id: 4,
									name: "Barium Swallow (Esophagram)",
									price: 99,
									category: "Imaging"
								},
								{
									id: 7,
									name: "Bone Density DXA Scan",
									price: 199,
									category: "Labs"
								},
								{
									id: 10,
									name: "CT Scan with Contrast",
									price: 168,
									category: "General Medicine"
								}
							]
						}
					]
				},
				{
					name: "Miami Dade Hospital",
					locations: [
						{
							id: 1,
							address: "8000 West Ave",
							city: "Miami",
							state: "Florida",
							zip_code: 33141,
							procedures: [
								{
									id: 4,
									name: "Barium Swallow (Esophagram)",
									price: 99,
									category: "Imaging"
								},
								{
									id: 7,
									name: "Bone Density DXA Scan",
									price: 199,
									category: "Labs"
								},
								{
									id: 9,
									name: "Complex X-ray",
									price: 159,
									category: "General Medicine"
								}
							]
						},
						{
							id: 2,
							address: "1234 West Ave",
							city: "Orlando",
							state: "Florida",
							zip_code: 33159,
							procedures: [
								{
									id: 4,
									name: "Barium Swallow (Esophagram)",
									price: 99,
									category: "Imaging"
								},
								{
									id: 7,
									name: "Bone Density DXA Scan",
									price: 199,
									category: "Labs"
								},
								{
									id: 10,
									name: "CT Scan with Contrast",
									price: 168,
									category: "General Medicine"
								}
							]
						}
					]
				}
			],

			cart: [],

			// users: [],
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
			updateQuantity: (id, math, history) => {
				const store = getStore();

				let cartItem = store.cart.find(products => {
					return products.id === id;
				});
				if (math === "add") {
					cartItem.quantity = cartItem.quantity + 1;
				} else if (math === "minus" && cartItem.quantity > 0) {
					cartItem.quantity = cartItem.quantity - 1;
				}

				setStore({ store: store });

				history.push("/cart");
			},

			addProductToCart: cpt => {
				const store = getStore();

				let index = store.cart.findIndex(procedures => {
					return procedures.cpt == cpt;
				});
				if (index == -1) {
					store.cart.push({
						CPT_Code: cpt
					});
				}

				setStore({ store: store });
			},

			removeItemFromCart: (index, history) => {
				const store = getStore();

				store.cart.splice(index, 1);

				setStore({ store: store });

				history.push("/cart");
			},

			searchProcedure: (input, zipInput, props) => {
				const store = getStore();

				fetch(
					"https://fpb-v2-plucodel.c9users.io/api/procedures/?search=" +
						input +
						"&location__zip_code=" +
						zipInput
				)
					.then(response => response.json())
					.then(data => {
						store.searchResults = data;
						setStore({ store: store });
					});

				props.history.push("/search-results");
			},

			singleProcedureDetails: (id, props) => {
				const store = getStore();
				store.locations = [];
				fetch(
					"https://fpb-v2-plucodel.c9users.io/api/locations/?zip_code=&procedure=" +
						id +
						"&name=&provider="
				)
					.then(response => response.json())
					.then(data => {
						store.locations = data;
						// console.log(data);
						setStore({ store: store });
					});
				props.history.push("/procedure/" + id);
			},

			getCompleteProcedure: (
				id,
				procedureN,
				procedureD,
				cpt,
				providerN,
				providerD,
				providerID,
				locationA,
				locationZ,
				locationC,
				locationS,
				locationL,
				locationLo,
				price,
				props
			) => {
				const store = getStore();

				store.procedures_test[0].id = id;
				store.procedures_test[0].procedureName = procedureN;
				store.procedures_test[0].procedureDescription = procedureD;
				store.procedures_test[0].CPT_Code = cpt;
				store.procedures_test[0].providerName = providerN;
				store.procedures_test[0].providerDescription = providerD;
				store.procedures_test[0].providerID = providerID;
				store.procedures_test[0].locationAddress = locationA;
				store.procedures_test[0].locationZipCode = locationZ;
				store.procedures_test[0].locationCity = locationC;
				store.procedures_test[0].locationState = locationS;
				store.procedures_test[0].locationLat = locationL;
				store.procedures_test[0].locationLong = locationLo;
				store.procedures_test[0].price = price;

				let tempProvSpec = store.specialties.filter(x => {
					return x.provider === providerID;
				});

				// console.log(tempProvSpec);
				setStore({ store: store });
				props.history.push("/specialty/" + id);
			},

			// METHOD TO LOG IN
			// EXISTED USER WITH EMAIL AND PASSWORD

			signInUserClick: (emailInput, passwordInput, history) => {
				const store = getStore();
				// let attempt = 3;
				let userLogIndex = store.users.findIndex(x => {
					return x.email === emailInput;
				});
				console.log(userLogIndex);

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
			},

			// REGISTER NEW PATIENT METHOD
			// PARAMETERS PROVIDED: USERNAME, FIRST NAME, LAST NAME, PASSWORD, EMAIL

			registerNewPatient: (
				username,
				firstname,
				lastname,
				email,
				password,
				props
			) => {
				const store = getStore();
				fetch("https://fpb-v2-plucodel.c9users.io/api/users/", {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						username: username,
						first_name: firstname,
						last_name: lastname,
						email: email,
						password: password
					})
				}).then(getDataUpdated => {
					fetch("https://fpb-v2-plucodel.c9users.io/api/users/")
						.then(response => response.json())
						.then(data => {
							store.users = data;
							setStore({ store: store });
						});
				});
				props.history.push("/");
			},

			// LOGIN METHOD
			// ALLOWS THE LOGIN TO AN EXISTING USER
			patientLogin: (email, password) => {
				const store = getStore();
				let userLogIndex = store.users.findIndex(x => {
					return x.email === email;
				});
				// console.log(userLogIndex);

				if (
					(email === store.users[userLogIndex].email &&
						password === store.users[userLogIndex].password) ||
					(email === store.users[userLogIndex].email &&
						password === store.users[userLogIndex].password)
				) {
					alert("Login Successfully!");
					let log = true;
					fetch(
						"https://fpb-v2-plucodel.c9users.io/api/users/" +
							store.users[userLogIndex].id,
						{
							method: "post",
							headers: { "Content-type": "application/json" },
							body: JSON.stringify({
								profile: [{ is_loggedIn: log }]
							})
						}
					);

					setStore({ store: store });
					// history.push("/");
				} else {
					alert("Try Again");
				}
			}
		}
	};
};
// getState.propTypes = {
// 	history: PropTypes.object
// };
export default getState;
