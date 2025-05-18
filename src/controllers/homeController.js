/**
 * Home page controller
 */
export const homeController = {
    /**
     * Display home page
     * @param {Object} res - Express response object
     */
    getHomePage: async (_, res) => {
        try {
            // You can fetch data for the home page here
            // For example, latest posts, statistics, etc.
            res.status(200).json({
                status: 'success',
                message: 'Bienvenue sur notre API',
                data: {
                    appName: 'Express API',
                    version: '1.0.0',
                    // add others pertinents data
                },
            })
        } catch (error) {
            console.error('Error in home controller:', error)
            res.status(500).json({
                status: 'error',
                message: "Erreur lors du chargement de la page d'accueil",
            })
        }
    },
}

export default homeController
