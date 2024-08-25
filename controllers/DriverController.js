const DriverServices = require('../services/DriverServices');
const jsend = require('jsend');

const signUpDriver = async (req, res) => {
	try {
		const { firstName, lastName, email, password, phoneNumber, age, vehicle, nationalId } = req.body;
		const { driver , token } = await DriverServices.signUpDriver(firstName, lastName, email, password, phoneNumber, age, vehicle, nationalId);
		res.cookie('token', token, { httpOnly: true });
		res.json(jsend.success( {driver, token} ) );
		return { driver, token };
	} 
	catch (error) {
		next(error);
	}
}

const loginDriver = async (req, res) => {
	try {
		const { email, password } = req.body;
		const { driver, token } = await DriverServices.loginDriver(email, password);
		res.cookie('token', token, { httpOnly: true });
		res.json(jsend.success( {driver, token} ) );
		return { driver, token };
	} 
	catch (error) {
		next(error);
	}
}

module.exports = {
	signUpDriver,
	loginDriver
}