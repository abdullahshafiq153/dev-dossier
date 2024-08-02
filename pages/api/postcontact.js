// import * as fs from 'fs';


// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       // Process a POST request
//         let data = await fs.promises.readdir('contactdata');

//       fs.promises.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body),()=>{})
//       //res.status(200).json(["yes post request"])
//       res.status(200)
//     } else {
//       // Handle any other HTTP method
//       res.status(200).json(["allBlogs"])
//       //name,email,message
//     }
//   }

import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        try {
            const data = await fs.promises.readdir('contactdata');
            const newFilePath = `contactdata/${data.length + 1}.json`;

            await fs.promises.writeFile(newFilePath, JSON.stringify(req.body));

            // Send a successful response
            res.status(200).json({ message: "Contact data saved successfully" });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: "Failed to save contact data" });
        }
    } else {
        // Handle any other HTTP method
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
