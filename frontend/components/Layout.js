import Footer from './Footer';
import Navbar2 from './Navbar2';


export default function Layout({ children }) {
  return (
    <div>
   
      {children}
      <Footer />
     
    </div>
  );
}