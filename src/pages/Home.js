import Footer from "../features/common/Footer";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";

function Home() {
  return (
    <div>
      <NavBar>
        <ProductList />
      </NavBar>
    </div>
  );
}

export default Home;
