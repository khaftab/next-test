// const serviceAccount = require('../../serviceAccountKey.json')
// const admin = require('firebase-admin')
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://net-ninja-part--2.firebaseio.com"
// });

// export default (req, res) => {
//     const  email  = 'ssg@ssg.com'
//     return admin.auth().getUserByEmail(email).then(user => {
//         return admin.auth().setCustomUserClaims(user.uid, {
//             admin: true
//         })
//     }).then(() => {

//         return res.status(200).json({ messege: `Congo you ${email} are now a admin` })

//     }).catch((err) => res.status(400).json({ message: err }))
// }

// // export default (req, res) => {
// //     console.log(req.body)
// //     res.status(200).json({message: 'success'})
// // }
