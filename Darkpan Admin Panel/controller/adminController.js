module.exports = {
    getDashboard: (req, res) => {
        res.render('dashboard');
    },
    getPage: (page) => (req, res) => {
        res.render(page);
    }
};