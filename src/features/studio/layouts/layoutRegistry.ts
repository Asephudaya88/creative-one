import PortraitIDCardLayout from "./PortraitIDCardLayout";
import BusinessCardLayout from "./BusinessCardLayout";
import BannerLayout from "./BannerLayout";
import SpandukLayout from "./SpandukLayout";
import IDCardLayout from "./IDCardLayout";
import LabelProdukLayout from "./LabelProdukLayout";

export const layoutRegistry = {
  "business-card": BusinessCardLayout,
  banner: BannerLayout,
  spanduk: SpandukLayout,
  "id-card": IDCardLayout,
  "id-card-portrait": PortraitIDCardLayout,
  label: LabelProdukLayout,
};