const Publication = require('../models/Publication');


async function getAllPublications() {
    return Publication.find({}).lean();
}

async function getPublicationById(id) {
    return Publication.findById(id).lean();
}

async function getPublicationAndUsers(id) {
    return Publication.findById(id).populate('author').populate('usersShared').lean();
}

async function createPublication(publication) {
    const result = new Publication(publication);
    await result.save();
}

async function updatePublication(id, publication) {
    const existing = await Publication.findById(id);

    existing.title = publication.title;
    existing.technique = publication.technique;
    existing.picture = publication.picture;
    existing.certificate = publication.certificate;

    await existing.save();
};

module.exports = {
    getAllPublications,
    getPublicationById,
    getPublicationAndUsers,
    createPublication,
    updatePublication

};