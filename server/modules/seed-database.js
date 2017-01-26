import seed from 'meteor/themeteorchef:seeder';

let _seedUsers = () => {
  Seed( 'users', {
    environments: [ 'development', 'staging', 'production' ],
    data: [{
      username: 'yoda',
      email: 'yoda@gmail.com',
      password: 'password',
      profile: {
        name: { first: 'Minch', last: 'Yoda' }
      },
      roles: [ 'admin' ]
    },{
      username: 'kitty',
      email: 'cat@gmail.com',
      password: 'password',
      profile: {
        name: { first: 'Kitty', last: 'Cat' }
      },
      roles: [ 'admin' ]
    }]
  });
};

let _seedChannels = () => {
  Seed( 'channels', {
    environments: [ 'development', 'staging', 'production' ],
    data: [ { name: 'Rutgers Bootcamp' }, { name: 'Talk Shit' }, { name: 'Cat Chat' }, { name: 'Princeton University' } ]
  });
};

export default function() {
  _seedUsers();
  _seedChannels();
}
