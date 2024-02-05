const fs = require('node:fs/promises');
const path = require('node:path');

const fileToWatch = path.join(process.cwd(), 'src', 'index.html');
const fileToChange = path.join(process.cwd(), 'src', 'input.css');

let lastChange = 0;

(async () => {
  try {
    const watcher = fs.watch(fileToWatch);

    for await (const event of watcher) {
      if (event.eventType === 'change') {
        if (Date.now() - lastChange > 2000) {
          lastChange = Date.now();

          await new Promise((resolve) => {
            return setTimeout(async () => {
              await fs.appendFile(fileToChange, ' ');
              return resolve();
            }, 200);
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
})();
