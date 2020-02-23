import {Moment} from 'moment';
export class Tactic{
    tacticId: number;
    tacticName: string;
    tacticType: number;
    startDate: Date;
    endDate: Date;
    monetaryAmt: number;
    nonMonetaryAmt: string;
    notes:string;
    messages:string;
    tacticCreationTime:Moment;
    constructor(){}
}

// "endDate": "2020-02-11T11:51:15",
//                         "monetaryAmt": 1000,
//                             "nonMonetaryAmt": "5%",
//                                 "notes": "terms and conditions applied",
//                                     "messages": "good offer",
//                                         "tacticCreationTime": "2020-02-11T11:24:04"