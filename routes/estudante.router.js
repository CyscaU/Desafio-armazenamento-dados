const  express = require('express')
const { 
    getEstudante, 
    signupEstudante,
    loginEstudante,
    getAllEstudante,
    
    } = require('../controllers/product-controller')
const router =  express.Router()

router.use(express.json())

router.get("/", getAllEstudante)

router.get("/:id", getEstudante);

router.post("/", signupEstudante);

router.post("/", loginEstudante );



module.exports = router;