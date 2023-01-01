const { saveAdunit, getAdunit, updateAdunit } = require("../database/dao/adunitDao");
const {getPublisher}  = require("../database/dao/publiserDao");
const {getWebsite}  = require("../database/dao/websiteDao");

const { platforms } = require("../utils/constants");

exports.saveAdunit = async (req, res, next) => {
	const {pubid,platform,platformId} = req.params;
	const adunit = req.body;
	try {
        const publisher = await getPublisher(pubid);
        if(!publisher){
            res.status(404).send({ success: false,message: `Publisher with id  ${pubid} not found.`});
        }
		let doesPlatformExists = true;
		switch(platform) {
			case platforms.DESKTOP:
				let website = await getWebsite(platformId);
				console.log(website)
				if(!website){
					doesPlatformExists = false;
				}
			  	break;
			default:
				res.status(400).send({success: false, message: `Unrecognized platform type ${platform}`});
				return;
		}
		if(!doesPlatformExists){
			res.status(404).send({success: false, message: ` Platform ${platform} with id  ${platformId} not found.`});
		}else{
			const result = await saveAdunit(pubid,platform,platformId,adunit);
			res.status(200).send(result.toJSON());
		}
		
	} catch (error) {
		res.status(500).send({ success: false, message: error.toString() });
	}
};

exports.getAdunit = async (req, res, next) => {
	const { id } = req.params;
	if (!id) {
		res.status(400).send({success: false, message: "Param id is mandatory." });
	}
	const adunit = await getAdunit(id);
	if (!adunit) {
		res.status(404).send({success: false, message: `Entity not found for id ${id}` });
	} else {
		res.status(200).send(website.toJSON());
	}
};

exports.updateAdunit = async (req, res, next) => {
	
	const {id,pubid,platform,platformId} = req.params;
	const adunit = req.body;
	if (!id) {
		res.status(400).send({success:false, message: "Param id is mandatory." });
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
