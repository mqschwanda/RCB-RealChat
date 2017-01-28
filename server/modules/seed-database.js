import seed from 'meteor/themeteorchef:seeder';

// seed users collection
let _seedUsers = () => {
  Seed('users', {
    // list the environments the channels seed function will be run
    environments: ['development', 'staging', 'production'],
    // data to be seeded
    data: [{
      username: 'testUser',
      email: 'testUser@gmail.com',
      password: 'password',
      profile: {name: {first: 'Test', last: 'Smith'}},
      roles: ['admin'] // makes the user an administrator
    }]
  });
};
// seed channels collection
let _seedChannels = () => {
  Seed('channels', {
    // list the environments the channels seed function will be run
    environments: ['development', 'staging', 'production'],
    // data to be seeded
    data: [{name: 'General'}, {name: 'Talk Shit'}, {name: 'Cat Chat'}]
  });
};

// export seed functions
export default function() {
  _seedUsers();
  _seedChannels();
}
