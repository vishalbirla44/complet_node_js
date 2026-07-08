
exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Add Home to airbnb",
    currentPage: "login",
    isLoggedIn : false,
  });
};

exports.postLogin = (req, res, next) => {
  console.log(req.body)
  req.isLoggedIn = true
  res.redirect("/")
};