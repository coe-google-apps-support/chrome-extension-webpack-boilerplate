import icon128 from '../img/icon128.png';
import icon48 from '../img/icon48.png';
import icon16 from '../img/icon16.png';

window.__lc = window.__lc || {};
window.__lc.license = 9242305;

var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('load-livechat.bundle.js');
// s.onload = function() {
//     this.remove();
// };
(document.head || document.documentElement).appendChild(s);