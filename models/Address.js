const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
	name : {
		type: String,
		required: true
	},
	location : {
		type: {
			type: String,
			enum: ['Point'],
			required: true
		},
		coordinates: {
			type: [Number],	
			required: true,
			// validate: {
			// 	validator: function(v) {
			// 		return v.length === 2;
			// 	},
			// 	message: props => `${props.value} is not a valid coordinates array`	
			// }
		}
	}
});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;