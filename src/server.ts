import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

const fs = require('fs');
const path = require('path');

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get("/filteredimage", async(req, resp) =>{
    const { image_url  } = req.query;
    
    if (!image_url){
      return resp.status(400).send("URL query parameter 'image_url' is required!");
    }


    try{
      const image_path = await filterImageFromURL(image_url as string);
      return resp.status(200).sendFile(image_path, (err)=>{
        if (fs.existsSync(image_path)){
          deleteLocalFiles([image_path]);
        }
      });
    }
    catch(error){
      return resp.status(422).send("422 Unprocessable entity.");
    }

  })
  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();