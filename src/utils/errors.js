export class ApiError extends Error {
    constructor(statusCode, message, details = null) {
        super(message)
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
        this.details = details
    }
}
export const handleError = (err, _req, res, next) => {
    console.error('🔥 Error:', {
        name: err.name,
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    })

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
            ...(err.details && { details: err.details }),
        })
    }

    // Manage errors prisma
    const prismaError = handlePrismaError(err)
    if (prismaError) return handleError(prismaError, _req, res, next)

    // Default error response
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    })
}

const handlePrismaError = (err) => {
    if (err.code === 'P2002') {
        // Vérifier si c'est une violation de contrainte unique sur l'email
        const field = err.meta?.target?.[0]
        if (field === 'email') {
            return new ApiError(
                409, 
                `L'adresse email ${err.meta?.target?.[0]} est déjà utilisée`,
                { field: 'email' }
            )
        }
        // Pour les autres champs uniques
        return new ApiError(
            409, 
            `Le champ ${field} existe déjà`,
            { field }
        )
    }

    if (err.code === 'P2025') {
        return new ApiError(404, `Record not found`)
    }

    return null // passthrough
}
