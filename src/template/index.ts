import { BanorteBank } from "./BanorteBank";
import { SantanderBank } from "./SantanderBank";

const santanderBank = new SantanderBank();
const banorteBank = new BanorteBank();

santanderBank.deposit(10000);
santanderBank.transfer(3000, "ACC-001");

banorteBank.deposit(5000);
banorteBank.transfer(6000, "ACC-002");
