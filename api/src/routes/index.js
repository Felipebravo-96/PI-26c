const { Router } = require('express');
const countryRoutes = require('./countryRoutes')
const activityRoutes = require('./activityRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use("/countries", countryRoutes)
router.use("/activities", activityRoutes)
//router.use("/:id", countryRoutes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




module.exports = router;
