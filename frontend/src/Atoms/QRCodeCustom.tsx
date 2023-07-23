import React from "react"
// import { Box } from "@mui/material"
import { QRCodeCanvas } from "qrcode.react"

interface QRCodeProps {
  value: string;
}

export const QrCodeCustom = (props: QRCodeProps) => {
  const { value } = props;
  return (
    <React.Fragment>
      <QRCodeCanvas value={value} />
    </React.Fragment>
  )
}