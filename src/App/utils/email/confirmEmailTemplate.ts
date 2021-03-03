export const confirmEmailTemplate = (link: string) => ({
    subject: "Confirmar Registro",
    html: `<a href="http://localhost:3000/api/user/confirm-email/${link}"> Click Para Confirmar :) </a>  `
})
