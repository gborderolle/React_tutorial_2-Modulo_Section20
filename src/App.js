import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isHiddenRedux = useSelector((state) => state.ui.isHidden); // muestra la propiedad isHidden del redux

  return (
    <Layout>
      {!isHiddenRedux && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
