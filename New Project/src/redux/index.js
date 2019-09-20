import store from '../redux/stores/index';
import  { addArticle } from '../redux/actions/index';

window.store = store;
window.addArticle = addArticle;