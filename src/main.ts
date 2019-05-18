
import { StringCalculator } from "./StringCalculator";

const instance = new StringCalculator()
console.log(instance.add('121,987\n12387'))
console.log(instance.add('121,987\n123\n87'))
console.log(instance.add('121,\n987123\n87'))
