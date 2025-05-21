pipeline {
    agent any

    environment {
        IMAGE_NAME = 'hodayne/nextjs-cosmos'
        DOCKERHUB_CREDENTIALS = credentials('docker-hub')  // Thêm credentials này trong Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Hodayne/COSMOS_WEBSITE'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build & Push') {
            steps {
                sh '''
                  docker build -t $IMAGE_NAME .
                  echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
                  docker push $IMAGE_NAME
                '''
            }
        }
    }
}
