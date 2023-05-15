pipeline {

    agent any

    stages {
        stage('hello') {
            steps {
                git credentialsId: 'github-app-key', url: 'https://github.com/rapid7/panda-app.git'
                sh "ls -l panda-app"
            }
        }
 
    }

}
