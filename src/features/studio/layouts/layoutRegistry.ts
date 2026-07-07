import BusinessCardLayout from "../layouts/BusinessCardLayout";
import BannerLayout from "../layouts/BannerLayout";
import SpandukLayout from "../layouts/SpandukLayout";
import IDCardLayout from "../layouts/IDCardLayout";
import LabelProdukLayout from "../layouts/LabelProdukLayout";

export const layoutRegistry = {
  "business-card": BusinessCardLayout,
  banner: BannerLayout,
  spanduk: SpandukLayout,
  "id-card": IDCardLayout,
  label: LabelProdukLayout,
};