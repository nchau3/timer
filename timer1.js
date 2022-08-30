const args = process.argv.slice(2).map(x => Number(x));

const beepAlarm = function(times) {
  if (times.length < 1) {
    return console.log("Please input times in command line");
  }
  for (entry of times) {
    if ((typeof entry === 'number') && (entry > 0))
    setTimeout(() => console.log('BEEP'), entry * 1000)
  }
};

beepAlarm(args);