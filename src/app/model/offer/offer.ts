import { Lease } from '../Lease/lease';
import { Tactic } from '../Tactic/tactic';
import { ValDate } from '../Vdate/valDate';
import { Model_Geo } from '../Model-Geo/mod_geo';
import { STactic } from '../Tactic/select_tactic';

export class Offer
{
    allModelGeo: Model_Geo;
    lease: Lease;
    tactic: STactic;
    validDate: ValDate;

    constructor(){}
    
}