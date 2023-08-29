import { DocTypeEnum, LeadOriginEnum } from '../../general/enums';
import { LeadStatusEnum } from '../enums';
import { ILead } from '../interfaces';

export class LeadEntity implements ILead {
    // #region Properties (21)

    /**Lista de produtos ou serviços de interesse.  */
    activity?: string[] = [];
    /**Status atual.  */
    public agentId: string = '';
    /**Endereço de e-mail principal para contato.  */
    alternateEmails?: string[] = [];
    /**Número de telefone principal.  */
    alternatePhones?: string[] = [];
    /**ID do agente ou parceiro que cadastrou o lead.  */
    assignedTo?: string = '';
    /**Notas ou observações adicionais.  */
    public createdAt: number = Date.now();
    /**Tipo de documento (CPF, CNPJ, Passaporte, etc.).  */
    public doc: string = '';
    /**Identificador único do lead.  */
    public docType: DocTypeEnum = DocTypeEnum.CNPJ;
    /**Nome completo ou razão social do lead.  */
    public email: string = '';
    public id: string = '';
    /**Fonte de origem do lead.  */
    public interestedIn: string[] = [];
    /**Data e hora de criação.  */
    lastContacted?: number = Date.now();
    /**Número do documento conforme o tipo.  */
    public name: string = '';
    note?: string = '';
    /**Outros endereços de e-mail, se disponíveis.  */
    phoneNumber?: string = '';
    responsibleId?: string = '';
    /**Outros números de telefone, se disponíveis.  */
    public sandbox: boolean = false;
    public source: LeadOriginEnum = LeadOriginEnum.OTHERS;
    /**Data e hora do último contato.  */
    public status: LeadStatusEnum = LeadStatusEnum.NEW;
    /**ID do colaborador responsável pelo lead.  */
    tags?: string[] = [];
    public updatedAt: number = Date.now();

    // #endregion Properties (21)

    // #region Constructors (1)

    constructor(data?: Partial<LeadEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }

    // #endregion Constructors (1)
    // Etiquetas ou categorias para ajudar na segmentação e busca.
}