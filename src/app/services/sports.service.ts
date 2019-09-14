import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AddEvent } from 'src/app/model/addEvent';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  eventCollection: AngularFirestoreCollection<AddEvent>;
  events: Observable<AddEvent[]>
  eventDoc: AngularFirestoreDocument<AddEvent>;

  constructor(public afs:AngularFirestore) {


    this.eventCollection=this.afs.collection('Sportsevents');
    //this.projects=this.afs.collection('projects').valueChanges();
    this.events=this.afs.collection('Sportsevents').snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data=a.payload.doc.data() as AddEvent;
        data.id=a.payload.doc.id;
        return data;
      });
    }));

   }

   addEvent(event: AddEvent){
    this.eventCollection.add(event);  
  }

  getEvent(){ 
    return this.events;    
  }

  deleteItem(item : AddEvent){
    this.eventDoc=this.afs.doc(`Sportsevents/${item.id}`);
    this.eventDoc.delete();
  }


  updateItem(item : AddEvent){
    this.eventDoc=this.afs.doc(`Sportsevents/${item.id}`);
    this.eventDoc.update(item);
  }


}


