// create environment
var env = new App.Environment();

// request override
env.request = function(origin, request) {
	// can make any connectivity / permissions decisions here
	return Link.request(request); // allow request
};

// instantiate services
//env.addServer('localstorage.env', new LocalStorageServer()); :TODO:

// instantiate apps
env.addServer('intro.doc', new App.WorkerServer('/assets/apps/doc/intro.js'));
env.addServer('lib.doc', new App.WorkerServer('/assets/apps/doc/lib.js'));
env.addServer('request-stream.ui', new App.WorkerServer('/assets/apps/widgets/request-stream.js'));

// load client regions
env.addClient('#intro').request('httpl://intro.doc');
env.addClient('#lib').request('httpl://lib.doc/linkjs');
env.addClient('#request-stream').request('httpl://request-stream.ui');