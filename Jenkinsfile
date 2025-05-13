pipeline {
    agent any

    parameters {
        string(name: 'ENV', defaultValue: 'prod', description: 'Target test environment (e.g., local, qa)')
        choice(name: 'TYPE_OF_TEST', choices: ['smoke', 'regression'], description: 'Select type of test to run')
    }

    environment {
        NODE_ENV = 'test'
        TEST_ENV = "${params.TEST_ENV}"
        TYPE_OF_TEST = "${params.TYPE_OF_TEST}"
    }

    tools {
        nodejs 'Node_18' // Ensure this NodeJS tool is set up in Jenkins Global Tools
    }

    triggers {
        pollSCM('* * * * *') // Optional fallback, still webhook-friendly
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/Deepika5reddy/playwright_TS_e2e_API.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('officepl-playwright-automation') {
                    bat 'npm ci'
                }
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                dir('officepl-playwright-automation') {
                    bat 'npx playwright install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('officepl-playwright-automation') {
                    bat """
                        echo TEST_ENV=${TEST_ENV} > .env
                        echo BASE_API_URL=https://officepl-api-settings-${TEST_ENV}.example.com >> .env
                        npx playwright test --project=${TYPE_OF_TEST} --reporter=html
                    """
                }
            }
        }

        stage('Publish Report') {
            steps {
                dir('officepl-playwright-automation\\playwright-report') {
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
