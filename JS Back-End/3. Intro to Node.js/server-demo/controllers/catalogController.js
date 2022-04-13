const { IncomingForm } = require('formidable');
const { html, getItems, addItem } = require('../util');


const catalogPage = (data) => `
    <h1>Catalog</h1>
    <form method = "POST" action="/create">
        <label>Name: <input type='text' name="name"></label>
        <label>Color: 
            <select name="color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </label>
        <input type="submit" value="Create item">
    </form>
    <ul>
    ${data.map(i => `<li>${i.name} - ${i.color} <a href="/delete?id=${i.id}">[&#10006; Delete]</a></li>`).join('\n')}
    </ul>`;

function catalogController(req, res) {
    const data = getItems();
    res.write(html(catalogPage(data)));
    res.end();
}

function createController(req, res) {
    console.log('create request');

    const form = new IncomingForm();
    form.parse(req, (err, fields) => {
        console.log(fields);

        addItem(fields.name, fields.color);
        data.push(item);
    });

   

    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
}

function deleteController() {

}

module.exports = {
    catalogController,
    createController,
    deleteController
};
