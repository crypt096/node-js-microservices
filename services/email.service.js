import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

broker.createService({
    name: 'email',
    actions: {
    }
});

export default broker;