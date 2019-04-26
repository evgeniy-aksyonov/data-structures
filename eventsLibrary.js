// We will use object where 
// key - is eventName 
// value - is array of callbacks associated to given eventName

class Events {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    Object.keys(this.events).includes(eventName) 
      ? this.events[eventName].push(callback)
      : this.events[eventName] = [callback];
  }

  trigger(eventName) {
    if (Object.keys(this.events).includes(eventName)) {
      this.events[eventName].forEach(callback => {
        callback();
      });
    }
  }

  off(eventName) {
    if (Object.keys(this.events).includes(eventName)) {
      delete this.events[eventName];
    }
  }
}

let myEvents = new Events();

myEvents.on('click', () => {
  console.log('Hello');
})

myEvents.on('click', () => {
  console.log('world!');
})

myEvents.trigger('click');

myEvents.on('custom', () => {
  console.log('my custom event');
});

myEvents.trigger('custom');

myEvents.off('click');

myEvents.trigger('click');
myEvents.trigger('custom');

myEvents.off('custom');

myEvents.trigger('click');
myEvents.trigger('custom');