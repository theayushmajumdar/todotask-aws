# Todotask-AWS: Full Stack Todo Application

## Project Overview
Todotask-AWS is a modern, cloud-native Todo application that demonstrates a robust full-stack development approach using React, Node.js, and AWS services. This project showcases serverless architecture, providing a scalable and efficient task management solution.

## 🚀 Features
- **Interactive Frontend**: Responsive React.js user interface
- **Robust Backend**: Node.js and Express.js powered API
- **Cloud Storage**: AWS DynamoDB for persistent data management
- **Serverless Deployment**: Hosted on AWS Lambda and AWS Amplify
- **Complete CRUD Functionality**: Comprehensive task management

## 🛠 Tech Stack
- **Frontend**: 
  - React.js
  - Material-UI
  - Axios
- **Backend**: 
  - Node.js
  - Express.js
  - Serverless Framework
- **Database**: AWS DynamoDB
- **Deployment**: 
  - AWS Lambda
  - AWS Amplify

## 🔧 Setup Instructions

### Prerequisites
- Node.js (v14+ recommended)
- AWS Account
- AWS CLI
- Git

### Local Development Setup

1. Clone the Repository
```bash
git clone https://github.com/theayushmajumdar/todotask-aws.git
cd todotask-aws
```

2. Backend Setup
```bash
cd backend
npm install
# Configure AWS credentials
aws configure
```

3. Frontend Setup
```bash
cd frontend
npm install
```

4. Environment Configuration
- Create `.env` files in both backend and frontend directories
- Add necessary AWS and API configuration variables

### Running Locally
```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm start
```

## 🚢 Deployment

### Backend Deployment
1. Prepare Lambda function package
```bash
zip -r backend-lambda.zip .
```

2. Upload to AWS Lambda
3. Configure API Gateway
4. Set environment variables

### Frontend Deployment
```bash
# Using AWS Amplify CLI
amplify init
amplify add hosting
amplify publish
```

## 🔒 Security Considerations
- Implement IAM roles with least privilege
- Use AWS Cognito for authentication
- Enable API Gateway authorization
- Secure DynamoDB access

## 📊 Cost Optimization
- Utilize AWS Lambda free tier
- Use DynamoDB on-demand capacity
- Leverage Amplify hosting

## 🚀 Future Enhancements
- User authentication with AWS Cognito
- Advanced task filtering
- Improved responsive design
- Performance optimizations

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📜 License
MIT License - See [LICENSE](LICENSE) for details

## 📧 Contact
- **Author**: Ayush Majumdar
- **GitHub**: [@theayushmajumdar](https://github.com/theayushmajumdar)
- **Project Link**: [Todotask-AWS Repository](https://github.com/theayushmajumdar/todotask-aws)

## 🌟 Show Your Support
Give a ⭐️ if this project helped you!
