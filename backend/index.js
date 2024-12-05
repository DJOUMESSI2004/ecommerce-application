const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const productRoutes = require('./routers/productRoutes');
const userRoutes = require('./routers/userRoutes');
const cartRoutes = require('./routers/cartRoutes');
const orderRoutes = require('./routers/orderRoutes');
const paymentRoutes = require('./routers/paymentRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/products', productRoutes);
// app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
// app.use('/api/payment', paymentRoutes);


// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


