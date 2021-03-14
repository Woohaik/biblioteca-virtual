import { CONFIG } from "./../../../Config"

export const confirmEmailTemplate = (link: string) => ({
    subject: "Confirmar Registro",
    html: `<a href="${CONFIG.HOST}/api/user/confirm-email/${link}"> Click Para Confirmar :) </a>`
})
