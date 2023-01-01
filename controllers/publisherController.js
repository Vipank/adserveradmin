const { savePublisher, getPublisher, updatePublisher } = require("../database/dao/publiserDao");

exports.savePublisher = async (req, res, next) => {
	const publisher = req.body;
	try {
		const result = await savePublisher(publisher);
		res.status(200).send(result.toJSON());
	} catch (error) {
		res.status(500).send({ success: false, message: error.toString() });
	}
};

exports.getPublisher = async (req, res, next) => {
	const { id } = req.params;
	if (!id) {
		res.status(400).send({ message: "Param id is mandatory." });
	}
	const publisher = await getPublisher(id);
	if (!publisher) {
		res.status(404).send({ message: `Entity not found for id ${id}` });
	} else {
		res.status(200).send(publisher.toJSON());
	}
};

exports.updatePublisher = async (req, res, next) => {
	const { id } = req.params;
	const publisher = req.body;
	if (!id) {
		res.status(400).send({ message: "Param id is mandatory." });
	}

	try {
		const udpatedPublisher = await updatePublisher(id, publisher);
		if (!udpatedPublisher || udpatedPublisher[0] == 0) {
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
