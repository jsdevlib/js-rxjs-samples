import { Subject, fromEvent } from 'rxjs';
import { EventEmitter } from 'events';

const EVENT_NAMES = {
  BUTTON_SUBSCRIBER_ADD: 'BUTTON_SUBSCRIBER_ADD',
  BUTTON_SUBSCRIBER_ADDED: 'BUTTON_SUBSCRIBER_ADDED',
};

const eventEmitter = new EventEmitter();

export class Publisher {
  subscribers: Array<Subscriber>;

  constructor(readonly name: string) {
    this.subscribers = new Array<Subscriber>();
  }

  subscribe(subscriber: Subscriber) {
    eventEmitter.emit(EVENT_NAMES.BUTTON_SUBSCRIBER_ADD, `Subscribing ${subscriber.name} at ${new Date()}`);
    this.subscribers.push(subscriber);
    subscriber.onSubscribed();
  }
}

export class Subscriber {
  constructor(readonly name: string) {}

  onSubscribed() {
    eventEmitter.emit(EVENT_NAMES.BUTTON_SUBSCRIBER_ADDED, `${this.name} just done`);
  }
}

eventEmitter.on(EVENT_NAMES.BUTTON_SUBSCRIBER_ADD, (value) => console.log(value));
eventEmitter.on(EVENT_NAMES.BUTTON_SUBSCRIBER_ADDED, (value) => console.log(value));

export const Main = () => {
  const publisher = new Publisher('Publisher');

  const subscriber1 = new Subscriber('Subscriber1');
  publisher.subscribe(subscriber1);

  const subscriber2 = new Subscriber('Subscriber2');

  setTimeout(() => {
    publisher.subscribe(subscriber2);
  }, 1000);
};
