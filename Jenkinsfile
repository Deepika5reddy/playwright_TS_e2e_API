pipeline {
    agent any

    parameters {
        string(name: 'ENV', defaultValue: 'prod', description: 'Target test environment (e.g., local, prod)')
        choice(name: 'TYPE_OF_TEST', choices: ['smoke', 'regression'], description: 'Select type of test to run')
    }

    tools {
        nodejs 'nodejs-22-14-0' // Ensure this is set up in Jenkins Global Tool Configuration
    }

    triggers {
        pollSCM('* * * * *') // Optional: use webhook for better efficiency
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/Deepika5reddy/playwright_TS_e2e_API.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat """
                    echo ENV=${params.ENV} > .env
                    npx playwright test --reporter=html || exit 0
                """
            }
        }

        stage('Publish Report') {
            steps {
                dir('playwright-report') {
                    archiveArtifacts artifacts: '**/*', fingerprint: true
                    publishHTML(target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: '.',
                        reportFiles: 'index.html',
                        reportName: 'Playwright HTML Report'
                    ])
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed. Check report for details.'
        }
    }
}
