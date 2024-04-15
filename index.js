import UserService from './services/user.service.js';
import EmailService from './services/email.service.js';
import AuthService from './services/auth.service.js';

async function startApp() {
  await UserService.start();
  await EmailService.start();
  await AuthService.start();

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
    console.log(email);

    // Simulate auth
    const authResult = await AuthService.call('auth.authUser', {
      username: 'admin',
      password: 'password',
    });
    console.log('Auth result:', authResult);
  } catch (error) {
    console.log('Error: ' + error)
  } finally {
    await UserService.stop();
    await EmailService.stop();
    await AuthService.stop();
  }
}

startApp();