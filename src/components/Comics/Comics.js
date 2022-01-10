import {API_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE} from '../../constants/api.js';
import {getDataApi} from '../../utilites/getdataapi.js';
import {ROOT_INDEX} from '../../constants/root';

import Characters from '../Characters';
import Error from '../Error';

import classes from './Comics.css';

class Comics {
renderComics(data) {
let htmlContent = '';

    console.log(data)
data.forEach(({id, title, thumbnail: {path, extension} }) => {

if(path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

htmlContent += `
<li class="border comics__item" data-uri="${uri}">
<span class="comics__name">${title}</span>
<img class="comics__img" src="${imgSrc}"/>
</li>
`;
}
});

const htmlWrapper = `
<ul class="comics__container">
${htmlContent}
</ul>
`;

ROOT_INDEX.innerHTML = htmlWrapper;
}
async render() {
const data = await getDataApi.getData(API_URL + URL_COMICS);

data ? this.renderComics(data) : Error.render();
}

eventListener() {
document.querySelectorAll('.comics__item').forEach(element => {
const uri = element.getAttribute('data-uri');

element.addEventListener('click', () => {
Characters.render(uri);
})
})
}
}

export default new Comics();