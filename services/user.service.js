import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

const users = [];

broker.createService({
    name: 'users',
    actions: {
        createUser(ctx) {
          const { username, email } = ctx.params;
          const newUser = {};
        }
    }
});