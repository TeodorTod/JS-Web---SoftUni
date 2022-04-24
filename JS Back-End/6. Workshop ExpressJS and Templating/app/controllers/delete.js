module.exports = {
    async get(req, res) {
        const id = req.params.id;
        const car = await req.storage.getById(id);

        if (car) {
            res.render('delete', { title: `Delete listing - ${car.name}, car`});
        } else {
            res.redirect('404');
        }

    },
    post(req, res) {

    }
};