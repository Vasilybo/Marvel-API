import 'regenerator-runtime/runtime';
import App from './components/App';
import Comics from './components/Comics';

(async () => {
await App.render();
Comics.eventListener();
})();

//axios.get(url, {
//params: {
//apikey: API_KEY
//}
//})
//.then(result => console.log(result.data.data.results))
//.catch(error => console.log(error.massage))