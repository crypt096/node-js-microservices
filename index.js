import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

// Greeter Service
broker.createService({
  name: 'Greeter',
  actions: {
    hello(ctx) {
      return `Hello ${ctx.params.name}`;
    }
  }
});