import { IAddress } from '../../general';
import { EFiscalDocModelCode } from '../../general/enums/fiscal-doc-model-code.enum';

export interface IRabbit {
  // #region Properties (6)

  /**
   * Modelo do documento 59 SAT e 65 NFC-e
   */
  model: EFiscalDocModelCode;
  /**
   * Api para conexão com o Rabbit
   */
  api: string;
  /**
   * No de série do SAT
   */
  serialNumber: string;
  /**
   * Número do caixa
   */
  pdvId: string;
  /**
   * Assinatura do SAT (para NFC-e colocar apenas um número)
   */
  signature: string;
  /**
   * Versão do Rabbit
   */
  version: string;
  /**
   * CNPJ do estabelecimento igual ao do SAT
   */
  doc: string;
  /**
   * Inscrição Estadual do estabelecimento igual ao do SAT
   */
  ie: string;
  /**
   * Regime tributário 1- Simples Nacional | 2 - Lucro Presumido | 3 - Lucro Real
   */
  regime: 1 | 2 | 3;
  /**
   * Razão social do estabelecimento igual ao do SAT
   */
  name: string;
  /**
   * Endereço do estabelecimento igual ao do SAT
   */
  address: IAddress;
  /**
   * Código do município do estabelecimento igual ao do SAT
   * */
  cityCode: string;
  /**
   * Controlar apenas dinheiro?
   */
  onlyCash: boolean;
  /**
   * Ignorar vendas com CPF ou CNPJ?
   */
  ignoreCpfCnpj: boolean;
  /**
   * Porcentagem de emissão de NFC-e
   */
  percentage: number;
  // #endregion Properties (6)
}
