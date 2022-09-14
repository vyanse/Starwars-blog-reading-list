import React, { useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Card from "../component/card.js";

export const Home = () => {
	
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getInfomation()
	},[])

	return (
		<div className="container">
			
			<h1 className="p-title my-3">Characters</h1>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.characters && store.characters.map((alien)=> {
					return <Card key={alien.uid} item={alien} endpoint="people"/>
				})}
			</div>
			
			<h1 className="p-title my-3">Planets</h1>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.planets && store.planets.map((planet)=> {
					return <Card key={planet.uid} item={planet} endpoint="planets"/>
				})}
			</div>

			<h1 className="p-title my-3">Vehicles</h1>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.vehicles && store.vehicles.map((vehicle)=> {
					return <Card key={vehicle.uid} item={vehicle} endpoint="vehicles"/>
				})}
			</div>
		</div>
	);

}

	
