# Todotask-AWS: Serverless Todo List Application

## Project Overview

Todotask-AWS is a full-stack serverless Todo List application built using React for the frontend, AWS Lambda and API Gateway for the backend, and DynamoDB as the database. The application allows users to create, update, delete, and track tasks efficiently.

## 🚀 Features

- Create new tasks
- Mark tasks as completed
- Edit existing tasks
- Delete tasks
- Responsive dark-mode UI
- Serverless backend deployment
- Real-time task management

## 🛠 Tech Stack

- **Frontend:**
  - React
  - Material-UI
  - Axios for API calls

- **Backend:**
  - AWS Lambda
  - Serverless Framework
  - Node.js
  - Express.js

- **Database:**
  - Amazon DynamoDB

- **Deployment:**
  - AWS Serverless Application Model (SAM)
  - AWS CloudFormation

## 📦 Prerequisites

- Node.js (v14+ recommended)
- AWS Account
- AWS CLI configured
- Serverless Framework
- React development environment

## 🔧 Local Setup

### Backend Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/todotask-aws.git
cd todotask-aws
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Configure AWS Credentials
```bash
aws configure
```

4. Set up environment variables
- Create a `.env` file in the backend directory
- Add necessary AWS configuration variables

### Frontend Setup

1. Install frontend dependencies
```bash
cd frontend
npm install
```

2. Create `utils.js` with API endpoint
```javascript
export const API_URL = 'YOUR_AWS_API_GATEWAY_ENDPOINT';
```

## 🚢 Deployment

### Backend Deployment

1. Deploy serverless backend
```bash
serverless deploy --stage production
```

2. Note the API Gateway endpoint URL

### Frontend Deployment

1. Build React application
```bash
npm run build
```

2. Deploy to AWS S3 and CloudFront
```bash
aws s3 sync build/ s3://your-bucket-name
```

## 🔒 Security Considerations

- Use AWS IAM Roles with least privilege
- Enable API Gateway authentication
- Implement input validation
- Use HTTPS for all communications

## 📊 Cost Optimization

- Utilize AWS Lambda's free tier
- Implement DynamoDB Pay-per-request capacity
- Use CloudFront for efficient content delivery

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📜 License

This project is open-source and available under the MIT License.

## 🛟 Support

For issues or questions, please open a GitHub issue in the [todotask-aws repository](https://github.com/yourusername/todotask-aws/issues).
