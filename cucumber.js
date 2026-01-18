const path = require("node:path");

[
"export",
    "default"={
        "formatOptions": {
            "snippitInterface": 'async-await'
        },

        "dryRun": false,
        "parallel": 3,
        "workers": 2,
        "path":[ 'tests/features/**/*.feature'],

        "require": [
            'tests/step_definitions/**/*.js', 'tests/support/hooks/**/*.js'
        ],
        "requireModule": [
            'ts-node/register'
        ],
    }
]