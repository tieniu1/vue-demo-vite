import registerProvide from './register-element';
import registerElement from './register-element';

export function globalRegister(app) {
  app.use(registerProvide);
  app.use(registerElement);
}
