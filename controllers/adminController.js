const adminController = {
    getCharacters: (req, res) => {
        return res.render('admin/characters')
    }
}

module.exports = adminController