const getUser = req => {
    return req.user || null
}
module.exports = {
    getUser
}

//登入身分驗證
const ensureAuthenticated = req => {
    return req.isAuthenticated()
}
module.exports = {
    getUser,
    ensureAuthenticated
}