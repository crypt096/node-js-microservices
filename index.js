import UserService from './services/user.service.js';

async function startApp() {
  await UserService.start();

  try {
    // Simulate user creation
    const newUser = await UserService.createUser('user.createUser', {
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
  } catch (error) {
    
  }
}