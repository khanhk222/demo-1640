const express = require('express');
const router = express.Router();
const qacController = require('../controller/qac');
// const { isQAC } = require("../middleware/auth");

router.get('/qac',qacController.getQAC);

// router.post('/qac/viewMostComments/Comment',qacController.doComment);
router.get('/qac/viewMostComments',qacController.viewMostComments);

router.post('/qac/viewMostComments/Comment', qacController.doComment);

router.get('/qac/changePassword', qacController.changePassword);
router.post('/qac/doChangePassword', qacController.doChangePassword);
router.get('/qac/viewIdeaByFaculty', qacController.viewIdeaByFaculty);
module.exports = router;