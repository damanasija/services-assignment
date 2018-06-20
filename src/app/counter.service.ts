export class CounterService {
  aToI: number = 0;
  iToA: number = 0;
  toActive() {
    this.iToA++;
    alert(`Inactive to Active changed ${this.iToA} times`);
  }
  toInactive() {
    this.aToI++;
    alert(`Inactive to Active changed ${this.aToI} times`);
  }
}