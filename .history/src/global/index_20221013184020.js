import registerProvide from './provide';
import registerDirectives from './directives';
import registerElement from './register-element';

export function globalRegister(app) {
  app.use(registerProvide);
  app.use(registerElement);
}
