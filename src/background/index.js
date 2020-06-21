import Cache from './cache';
import Options from './options';
import Listeners from './listeners.js';
import VersionManager from './version.js';
import ContextMenu from './contextmenu.js';
import BrowserAction from './browseraction.js';

VersionManager.update(() => {
  Cache.init(() => {
    Listeners.init();
    ContextMenu.init();
    BrowserAction.init();
  });
});

// TODO: Find alternative approach to make methods accessible to Options page
window.saveOption = Options.saveOption;