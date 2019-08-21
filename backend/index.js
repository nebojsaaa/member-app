const express = require('express');
const path = require('path');
const cors = require('cors');
const MongoDB = require('./mongodb');

const app = express();

// import Routes
const membersRoute = require('./routes/api/members');

MongoDB.connect();
MongoDB.debug(true);

app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


// Members API Routes
app.use('/api/members/', membersRoute);

const PORT = process.env.PORT || 5000;
	
app.listen(PORT, () => console.log(`Server started od port ${PORT}`));
