import { IAddress } from '../../general';
import { EFiscalDocModelCode } from '../../general/enums/fiscal-doc-model-code.enum';
import { EAppMode } from '../enums';

export interface IRabbit {
  // #region Properties (20)

  /**
   * Endereço do estabelecimento igual ao do SAT
   */
  address: IAddress;
  /**
   * Api para conexão com o Rabbit
   */
  api: string;
  /**
   * Código do município do estabelecimento igual ao do SAT
   * */
  cityCode: string;
  /**
   * CNPJ do estabelecimento igual ao do SAT
   */
  doc: string;
  enviroment: 'production' | 'development';
  /**
   * Inscrição Estadual do estabelecimento igual ao do SAT
   */
  ie: string;
  /**
   * Ignorar vendas com CPF ou CNPJ?
   */
  ignoreCpfCnpj: boolean;
  /**
   * Modelo do documento 59 SAT e 65 NFC-e
   */
  model: EFiscalDocModelCode;
  /**
   * Razão social do estabelecimento igual ao do SAT
   */
  name: string;
  /**
   * Controlar apenas dinheiro?
   */
  onlyCash: boolean;
  /**
   * Número do caixa
   */
  pdvId: number | null;
  /**
   * Porcentagem de emissão de NFC-e
   */
  percentage: number;
  /**
   * Regime tributário 1- Simples Nacional | 2 - Lucro Presumido | 3 - Lucro Real
   */
  regime: 1 | 2 | 3;
  /**
   * No de série do SAT
   */
  serialNumber: string;
  /**
   * Assinatura do SAT (para NFC-e colocar apenas um número)
   */
  signature: string;
  syncAt: Date | null;
  type: EAppMode;
  ufCode: number | null;
  updatedAt: Date;
  /**
   * Versão do Rabbit
   */
  version: string;

  // #endregion Properties (20)
}
