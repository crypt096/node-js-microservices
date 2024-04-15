import UserService from './services/user.service.js';

async function startApp() {
  await UserService.start();

  try {
    // Simulate user creation
    const newUser = await UserService.createUser('user.createUser', {
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
    console.log('New user: ', newUser);
    const users = await UserService.call('user.getUsers');
    console.log('All users: ', users);
  } catch (error) {
    console.log('Error: ' + error)
  } finally {
    await UserService.stop();
  }
}