import { Pipe, PipeTransform } from "@angular/core";
import { FibonaaciService } from "./fibonaaci.service";

@Pipe({
    name: 'fibonaaci',
    pure: true
})
//pipe tp transform fibanaci associated number
export class FibonaaciPipe implements PipeTransform {
    constructor(private fiboService: FibonaaciService) { }

    transform(value: number, ...args: any) {
        return this.fiboService.getFibonaaci(value);
    }

}