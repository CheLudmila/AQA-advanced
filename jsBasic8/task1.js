function delayedLog(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

delayedLog("Привіт!", 2000);