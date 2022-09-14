import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logo from '../../img/star-wars-logo.png'
import { Context } from "../store/appContext";

export const Navbars = () => {
	const {store,actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
			    <img style={{ width: "100px" }} src={logo}></img>
				</Link>
				<div className="ml-auto">
				<div className="dropdown">
					<button
					className="btn btn-light dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
					>
					Favorites <span className="badge bg-black">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu">
					{/* Aqui van los li */}
					{store.favorites.map((favorite,index) =>{
					return (
						<li className="d-flex align-item-center" key={index}>
						<Link to ={favorite.url} className="dropdown-item">{favorite.favName}</Link>
						<i className="far fa-trash-alt pe-2" onClick={()=>{actions.EliminarFavorite(index)}}></i>
						</li>
					)
					})}
					</ul>
				</div>
				</div>
			</div>
		</nav>
	);
};
