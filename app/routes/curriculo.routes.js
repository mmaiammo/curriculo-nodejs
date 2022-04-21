const { authJwt } = require("../middlewares");
const controller = require("../controllers/curriculo.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/curriculo/findAll",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.findAll
  );

  app.get(
    "/api/curriculo/findOne/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findOne
  );

  app.post(
    "/api/curriculo/create",
    [authJwt.verifyToken],
    controller.create
  );

  app.patch(
    "/api/curriculo/update/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.update
  );

  app.delete(
    "/api/curriculo/destroy/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.destroy
  );
};
