import { QRCodeCanvas } from "qrcode.react";

type Props = {
  value: string;
};

export default function DynamicQRCode({
  value,
}: Props) {
  return (
    <div className="bg-white p-3 rounded-xl">
      <QRCodeCanvas
        value={value}
        size={90}
      />
    </div>
  );
}