function todaysGreeting() {
  const days = ['Beat the Monday blues!', 'Happy Taco Tuesday!', 'Happy hump day!', 'Happy thirsty Thursday!', 'Happy Friyay!', 'Let\'s weekend!', 'Let\'s weekend!'];
  let today = new Date();
  let day = today.getDay();
  console.log(days[day - 1]);
}

module.exports = todaysGreeting;
