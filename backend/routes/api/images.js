const express = require('express');
const aws = require('aws-sdk');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { awsConfig } = require('../../config');
const { Image } = require('../../db/models');

router.post('/', asyncHandler(async (req, res) => {
  console.log(req.files, 'enter');
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

  // Binary data base64
  const file = req.files.image1;
  const fileContent  = Buffer.from(file.data, 'binary');
  // Setting up S3 upload parameters
  const params = {
      Bucket: awsConfig.bucketName,
      Key: file.name, // File name you want to save as in S3
      Body: fileContent
  };

   // Uploading files to the bucket
  s3.upload(params, function(err, data) {
    if (err) {
        throw err;
    }
    console.log('success');
    return res.send({
        "response_code": 200,
        "response_message": "Success",
        "response_data": data
    });
  });

}));

module.exports = router;
