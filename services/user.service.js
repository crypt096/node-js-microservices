import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

const users = [];

broker.createService({
    name: 'users',
    actions: {
        list() {
            return users;
        },
        add(ctx) {
            users.push(ctx.params);
        }
    }
});