(function () {
  const ADMIN_EMAIL = 'contato@aequipe.com.br';
  const config = window.FIREBASE_CONFIG;
  const configured = config &&
    config.apiKey !== 'PREENCHER_NO_FIREBASE_CONSOLE' &&
    config.appId !== 'PREENCHER_NO_FIREBASE_CONSOLE';

  if (!configured) {
    window.fcConfigured = false;
    return;
  }

  firebase.initializeApp(config);
  const auth = firebase.auth();
  window.fcConfigured = true;
  window.fcAuth = auth;

  window.fcEnsureAnonymous = async function () {
    if (!auth.currentUser) await auth.signInAnonymously();
  };

  window.fcSignInWithGoogle = async function () {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    const user = result.user;
    if (!user || !user.email || user.email.toLowerCase() !== ADMIN_EMAIL) {
      await auth.signOut();
      throw new Error('Acesse com a conta Google autorizada da pesquisadora.');
    }
    return user;
  };

  window.fcSignOut = function () {
    return auth.signOut();
  };

  window.fcFetch = async function (path, options) {
    if (!auth.currentUser) throw new Error('Autenticação Firebase necessária.');
    const token = await auth.currentUser.getIdToken();
    const cleanPath = String(path).replace(/^\/+/, '');
    const [resource, query] = cleanPath.split('?');
    const url = new URL(config.databaseURL + '/' + resource + (resource.endsWith('.json') ? '' : '.json'));
    if (query) new URLSearchParams(query).forEach((value, key) => url.searchParams.set(key, value));
    url.searchParams.set('auth', token);
    return fetch(url.toString(), options || {});
  };
})();
