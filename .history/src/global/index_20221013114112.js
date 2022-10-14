import registerProvide from './provide/register-provide';
import registerElement from './register-element';

export function globalRegister(app) {
  app.use(registerProvide);
  app.use(registerElement);
}
