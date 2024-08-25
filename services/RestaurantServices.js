const RestaurantRepo = require("../repos/RestaurantRepo");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");
const UnauthorizedError = require("../common/errors/UnauthorizedError");


const signUpRestaurant = async (email, password, name, address, phoneNumber, category, owner) => {
	try {
		const token = jwt.sign(
			{email, password, name, address, phoneNumber, category, owner},
			config.jwt.secret, 
			{expiresIn: config.jwt.expiresIn}
		)
		const restaurant = await RestaurantRepo.createRestaurant(
			email, 
			password, 
			name, 
			address, 
			phoneNumber, 
			category, 
			owner
		);
		return { restaurant, token };
	} 
	catch (error) {
		throw error;
	}
}

const loginRestaurant = async (email, password) => {
	try {
		const restaurant = await RestaurantRepo.getRestaurantByEmail(email);
		if (restaurant){
			const isMatch = await bcrypt.compare(password, restaurant.password);
			if (isMatch) {
				const token = jwt.sign(
					{ email: restaurant.email},
					config.jwt.secret, 
					{ expiresIn: config.jwt.expiresIn }
				);
				return { restaurant, token };
			}
			else {
				throw new UnauthorizedError("Invalid email or password");
			}
		}
		else{
			throw new UnauthorizedError("Invalid email or password");
		}
	} 
	catch (error) {
		throw error;
	}
}

module.exports = {
	signUpRestaurant,
	loginRestaurant
}