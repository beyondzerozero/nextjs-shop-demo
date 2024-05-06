import { Heart } from "lucide-react";
import { ProductsMaster } from "../types";
import Image from "next/image";

type Props = {
  product: ProductsMaster["products"][number];
  favoriteCodes: string[];
  changeFavorite: (productId: string) => void;
};

export const ProductItem = ({
  product,
  favoriteCodes,
  changeFavorite,
}: Props) => {
  return (
    <a href="/" className="group flex h-full flex-col gap-2">
      <div className="relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={250}
          height={281}
          className="block aspect-square w-full rounded-sm object-cover group-hover:opacity-60"
        />
        <div className="absolute bottom-2 left-0 rounded-r-full bg-[#0006] px-2 py-1 lg:bottom-2">
          <p className="text-sm font-bold text-white sm:text-lg">
            {product.price.toLocaleString()}원
          </p>
        </div>
        <button
          type="button"
          // a태그의 호버로 버튼 표시
          className={`invisible absolute bottom-2 right-2 flex items-center justify-center rounded-full bg-white p-2 lg:group-hover:visible ${
            favoriteCodes.includes(product.code) ? "lg:visible" : ""
          }`}
          onClick={(e) => {
            // a태그 클릭 비활성화
            e.preventDefault();

            changeFavorite(product.code);
          }}
        >
          <Heart
            className={`size-[20px] ${
              favoriteCodes.includes(product.code)
                ? "fill-red-500 stroke-0"
                : "stroke-2"
            }`}
          />
        </button>
      </div>
      <span className="hidden text-sm lg:line-clamp-2">{product.name}</span>
    </a>
  );
};
