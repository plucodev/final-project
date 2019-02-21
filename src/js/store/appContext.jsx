import React from "react";
import getState from "./store.js";
import fetch from "isomorphic-fetch";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			// this function is the equivalent to "window.onLoad"
			// it only run once on the entire application lifetime
			// you should do your ajax requests here

			// fetch(
			// 	"https://final-project-backend-plucodel.c9users.io/api/procedures/"
			// )
			// 	.then(response => response.json())
			// 	.then(data => {
			// 		let { store } = this.state;
			// 		store.procedures = data;
			// 		this.setState({ store });
			// 	});

			// fetch(
			// 	"https://fp-backend-plucodel.c9users.io/api/contacts/?first_name=Paolo"
			// )
			// 	.then(response => response.json())
			// 	.then(data => {
			// 		let { store } = this.state;
			// 		store.contactList = data;
			// 		this.setState({ store });
			// 		console.log(data);
			// 	});

			fetch("https://fpb-v2-plucodel.c9users.io/api/procedures/")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.procedures = data;
					this.setState({ store });
				});

			// fetch("https://fpb-v2-plucodel.c9users.io/api/locations/")
			// 	.then(response => response.json())
			// 	.then(data => {
			// 		let { store } = this.state;
			// 		store.locations = data;
			// 		this.setState({ store });
			// 	});

			// fetch(
			// 	"https://fp-backend-plucodel.c9users.io/api/contacts/?first_name=Paolo"
			// )
			// 	.then(response => response.json())
			// 	.then(data => {
			// 		let { store } = this.state;
			// 		store.contactList = data;
			// 		this.setState({ store });
			// 		console.log(data);
			// 	});
			// fetch("https://fpb-v2-plucodel.c9users.io/api/users/")
			// 	.then(response => response.json())
			// 	.then(data => {
			// 		let { store } = this.state;
			// 		store.users = data;
			// 		this.setState({ store });

			// 		// console.log(data);
			// 	});

			fetch("https://fpb-v2-plucodel.c9users.io/api/specialtys/")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.specialties = data;
					this.setState({ store });

					// console.log(data);
				});

			fetch("https://fpb-v2-plucodel.c9users.io/api/providers/")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.providers = data;
					this.setState({ store });
					// console.log(data);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
