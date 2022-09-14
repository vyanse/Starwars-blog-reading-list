const BASEURL = "https://www.swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			detalles: null,
			character: null,
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getCharacter: (id,endpoint) => {
				fetch(`${BASEURL}${endpoint}/${id}`)
				.then((response) => response.json())
				.then((data) => 				  
					setStore({ details: data.result })
				)
				.catch((err) => console.log(err));
			},
			AgregarFavoritos: (name,url) =>{
				let store = getStore()
				const favs = [...store.favorites, {favName: name, url:url}];
				setStore({favorites:favs})
				
			  },
			EliminarFavorite:(position) =>{
				let store = getStore()
				const newFav = store.favorites.filter((fav,index) => index !== position);
				setStore({favorites:newFav})
			  },
			getInfomation: async() => {
				const p1 = fetch(BASEURL + '/people/');
				const p2 = fetch(BASEURL + '/planets/');
				const p3 = fetch(BASEURL + '/vehicles/');
				let [people,planets,vehicles] = await Promise.all([p1,p2,p3])
				if(people.ok){
					let body = await people.json()
					setStore({characters: body.results})
				}
				if(planets.ok){
					let body = await planets.json()
					setStore({planets: body.results})
				}
				if(vehicles.ok){
					let body = await vehicles.json()
					setStore({vehicles: body.results})
				}
				//fetch(baseURL + 'people/').then(response => response.json()).then(data => setStore({characters: data.results})).catch(err => console.log(err))
			  },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacterByUid: (id)=>{
				fetch(BASEURL + 'people/'+id).then(response => response.json()).then(data => setStore({character: data.result})).catch(err => console.log(err))
					// console.log(typeof BASEURL)
			},
		}
	};
};

export default getState;
