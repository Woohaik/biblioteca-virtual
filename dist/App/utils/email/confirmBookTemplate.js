"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmBookTemplate = void 0;
const confirmBookTemplate = (newBook) => ({
    subject: "Confirmar Registro",
    html: `
        <p> 
            <b>Un libro ha sido agregado correctamente con los siguientes datos:</b>
            <br/>
            <b><u>Nombre:</b></u></u> <i>${newBook.Name}</i><br/>
            <b><u>Author:</b></u> <i>${newBook.Author}</i> <br/>
            <b><u>PublicationYear:</b></u> <i>${newBook.PublicationYear}</i> <br/>
            <b><u>Genre:</b></u> <i>${newBook.Genre}</i> <br/>
            <b><u>Rate:</b></u> <i>${newBook.Rate}</i> <br/>
            <b><u>ISBN:</b></u> <i>${newBook.ISBN}</i> <br/>
            <b><u>Editorial:</b></u> <i>${newBook.Editorial}</i> <br/>
            <b><u>Synopsis:</b></u> <i>${newBook.Synopsis}</i> <br/>
        </p>`
});
exports.confirmBookTemplate = confirmBookTemplate;
//# sourceMappingURL=confirmBookTemplate.js.map