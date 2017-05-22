let worker = new Worker('worker.js');

worker.onmessage = e => {
  console.log(e, e.data);
};

worker.onerror = e => {
  console.log('Error: ', e);
};

worker.addEventListener('message', e => {
  console.log('On worker message: ', e.data);
});

// worker.postMessage('start');