export class FibonaaciService {

    getFibonaaci(n: number): number {
        if (n <= 1) {
            return n;
        }
        return this.getFibonaaci(n - 1) + this.getFibonaaci(n - 2);
    }
}