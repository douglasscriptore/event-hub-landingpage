export interface CoauthorDTO {
  uid: string; // ID do estudante
  name: string; // Nome do coautor
}

export interface AuthorDTO {
  uid: string; // ID do estudante
  name: string; // Nome do coautor
}

export interface CertificateDTO {
  uid?: string;
  workId: string; // ID do trabalho relacionado ao certificado
  coauthors?: CoauthorDTO[]; // ID do estudante relacionado ao certificado
  text: string;
  author: AuthorDTO;
  issueDate?: string; // Data de emissão do certificado
  issueBy: AuthorDTO | CoauthorDTO;
  createdAt?: string; // Timestamp de quando o certificado foi criado
}
