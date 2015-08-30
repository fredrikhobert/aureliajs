import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','hello'], name: 'hello', moduleId: 'hello', nav: true, title:'Hello' },
      { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github users' },
      { route: 'test',  name: 'test', moduleId: 'test', nav: true, title:'Just testing!' }
    ]);

    this.router = router;
  }
}