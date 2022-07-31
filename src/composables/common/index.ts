import { useCommonStore } from "../../store/common";

export const startLoading = () => {
  const store = useCommonStore();
  store.loadingStart();
};

export const finishLoading = () => {
  const store = useCommonStore();
  store.loadingFinish();
};
