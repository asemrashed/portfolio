// import express from 'express';
// import axios from 'axios';
// import cors from 'cors';

// const app= express();

// app.use(cors())

// app.get('/validate-email', async(req, res)=>{
//     const {email}= req.query;
//     try {
//         const response = await axios.get(`https://api.neverbounce.com/v4/single/check`, {
//           params: {
//             key: 'public_3dc27cc9deb8c9e169e9b72a3f67233a',
//             email: email
//           }
//         });
//         res.json(response.data);
//         console.log('email is valid')
//       } catch (error) {
//         res.status(500).json({ error: 'Failed to validate email' });
//       }
// })
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });