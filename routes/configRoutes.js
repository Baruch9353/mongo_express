import usersR from './usersRoutes.js';
import reportR from './reportRoutes.js'

export default function configRoutes(app) {
    app.use('/users', usersR); 
    app.use('/reports', reportR); 
};