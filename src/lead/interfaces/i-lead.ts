import { LeadOriginEnum } from '../../general/enums';
import { LeadStatusEnum } from '../enums';

export interface ILead {
    // #region Properties (21)

    // Lista de produtos ou serviços de interesse.
    activity?: string[];
    // Status atual.
    agentId: string;
    // Endereço de e-mail principal para contato.
    alternateEmails?: string[];
    // Número de telefone principal.
    alternatePhones?: string[];
    // ID do agente ou parceiro que cadastrou o lead.
    assignedTo?: string;
    // Notas ou observações adicionais.
    createdAt: number;
    // Tipo de documento (CPF, CNPJ, Passaporte, etc.).
    doc: string;
    // Identificador único do lead.
    docType: any;
    // Nome completo ou razão social do lead.
    email: string;
    id: string;
    // Fonte de origem do lead.
    interestedIn: string[];
    // Data e hora de criação.
    lastContacted?: number;
    // Número do documento conforme o tipo.
    name: string;
    note?: string;
    // Outros endereços de e-mail, se disponíveis.
    phoneNumber?: string;
    responsibleId?: string;
    // Outros números de telefone, se disponíveis.
    sandbox: boolean;
    source: LeadOriginEnum;
    // Data e hora do último contato.
    status: LeadStatusEnum;
    // ID do colaborador responsável pelo lead.
    tags?: string[];
    updatedAt: number;

    // #endregion Properties (21)
    // Etiquetas ou categorias para ajudar na segmentação e busca.
}