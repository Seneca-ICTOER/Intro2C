const execa = require('execa');
const waitOn = require('wait-on');
const PORT = '3000';
const opts = {
  resources: [`http://localhost:${PORT}/`],
};
const serve = async () => {
  const { stdout, stderr } = await execa('yarn', ['serve']);
  console.log(stdout);
  console.error(stderr);
};
const killPort = async () => {
  const { stdout, stderr } = await execa(`npx`, ['kill-port', PORT]);
  console.log(stdout);
  console.error(stderr);
  process.exit(0);
};
const toPdf = async () => {
  const { stdout, stderr } = await execa('yarn', ['to-pdf']);
  console.log(stdout);
  console.error(stderr);
  killPort();
};

serve();
waitOn(opts, (err) => {
  if (err) {
    return console.error(`${err}`);
  }
  toPdf();
});
