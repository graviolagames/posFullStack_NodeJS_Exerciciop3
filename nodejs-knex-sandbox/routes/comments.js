import express from "express";
const router = express.Router();
import { CommentsService } from "../services/Comments.js";

/* GET home page. */
router.get("/", function (_, res) {
	
	CommentsService.findAll().then(function (comments) {
		res.json(comments);
	});
});


router.get("/:id",function (req, res) {
	const { id } = req.params;
	CommentsService.getById(id).then(function(comment){
		res.render("comment",{comment})
	})
})
router.get("/products/:productId",function (req, res) {
	const { productId } = req.params;
	CommentsService.getByProductId(productId).then(function(comments){
		res.json(comments);
	})
})
router.delete("/:id", function (req, res) {
	const { id } = req.params;
	CommentsService.delete(id).then(() => {
		res.json({
			success: "Comentário removido",
		});
	});
});

router.post("/", function (req, res) {
	const { body } = req;
	CommentsService.insert(body).then((comment) => {
		//res.json(comment);
		res.render("newComment");
	});
});

router.put("/", function (req, res) {
	const { body } = req;
	CommentsService.update(body).then((comment) => {
		res.json(comment);
	});
});

export default router;
