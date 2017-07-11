Welcome to the AWS CodeStar sample web service
==============================================

This sample code helps get you started with a simple Express web service
deployed by AWS CloudFormation to AWS Lambda and Amazon API Gateway.

What's Here
-----------

This sample includes:

* README.md - this file
* buildspec.yml - this file is used by AWS CodeBuild to package your
  service for deployment to AWS Lambda
* app.js - this file contains the sample Node.js code for the web service
* index.js - this file contains the AWS Lambda handler code
* template.yml - this file contains the Serverless Application Model (SAM) used
  by AWS Cloudformation to deploy your service to AWS Lambda and Amazon API
  Gateway.


What Do I Do Next?
------------------

If you have checked out a local copy of your AWS CodeCommit repository you can
start making changes to the sample code.  We suggest making a small change to
app.js first, so you can see how changes pushed to your project's repository
in AWS CodeCommit are automatically picked up by your project pipeline and
deployed to AWS Lambda and Amazon API Gateway.  (You can watch the pipeline
progress on your AWS CodeStar project dashboard.)  Once you've seen how that
works, start developing your own code, and have fun!

Learn more about Serverless Application Model (SAM) and how it works here:
https://github.com/awslabs/serverless-application-model/blob/master/HOWTO.md

AWS Lambda Developer Guide:
http://docs.aws.amazon.com/lambda/latest/dg/deploying-lambda-apps.html

Learn more about AWS CodeStar by reading the user guide, and post questions and
comments about AWS CodeStar on our forum.

AWS CodeStar User Guide:
http://docs.aws.amazon.com/codestar/latest/userguide/welcome.html

AWS CodeStar Forum: https://forums.aws.amazon.com/forum.jspa?forumID=248
