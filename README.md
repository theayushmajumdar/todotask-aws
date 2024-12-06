# Todotask-AWS Deployment Guide

## Deployment Architecture Overview

The Todotask-AWS application will be deployed using a serverless architecture leveraging:
- Frontend: AWS Amplify
- Backend: AWS Lambda
- Database: Amazon DynamoDB
- API Gateway: AWS API Gateway

## Detailed Deployment Steps

### 1. Prepare AWS Services

#### DynamoDB Table Setup
1. Open AWS DynamoDB Console
2. Create a new table named "Tasks"
   - Partition key: `id` (String)
   - Sort key: Leave blank
3. Configure read/write capacity (use On-demand for cost-efficiency)

### 2. Backend Deployment (Lambda)

#### Create IAM Role for Lambda
1. Open AWS IAM Console
2. Create a new IAM Role
3. Attach policies:
   - AWSLambdaBasicExecutionRole
   - AmazonDynamoDBFullAccess
   - AWSAPIGatewayInvokeFullAccess

#### Package Lambda Function
```bash
# Zip backend files
zip -r function.zip .
```

#### Create Lambda Function
1. Open AWS Lambda Console
2. Create a new function
3. Upload `function.zip`
4. Set runtime to Node.js
5. Configure handler: `index.handler`
6. Assign the IAM role created earlier

### 3. API Gateway Configuration
1. Create new REST API
2. Create resources matching your routes:
   - `/task` (GET, POST, PUT)
   - `/task/{id}` (DELETE)
3. Integrate with Lambda function
4. Enable CORS
5. Deploy API and note the invoke URL

### 4. Frontend Deployment with Amplify

#### Prepare Repository
1. Ensure `.env` file is updated with API Gateway URL
2. Remove any local development configurations

#### Amplify Deployment
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure Amplify
amplify configure

# Initialize Amplify in project
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

### 5. Environment Variables

#### Backend Lambda
- `DEVELOPMENT`: false
- `AWS_REGION`: us-east-1

#### Frontend Amplify
- `REACT_APP_API_URL`: Your API Gateway URL

## Deployment Checklist

### Serverless Backend Verification
- ✅ Lambda function created
- ✅ IAM roles configured
- ✅ API Gateway integrated
- ✅ CORS enabled
- ✅ Environment variables set

### Frontend Verification
- ✅ Amplify hosting configured
- ✅ Build settings correct
- ✅ Custom domain (optional)

## Estimated Costs

- Lambda: Free tier available (1M free requests/month)
- DynamoDB: $1.25 per million read/write units
- Amplify Hosting: Free tier, then $0.01/build minute
- API Gateway: Free tier, then $3.50/million requests

## Troubleshooting

1. Check Lambda function logs
2. Verify API Gateway configurations
3. Review IAM role permissions
4. Validate environment variables

## Best Practices

- Use least privilege IAM roles
- Enable CloudWatch monitoring
- Implement API Gateway caching
- Use Amplify environment configs
