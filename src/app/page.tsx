"use client";

import { PageNavigation, PageHeader, PageFooter } from "../layouts";
import { Categories, Products } from "../components";
import { sneakersProductsMaster, favorites } from "../data";
import { useFavorite } from "../hooks/useFavorite";

export default function App() {
  const { favoriteCodes, changeFavorite } = useFavorite(favorites);

  return (
    <div>
      <div className="sticky top-0 z-10 bg-white">
        <PageHeader />
        <Categories />
      </div>
      <main className="container mx-auto max-w-screen-xl p-5 lg:p-10">
        <h2 className="pb-5 text-lg font-bold text-secondary-text lg:text-xl">
          검색된 상품 중 추천상품
        </h2>
        <Products
          productsMaster={sneakersProductsMaster}
          favoriteCodes={favoriteCodes}
          changeFavorite={changeFavorite}
        />
      </main>
      <PageFooter />
      <PageNavigation />
    </div>
  );
}
