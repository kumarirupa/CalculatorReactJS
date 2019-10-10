/* ----- Asynchronously loads the component for Registration ------*/
import loadable from 'loadable-components';

export default loadable(() => import('./index'));
