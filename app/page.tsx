import Header from "../components/Header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";
export default function Home() {
  return (
    <>
    <Header />
    <div className="container">
   <MainContent />
    </div>
    
    <Footer />
    </>
  );
}
