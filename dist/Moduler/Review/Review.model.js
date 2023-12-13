"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewModel = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    courseId: mongoose_1.Schema.Types.ObjectId,
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    }
});
exports.reviewModel = (0, mongoose_1.model)('review', reviewSchema);
