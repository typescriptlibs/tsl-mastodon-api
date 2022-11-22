import Assert from 'assert/strict';
import FS from 'fs';

Promise
    .all(FS
        .readdirSync('./test-run/test/')
        .filter((entry) => (
            entry.endsWith('.js') &&
            !entry.endsWith('index.js')
        ))
        .map(entry => import('./' + entry))
    )
    .then((testCases) => {
        const failed = [];
        const succeeded = [];

        let testFunction: Function;
        let testName: string;

        for (const testCase of testCases) {
            testFunction = testCase.default;
            testName = (testFunction.name || '');

            try {
                testFunction();
                console.log('✅', testName);
                succeeded.push(testCase);
            }
            catch (error) {
                console.log('🛑', testName);
                console.error(error);
                failed.push(error);
            }
        }

        console.log('✅ SUCCEEDED:', succeeded.length)

        if (failed.length) {
            console.error('🛑 FAILED:', failed.length);
            process.exit(1);
        }
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
