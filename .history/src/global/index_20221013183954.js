import registerProvide from './provide';
import registerDiriactives from './diriactives';
import registerElement from './register-element';

export function globalRegister(app) {
  app.use(registerProvide);
  app.use(registerElement);
}
