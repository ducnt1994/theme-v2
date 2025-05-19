import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

interface UseHeaderLogicReturn {
  searchValue: string;
  setSearchValue: (value: string) => void;
  onClickSearchInput: () => void;
  handleSearch: () => void;
  handleClickCart: () => void;
}

export function useHeaderLogic(): UseHeaderLogicReturn {
  const [searchValue, setSearchValueState] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const setSearchValue = (value: string) => setSearchValueState(value);

  const onClickSearchInput = () => {
    // Logic focus/animation nếu cần
    console.log("Search input clicked");
  };

  const handleSearch = () => {
    if (!searchValue) return;
    router.push(`/search?q=${encodeURIComponent(searchValue)}`);
  };

  const handleClickCart = () => {
    router.push("/checkout/cart");
  };

  return {
    searchValue,
    setSearchValue,
    onClickSearchInput,
    handleSearch,
    handleClickCart
  };
}