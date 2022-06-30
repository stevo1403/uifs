# UIFS
Udagram Image Filtering Microservice

Node-Express application which runs a simple script to process images. This was deployed using AWS Elastic Beanstalk

## Install app dependencies
`npm install`

## Build the application artifacts
`npm run build`

## Start the server on the local server
`npm run dev`

## Deploy the microservice to AWS

### Create a new application named `uifs` on beanstalk
`eb init uifs    --platform "Node.js 16 running on 64bit Amazon Linux 2" --region us-east-1 --tags app-name=udacity-image-filter-starter-code,app-version=1.0.0`

### Create a new environment on beanstalk and deploy the application

`eb create uifs-dev --elb-type application --platform "Node.js 16 running on 64bit Amazon Linux 2" --region us-east-1 --instance_type t2.micro`

### Open the application URL in a browser
`eb open`

### Filter an image through the service
* **Format:** http://`environment-name`.`region`.elasticbeanstalk.com/filteredimage?image_url=`<image-url>`
* **Example:** [UIFS](http://uifs-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg)

### Delete the application
`eb terminate uifs-dev --all`