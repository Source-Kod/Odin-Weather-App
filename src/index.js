import KEY from '../key.js';

async function main() {
  const userIP = await getPublicIP();
  getData(userIP);
}

async function getData(userIP) {
  try {
    const x = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${userIP}`,
    );
    const y = await x.json();
    console.log(y.current.temp_c);
    console.log(y.location.name);
  } catch (err) {
    console.log(`catch ${err}`);
  }
}

async function getPublicIP() {
  const publicIP = await fetch('https://api.ipify.org?format=json');
  const publicIPString = await publicIP.json();
  // console.table(publicIPString.ip);
  return publicIPString.ip;
}
main();
