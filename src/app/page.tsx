// pages/index.tsx
import ProductCard from "@/app/components/card";

const HomePage = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8"> {/* Adjust padding as needed */}
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;
