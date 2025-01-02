import loadable from '@loadable/component';

const Users = loadable(()=> import('./users'))

export {Users}
