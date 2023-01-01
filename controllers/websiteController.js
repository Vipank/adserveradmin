const { saveWebsite, getWebsite, updateWebsite } = require("../database/dao/websiteDao");
const { getPublisher } = require("../database/dao/publiserDao");


exports.saveWebsite = async (req, res, next) => {
	const {pubid} = req.params;
    const website = req.body;
	console.log(website);
	try {
        const publisher = await getPublisher(pubid);
        if(!publisher){
            res.status(404).send({ message: `Publisher with id  ${pubid} doesn't exist.`});
        }
		const result = await saveWebsite(website,pubid);
		res.status(200).send(result.toJSON());
	} catch (error) {
		res.status(500).send({ success: false, message: error.toString() });
	}
};

exports.getWebsite = async (req, res, next) => {
	const { id } = req.params;
	if (!id) {
		res.status(400).send({ message: "Param id is mandatory." });
	}
	const website = await getWebsite(id);
	if (!website) {
		res.status(404).send({ message: `Entity not found for id ${id}` });
	} else {
		res.status(200).send(website.toJSON());
	}
};

exports.updateWebsite = async (req, res, next) => {
	const { id } = req.params;
	const website = req.body;
	if (!id) {
		res.status(400).send({ message: "Param id is mandatory." });
	}

	try {
		const udpatedWebsite = await updateWebsite(id, website);
		if (!udpatedWebsite || udpatedWebsite[0] == 0) {
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
