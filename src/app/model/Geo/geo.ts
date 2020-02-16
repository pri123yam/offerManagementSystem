
interface State
{
    stateName: string;
    stateId: number;
}
interface District
{
    districtName: string;
    districtId: number;
}
interface City
{
    cityName: string;
    cityId: number;
}

export interface Geo extends State,District,City
{
    geoId: number;
   
}