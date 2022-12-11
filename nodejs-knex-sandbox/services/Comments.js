import { db } from "../connection/db.js";

export const TABLE_NAME = "comments";
export const CommentsService = {
	findAll() {
		return  db(TABLE_NAME).select("*");
	},
	insert(comment) {
		console.log("[DEBUG] services/Comments insert()");
		return db(TABLE_NAME).insert(comment);
	},
	delete(id) {
		return db(TABLE_NAME).where("id", id).del();
	},
	update(comment) {
		return db(TABLE_NAME)
			.where("id", comment.id)
			.update({
				productId: comment.productId,
				userName: comment.userName,
				comment: comment.comment
			});
	},
	getById(id){
		return  db(TABLE_NAME)
		.select("*")
		.where("id",id)
		.first();
	}
};
