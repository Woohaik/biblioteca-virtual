export const userConfirmedToAdminTemplate = (nombre: string): EmailTemplate => ({
    subject: "Se Confirmo Registro de Nuevo Usuario",
    html: `Se dio de alta en la biblioteca el usuario: ${nombre}`
})
