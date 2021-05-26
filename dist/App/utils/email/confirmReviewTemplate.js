"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmReviewTemplate = void 0;
const confirmReviewTemplate = (newReview) => ({
    subject: "Confirmar Registro",
    html: `
        <p> 
            <b>Una valoracion ha sido agregado correctamente con los siguientes datos:</b>
            <br/>
            <b><u>ReviewID:</b></u></u> <i>${newReview.ID}</i><br/>
            <b><u>Rate:</b></u> <i>${newReview.Rate}</i> <br/>
            <b><u>Commentary:</b></u> <i>${newReview.Commentary}</i> <br/>
            <b><u>BookID:</b></u> <i>${newReview.BookId}</i> <br/>
            <b><u>UserID:</b></u> <i>${newReview.UserId}</i> <br/>
            <b><u>Date:</b></u> <i>${newReview.CreatedAt}</i> <br/>
        </p>`
});
exports.confirmReviewTemplate = confirmReviewTemplate;
//# sourceMappingURL=confirmReviewTemplate.js.map