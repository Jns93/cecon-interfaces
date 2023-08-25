import { PaymentTypeEnum } from '../../general';
import { OrderStatusEnum } from '../../general/enums/order-satus.enum';

/**
 * Representa os detalhes específicos do pagamento de uma compra.
 */
export interface IPaymentDetails {
    /** Tipo de método de pagamento usado (por exemplo, cartão de crédito, PayPal). */
    method: PaymentTypeEnum;

    /** Identificador único para a transação de pagamento. */
    transactionId: string;

    /** Montante total pago. */
    amount: number;

    /** Moeda na qual o pagamento foi realizado (por exemplo: 'USD', 'BRL'). */
    currency: string;

    /** Estado atual da transação (por exemplo, pendente, concluído). */
    status: OrderStatusEnum;
}
