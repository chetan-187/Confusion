import { Injectable } from '@angular/core';
import { Leader } from  '../shared/leader';
import{ LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return new Promise( resolve => {
       //Simulate server latency with 2 seconds 
      setTimeout(() => resolve(LEADERS) , 4000)
    }) 
  }

  getLeader(id : string): Leader {  
    return LEADERS.filter((leader) => (leader.id === id ))[0];
  }
  getFeaturedLeader(): Promise<Leader> {
    return new Promise( resolve => {
      //Simulate server latency with 2 seconds 
     setTimeout(() => resolve(LEADERS.filter((leader) => (leader.featured))[0]) , 4000)
   })
  }
  
}
