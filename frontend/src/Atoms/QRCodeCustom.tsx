import React from "react"
import { QRCodeCanvas } from "qrcode.react"

interface QRCodeProps {
  value: string;
}

export const QrCodeCustom = (props: QRCodeProps) => {
  const { value } = props;
  return (
    <React.Fragment>
      <QRCodeCanvas value={value} bgColor="rgba(255, 255, 255, 0)" />
    </React.Fragment>
  )
}