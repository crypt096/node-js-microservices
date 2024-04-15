import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

function generateId() {
  return Math.floor(Math.random() * 10000000);
}

const users = [];

broker.createService({
    name: 'users',
    actions: {
        createUser(ctx) {
          const { username, email } = ctx.params;
          const newUser = {

          };
        }
    }
});