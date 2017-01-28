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
    data: [{
      name: 'Rutgers Bootcamp',
      location: {lat: 40.5369359, lng: -74.5223458}
    },{
      name: 'Talk Poop'
    },{
      name: 'Cat Chat'
    },{
      name: 'General'
    },{
      name: 'Central Park',
      location: {lat: 40.7828687, lng: -73.9675492}
    },{
      name: 'Six Flags',
      location: {lat: 40.1397641, lng: -74.4470141}
    },{
      name: 'Prudential Center',
      location: {lat: 40.7336207, lng: -74.1733441}
    },{
      name: 'PNC Bank Arts Center',
      location: {lat: 40.3902599, lng: -74.2249534}
    }]
  });
};

export default function() {
  _seedUsers();
  _seedChannels();
}
