import 'sass/styles.scss';
import sayHello from './hello';
import Logo from 'images/logo.png';

document.getElementById('logo').src = Logo;

console.log(sayHello());
document.getElementById('hello').innerHTML = sayHello();
