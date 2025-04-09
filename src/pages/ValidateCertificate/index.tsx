import { doc, getDoc } from "firebase/firestore";
import { db } from "@services/firebase";
import { AnimationSegment } from "lottie-web";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Lottie from "react-lottie-player";
import { useParams } from "react-router-dom";

import animationData from "@assets/animation.json"; // Substitua pelo caminho correto
import { CertificateDTO } from "@dtos/CertificateDTO";
import { Divider, ScrollShadow } from "@heroui/react";
// import Certificate from "@pages/ProvideCertificate/pages/Certificate";

import { Container, Content } from "./styles";

type ParamsProps = {
  certificateId: string;
};

const Validator: React.FC = () => {
  const { certificateId } = useParams<ParamsProps>();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );
  const [certificate, setCertificate] = useState<CertificateDTO | null>(null);
  // const [work, setWork] = useState<WorkDTO>({} as WorkDTO);
  const [onCompleteAnimation, setOnCompleteAnimation] = useState(false);

  const fetchCertificate = useCallback(async () => {
    console.log(certificateId);
    if (!certificateId) {
      setStatus("error");
      return;
    }

    try {
 
      const docRef = doc(db, "certificates", certificateId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as CertificateDTO;
        setCertificate({ uid: docSnap.id, ...data });

        // const workDocRef = doc(db, "works", data.workId);
        // const workDocSnap = await getDoc(workDocRef);
        // const workData = {
        //   uid: workDocSnap.id,
        //   ...workDocSnap.data(),
        // } as WorkDTO;
        // setWork(workData);

        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  }, [certificateId]);

  useEffect(() => {
    fetchCertificate();
  }, [fetchCertificate]);

  // Memorizando as transições de animação para evitar recalculá-las a cada render
  const animationSegments = useMemo((): AnimationSegment => {
    switch (status) {
      case "loading":
        return [1, 120]; // Trecho da animação para loading
      case "success":
        return [240, 398]; // Trecho da animação para sucesso
      case "error":
        return [708, 811]; // Trecho da animação para erro
      default:
        return [1, 120];
    }
  }, [status]);

  return (
    <Container>
      <ScrollShadow className="w-full" hideScrollBar>
        <Content>
          <Lottie
            loop={false}
            play
            animationData={animationData}
            segments={animationSegments}
            style={{ width: 200, height: 200 }}
            onComplete={() => setOnCompleteAnimation(true)}
          />

          {/* {status === "loading" && <p>Carregando...</p>} /*/}
          {status === "success" && certificate && onCompleteAnimation && (
            // <div className="animate__animated animate__backInUp">
            <>
              <div className="animate__animated animate__fadeIn">
                <h1 className=" mt-16 font-mono text-5xl text-gray-100 text-center">
                  Certificado Válido!
                </h1>

                <Divider className="my-4" />

                <p className="mt-8 text-tiny text-white/60 uppercase font-bold">
                  Identificador Único:
                </p>
                <h4 className="text-white font-medium text-large">
                  {certificate.uid}
                </h4>

                <p className="mt-2 text-tiny text-white/60 uppercase font-bold">
                  Nome:
                </p>
                <h4 className="text-white font-medium text-large">
                  {certificate.author.name}
                </h4>

                {certificate.coauthors && certificate.coauthors.length > 0 && (
                  <>
                    {/* <Divider className="my-8" /> */}
                    <p className="mt-2 text-tiny text-white/60 uppercase font-bold">
                      Coautor(es):
                    </p>
                    <ul>
                      {certificate.coauthors.map((coauthor) => (
                        <li key={coauthor.uid}>
                          <p className="mt-2 text-tiny text-white/60 uppercase font-bold">
                            Nome:
                          </p>
                          <h4 className="text-white font-medium text-large">
                            {coauthor.name}
                          </h4>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <Divider className="my-8" />

                <p className="mt-2 text-tiny text-white/60 uppercase font-bold">
                  Emitido por
                </p>
                <h4 className="text-white font-medium text-large">
                  {certificate.issueBy.name} (ID: {certificate.issueBy.uid})
                </h4>

                <p className="mt-2 text-tiny text-white/60 uppercase font-bold">
                  Data de Emissão:
                </p>
                <h4 className="text-white font-medium text-large">
                  {certificate.issueDate || "Não disponível"}
                </h4>
              </div>

              <div
                className="animate__animated animate__fadeIn"
                style={{ width: "80%", margin: "0 auto" }}
              >
                {/* <Certificate
                  showOnlyCertificate={true}
                  // workData={work}
                  studentData={certificate.issueBy}
                /> */}
              </div>
            </>
          )}
          {status === "error" && onCompleteAnimation && (
            <section className="animate__animated animate__backInUp">
              <h1 className="font-mono text-5xl text-gray-100">Atenção!</h1>
              <p className="mt-4 font-normal text-center text-xl text-gray-300">
                Esse certificado não foi localizado em nossa base de dados e
                pode ser produto de falsificação.
              </p>
            </section>
          )}
        </Content>
      </ScrollShadow>
    </Container>
  );
};

export default Validator;
