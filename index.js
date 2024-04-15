import UserService from './services/user.service.js';
import EmailService from './services/email.service.js';

async function startApp() {
  await UserService.start();
  await EmailService.start();

  try {
    // Simulate user creation
    const newUser = await UserService.call('user.createUser', {
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
    console.log('New user: ', newUser);
    const users = await UserService.call('user.getUsers');
    console.log('All users: ', users);

    // Simulate email sending
    const email = await EmailService.call('email.sendEmail', {
      recipient: newUser.email,
      subject: 'Welcome to the app!',
      content: 'Thank you for joining our app!',
    });
  } catch (error) {
    console.log('Error: ' + error)
  } finally {
    await UserService.stop();
  }
}

startApp();