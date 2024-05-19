const Menu = require('../models/menu');

// hämta menu
exports.getMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// skapa en ny menu
exports.createMenu = async (req, res) => {
    try {
        const newMenu = new Menu(req.body);
        const savedMenu = await newMenu.save();
        res.json(savedMenu);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// uppdatera en befintlig bokning
exports.updateMenu = async (req, res) => {
    try {
        const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMenu);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// radera en befintlig bokning
exports.deleteMenu = async (req, res) => {
    try {
        await Menu.findByIdAndDelete(req.params.id);
        res.json({ message: 'Menu deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
