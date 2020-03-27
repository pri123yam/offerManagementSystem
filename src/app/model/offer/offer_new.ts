import { Vehicle } from './vehicle';
import { Geo } from './geo';
import { STactic } from '../Tactic/select_tactic';
import { Lease } from '../Lease/lease';
import { ValDate } from '../Vdate/valDate';

export class Offer_new{
    vehicle: Vehicle;
    geo: Geo;
    tactic: STactic;
    lease: Lease;
    validation: ValDate;

    constructor(){
        
    }
}