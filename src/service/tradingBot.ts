class TradingBot {
  private isTrading: boolean = false; // 현재 거래 상태
  private buyPrice: number | null = null; // 매수 가격
  private maxPrice: number | null = null; // 매수 후 최고 가격
  private readonly prices: number[] = []; // 최근 가격 데이터 저장
  private readonly stopLossThreshold: number = -5; // 손절 기준 (-5%)
  private readonly takeProfitThreshold: number = 10; // 익절 기준 (+10%)
  private readonly trailingStopLoss: number = 1; // 트레일링 스톱 하락 비율 (1%)

  start() {
    this.isTrading = true;
    console.log("Trading started");
  }

  stop() {
    this.isTrading = false;
    console.log("Trading stopped");
  }
}
