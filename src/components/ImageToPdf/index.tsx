import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { QRCodeCanvas } from "qrcode.react";
import React, { useRef } from "react";
import { PiDownloadSimple } from "react-icons/pi";

import CertificateBackground from "@assets/certificado.jpeg";
import { Button } from "@heroui/react";

interface ImageToPdfProps {
  text: string;
  title: string;
  qrcodeUrl: string;
}

const ImageToPDF: React.FC<ImageToPdfProps> = ({
  text,
  title,
  qrcodeUrl,
}: ImageToPdfProps) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);

  const handleGeneratePDF = async () => {
    if (!imageRef2.current) return;

    try {
      // Ajuste as configurações de renderização
      const canvas = await html2canvas(imageRef2.current, {
        scale: 2, // Aumenta a resolução para melhorar a renderização de fontes
      });

      const imgData = canvas.toDataURL("image/jpeg");

      // Dimensões do PDF em formato paisagem (A4)
      const imgWidth = 297; // Largura A4 em mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Crie o PDF
      const pdf = new jsPDF("landscape", "mm", "a4");
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      pdf.save(title.toUpperCase());
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
    }
  };

  return (
    <div className="mt-4">
      {/* Div contendo a imagem e o texto */}
      <div
        ref={imageRef}
        style={{
          position: "relative",

          // width: "2480px",
          // height: "3508px",
        }}
        // 2480 x 3508 pixels
      >
        <img
          src={CertificateBackground}
          alt="Background"
          style={{
            borderRadius: "12px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <QRCodeCanvas
          style={{
            position: "absolute",

            bottom: "1rem",
            left: "1rem",
          }}
          value={qrcodeUrl}
          size={50}
        />
        <div
          style={{
            position: "absolute",
            width: "80%",
            top: "24%",
            left: "18%",
            padding: "38px",
          }}
        >
          <div
            className="text-black text-xs"
            style={{
              fontSize: "calc(0.45vw + 0.18em)", // Tamanho padrão
              lineHeight: "1.3", // Proporção consistente entre linhas
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.01rem",
              pointerEvents: "none",
              userSelect: "none",
              textAlign: "justify",
              // Ajuste condicional para telas menores que 500px
              // ...(window.innerWidth > 500 && {
              //   fontSize: "calc(0.3rem + 0.1vw)", // Diminui o tamanho
              // }),
            }}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>

      <div className="w-[100%] flex justify-end mb-14">
        <Button
          className="my-8 text-md"
          color="primary"
          variant="solid"
          onPress={() => handleGeneratePDF()}
          endContent={<PiDownloadSimple />}
        >
          Baixar certificado
        </Button>
      </div>

      <div
        style={{
          position: "absolute",
          top: "-999999",
          left: "-999999",
        }}
      >
        <div
          ref={imageRef2}
          style={{
            position: "relative",

            width: "1122px",
            height: "793px",
          }}
          // 2480 x 3508 pixels
        >
          <img
            src={CertificateBackground}
            alt="Background"
            style={{
              borderRadius: "12px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <QRCodeCanvas
            style={{
              position: "absolute",

              bottom: "1rem",
              left: "1rem",
            }}
            value={qrcodeUrl}
            size={98}
          />
          {/* <div
            style={{
              position: "absolute",
              top: "28%",
              left: "20%",
              padding: "3.4rem",
            }}
          > */}
          <div
            style={{
              position: "absolute",
              top: "22%",
              left: "20%",
              padding: "5.4rem 5.4rem 0 3.4rem",
              // padding: "0 48px 18px 0",
            }}
          >
            <div
              className="text-black text-xl"
              style={{
                // letterSpacing: "0.05rem",
                fontFamily: "Arial",
                pointerEvents: "none",
                userSelect: "none",
                textAlign: "justify",
              }}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageToPDF;
