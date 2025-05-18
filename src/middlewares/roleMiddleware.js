import { sessionService } from '../services/sessionService.js'

/**
 * Middleware d'authentification
 * Vérifie que l'utilisateur est connecté et attache ses infos à la requête
 */
export const authenticate = async (req, res, next) => {
    try {
        // Récupérer le token depuis les headers, cookies ou query params
        const token = req.headers.authorization?.split(' ')[1] || 
                      req.cookies?.refreshToken ||
                      req.query?.token
        
        if (!token) {
            return res.status(401).json({ message: 'Authentication required' })
        }
        
        // Utiliser la fonction getSession existante
        const userData = await sessionService.getSession(token)
        if (!userData) {
            return res.status(401).json({ message: 'Invalid or expired session' })
        }
        
        // Attacher les données utilisateur à l'objet request
        req.user = userData
        next()
    } catch (error) {
        console.error('Session validation error:', error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}
/**
 * Middleware pour vérifier le rôle de l'utilisateur
 * @param {string|string[]} requiredRoles - Un rôle ou un tableau de rôles autorisés
 * @returns {Function} Middleware Express
 */
export const roleMiddleware = (requiredRoles) => {
    // Convertir un seul rôle en tableau pour faciliter la vérification
    const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles]
    
    return (req, res, next) => {
        // Vérifier que l'utilisateur est authentifié
        if (!req.user) {
            return res.status(401).json({ message: 'Authentication required' })
        }

        // Vérifier que l'utilisateur a un des rôles requis
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ 
                message: 'Access denied. Insufficient permissions.',
                required: roles,
                current: req.user.role
            })
        }

        // Si tout est bon, passer au middleware suivant
        next()
    }
}


/**
 * Middleware pour vérifier le rôle de l'utilisateur
 * À utiliser après le middleware d'authentification
 * @param {string|string[]} requiredRoles - Un rôle ou un tableau de rôles autorisés
 * @returns {Function} Middleware Express
 */
export const authorize = (requiredRoles) => {
    // Convertir un seul rôle en tableau pour faciliter la vérification
    const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles]
    
    return (req, res, next) => {
        // Vérifier que l'utilisateur est authentifié (middleware authenticate déjà passé)
        if (!req.user) {
            return res.status(401).json({ message: 'Authentication required' })
        }

        // Vérifier que l'utilisateur a un des rôles requis
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ 
                message: 'Access denied. Insufficient permissions.',
                required: roles,
                current: req.user.role
            })
        }

        // Si tout est bon, passer au middleware/contrôleur suivant
        next()
    }
}

// Middlewares pour des rôles spécifiques
export const isAdmin = (req, res, next) => {
    if(req.user?.role === 'ADMIN') {
        return next()
    }
    return res.status(403).json({ message: 'Access denied. Admin role required.' })
}

export const isAuthor = (req, res, next) => {
    if(req.user?.role === 'AUTHOR' || req.user?.role === 'ADMIN') {
        return next()
    }
    return res.status(403).json({ message: 'Access denied. Author role required.' })
}

export const isReader = (req, res, next) => {  
    if(req.user?.role === 'READER' || req.user?.role === 'AUTHOR' || req.user?.role === 'ADMIN') {
        return next()
    }
    return res.status(403).json({ message: 'Access denied. Reader role required.' })
}