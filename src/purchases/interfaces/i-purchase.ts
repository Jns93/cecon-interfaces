import { PaymentProviderEnum } from '../../general/enums/providers.enum';
import { IAppInfo } from './i-app-info';
import { IPaymentDetails } from './i-payment-details';

/**
 * Representa uma compra dentro do sistema.
 * Esta interface fornece uma separação clara de diferentes aspectos da compra, 
 * como detalhes do pagamento e informações sobre o aplicativo.
 */
export interface IPurchase {
    /** Identificador único para a compra. */
    purchaseId: string;

    /** ID da empresa associada à compra. */
    companyId: string;

    /** ID do dispositivo para o qual o aplicativo foi ativado. */
    deviceId: string;

    /** Informações sobre o aplicativo ou módulo ativado. */
    appInfo: IAppInfo;

    /** Data e hora da compra. */
    purchaseDate: Date;

    /** Identificação da origem do pagamento ex: DESENFILA */
    provider: PaymentProviderEnum;

    /** Detalhes específicos do pagamento. */
    paymentDetails: IPaymentDetails;

    /** Qualquer informação adicional ou notas relacionadas à compra. */
    additionalNotes?: string;
}
