import { getSessionData } from '../utils/sessionUtils.js'

export const attachSession = async (req, res, next) => {
    try {
        // Attach session data to request object
        req.session = await getSessionData(req)
        next()
    } catch (error) {
        next(error)
    }
}