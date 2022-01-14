const express = require('express');
const asyncHandler = require('express-async-handler');
const aws = require('aws-sdk');
const router = express.Router();
const { awsConfig } = require('../../config');
const { Image } = require('../../db/models');

router.post('/', asyncHandler(async (req, res) => {
  console.log(req.files, 'files');

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  aws.config = new aws.Config();

  aws.config.update({
    region: awsConfig.region, //Region
    accessKeyId: awsConfig.accessKey, // Access key ID
    secretAccessKey: awsConfig.secretAccessKey, // Secret access key
  })

  const s3 = new aws.S3();

  const { spotId } = req.body;
  const createdImages = [];
  for (const imageKey in req.files) { //Iterate through all the files
    const file = req.files[imageKey];
    const fileContent = Buffer.from(file.data, 'binary'); //File data
    const params = { //Set the aws settings for upload
      Bucket: awsConfig.bucketName,
      Key: file.name,
      Body: fileContent
    };
    s3.upload(params, async (err, data) => { //Upload file to the s3 bucket
      if (err) {
        throw err;
      }

      const url = data.Location;  //Set the returned url

      const dbImage = await Image.create({ //Create an entry in the db using the url and spotId
        spotId,
        url
      });
      createdImages.push(dbImage);
    });
  }

  return res.send({
      "response_code": 200,
      "response_message": "Success",
      "response_data": createdImages,
  });

}));

module.exports = router;
