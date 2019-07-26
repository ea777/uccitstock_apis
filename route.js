// Load the MySQL pool connection
const pool = require('./config.js');

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'UCC IT Stock Management System'
        });
    });

    // Display all switchea
    app.get('/switches', (request, response) => {
    	pool.query('SELECT * FROM switch', (error, result) => {
        	if (error) throw error;
            	response.send(result);
    	});
    });		
    
    // // Display all sensors
    // app.get('/count_sensors', (request, response) => {
    //     pool.query('SELECT count( DISTINCT(device_id) ) as no_of_sensors FROM firefly_heroku_app_usersensor', (error, result) => {
    //             if (error) throw error;
    //             response.send(result);
    //     });
    // });
	
    // // Display no.of users
    // app.get('/count_users', (request, response) => {
    //     pool.query('SELECT count( id ) as no_of_users FROM auth_user', (error, result) => {
    //             if (error) throw error;
    //             response.send(result);
    //     });
    // });
	
    // // Display all sensors for a user
    // app.get('/user/:id/sensors', (request, response) => {
	// 	const id = request.params.id;
    //     pool.query('SELECT * FROM firefly_heroku_app_usersensor WHERE user_id = ?', id, (error, result) => {
    //             if (error) throw error;
    //             response.send(result);
    //     });
    // });
    
    // // Display a particular sensor for a user
    // app.get('/user/:id/sensor/:sensor_id', (request, response) => {
    //     const id = request.params.id;
	// 	const sensor_id = request.params.sensor_id;    
    //     pool.query('SELECT * FROM firefly_heroku_app_usersensor WHERE user_id = ? AND device_id = ?', [id, sensor_id], (error, result) => {
    //             if (error) throw error;
    //             response.send(result);
    //     });
    // });
	
	// // Get lat and lng for top affected areas
    // app.get('/top5', (request, response) => {   
    //     pool.query('SELECT * FROM top5_ffp_areas', (error, result) => {
    //             if (error) throw error;
    //             response.send(result);
    //     });
    // });
	
	// // Post the weather data into database
    // app.post('/top5Data', (request, response) => { 
	// 	var data = request.body;
	// 	var values = " ( " + 
	// 		data.place_id + ", '" + data.main + "' ," + data.temperature + "," + data.pressure + "," +
	// 		data.humidity + "," + data.wind_speed + "," + data.wind_deg + ", '" + data.place_date +
	// 		"' ) ";	
		
	// 	var fields = "( place_id, main, temperature, pressure, humidity, wind_speed, wind_deg, place_date )";
		
	// 	var q = 'INSERT INTO top5_data ' + fields + '  VALUES ' + values;
				
    //     pool.query(q, (error, result) => {
	// 		if (error) throw error;
	// 		response.send(result);
	// 	});
	// });
	
	// // backup last 30 months
    // app.get('/backup1month', (request, response) => { 
	// 	pool.query('SELECT * FROM top5_data ORDER BY id DESC LIMIT 1800', (error, result) => {
    //             if (error) throw error;
    //             response.send(result);
    //     });
	// });
	
	
	// // get first 12 data rows for the top5 place mentioned
    // app.get('/top5Data/:id/', (request, response) => {
	// 	const id = request.params.id;
    //     pool.query('SELECT * FROM top5_data WHERE place_id = ? LIMIT 12', id, (error, result) => {
    //             if (error) throw error;
    //             response.send(result);
    //     });
    // });
	
	// // get the last record of each of the top5
    // app.get('/top5DataLatest/', (request, response) => {
	// 	pool.query('SELECT * FROM top5_data WHERE id IN (SELECT MAX(id) FROM top5_data GROUP BY place_id);', (error, result) => {
    //             if (error) throw error;
    //             response.send(result);
    //     });
    // });
	
	// // get details of top5 with id
    // app.get('/top5DataLatest/:id/', (request, response) => {
	// 	const id = request.params.id;
    //     pool.query('SELECT * FROM top5_ffp_areas WHERE id = ?', id, (error, result) => {
    //             if (error) throw error;
    //             response.send(result);
    //     });
    // });
	
	
}


// Export the router
module.exports = router;
