const { saveAdvertiser, getAdvertiser, updateAdvertiser } = require("../database/dao/advertiserDao");

exports.saveAdvertiser = async (req, res, next) => {
	const advertiser = req.body;
	try {
		const result = await saveAdvertiser(advertiser);
		res.status(200).send(result.toJSON());
	} catch (error) {
		res.status(500).send({ success: false, message: error.toString() });
	}
};

exports.getAdvertiser = async (req, res, next) => {
	const { id } = req.params;
	if (!id) {
		res.status(400).send({ message: "Param id is mandatory." });
	}
	const advertiser = await getAdvertiser(id);
	if (!advertiser) {
		res.status(404).send({ message: `Entity not found for id ${id}` });
	} else {
		res.status(200).send(advertiser.toJSON());
	}
};

exports.updateAdvertiser = async (req, res, next) => {
	const { id } = req.params;
	const advertiser = req.body;
	if (!id) {
		res.status(400).send({ message: "Param id is mandatory." });
	}

	try {
		const udpatedAdvertiser = await updateAdvertiser(id, advertiser);
		if (!udpatedAdvertiser || udpatedAdvertiser[0] == 0) {
			res.status(404).send({ message: `Entity not found for id ${id}` });
		} else {
			res.status(200).send({
				message: `Record with id ${id} updated successfully`,
			});
		}
	} catch (error) {
		res.status(500).send({ message: error.toString() });
	}
};
