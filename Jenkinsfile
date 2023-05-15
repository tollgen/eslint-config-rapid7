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

git config --global user.name "tollgen"
git config --global user.email "tollgen@toll.net"