pipeline {
  agent {
    docker {
      image 'node:8.11.1'
    }

  }
  stages {
    stage('Test') {
      agent {
        docker {
          image '8.11.1'
        }

      }
      steps {
        sh '''npm install
'''
      }
    }
  }
}