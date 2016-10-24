var remapIstanbul= {
        build: {
            src: 'coverage/coverage-final.json',
            options: {
                reports: {
                    'json': 'coverage/coverage.json',
                    'html': 'html-report'
                }
            }
        }
    }

    module.exports = remapIstanbul;