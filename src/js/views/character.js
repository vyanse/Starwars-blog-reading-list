import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsImg from "../../img/starwars.jpg";

export const Character = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getCharacter(params.uid, params.endpoint);
	}, []);
	

    /*useEffect(() => {
        actions.getCharacterByuid(params.uid);
    },[]);*/

	return (
		<div className="container">
			<div className="row">
				<div className="col">
				<img src={starWarsImg} className="img-details img-top" alt="..."  />
				</div>
				<div className="col">
				<h2 className="text-black">
					{store.details && store.details.properties.name}
				</h2>
					<p className="text-black">
					Sed quis posuere nulla. Donec vel nisl porta, volutpat ex
					ultrices, sollicitudin magna. Ut mattis, justo at ornare
					consequat, nunc erat tempus ex, et facilisis lectus metus a diam.
					Ut posuere dolor sed sapien volutpat commodo. Vestibulum placerat,
					massa eget bibendum sollicitudin, sem nulla commodo turpis, nec
					egestas ex libero eu leo. Sed viverra libero vel purus tincidunt
					efficitur. Integer elementum augue sed metus efficitur, ac viverra
					sem aliquam. Vivamus neque libero, placerat id luctus eu,
					consectetur nec ante. Nunc euismod tincidunt lacus at volutpat.
					Etiam ultricies, nulla quis vehicula bibendum, dolor augue
					eleifend nunc, quis bibendum lacus eros vitae lectus. Maecenas sit
					amet nibh vel felis posuere fermentum.
					</p>{""}
					
				</div>
			</div>
			<hr className="linea" style={{color:"#FF0000", widht:"100%", height:"5px"}}></hr>
			<div className="row p-title" style={{color:"#FF0000"}}>
			
				<div className="col">
					<h3 className="p-title">Name</h3>
					<span style={{color:"#000000"}}>{store.details && store.details.properties.name}</span>
				</div>
				
				<div className="col">
				<h3>{params.endpoint == "people" ? "Birth": params.endpoint == "planets" ? "Diameter": "Model"}</h3>
				<span style={{color:"#000000"}}>{params.endpoint == "people" ? store.details && store.details.properties.birth_year : params.endpoint == "planets" ? store.details && store.details.properties.diameter : store.details && store.details.properties.model}</span>
				</div>
			
				
				<div className="col">
				<h3>{params.endpoint == "people" ? "Gender": params.endpoint == "planets" ? "Gravity": "vehicle_class"}</h3>
				<span style={{color:"#000000"}}>{params.endpoint == "people" ? store.details && store.details.properties.gender : params.endpoint == "planets" ? store.details && store.details.properties.gravity : store.details && store.details.properties.vehicle_class}</span>

				</div>
				
				<div className="col">
				<h3>{params.endpoint == "people" ? "Height": params.endpoint == "planets" ? "Climate": "cargo_capacity"}</h3>
				<span style={{color:"#000000"}}>{params.endpoint == "people" ? store.details && store.details.properties.height : params.endpoint == "planets" ? store.details && store.details.properties.climate : store.details && store.details.properties.cargo_capacity}</span>

				</div>
				
				<div className="col">
				<h3>{params.endpoint == "people" ? "Skin color": params.endpoint == "planets" ? "Terrain": "manufacturer"}</h3>
				<span style={{color:"#000000"}}>{params.endpoint == "people" ? store.details && store.details.properties.skin_color : params.endpoint == "planets" ? store.details && store.details.properties.terrain : store.details && store.details.properties.manufacturer}</span>
				</div>
				
				<div className="col">
				<h3>{params.endpoint == "people" ? "Eye color": params.endpoint == "planets" ?"orbital_period": "length"}</h3>
				<span style={{color:"#000000"}}>{params.endpoint == "people" ? store.details && store.details.properties.eye_color : params.endpoint == "planets" ? store.details && store.details.properties.orbital_period : store.details && store.details.properties.length}</span>
				</div>

			
			</div>
    	</div>
	);
};
