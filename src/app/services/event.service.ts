import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { AddEvent } from '../model/addEvent';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventCollection: AngularFirestoreCollection<AddEvent>;
  events: Observable<AddEvent[]>
  eventDoc: AngularFirestoreDocument<AddEvent>;

  constructor(public afs:AngularFirestore) {


    this.eventCollection=this.afs.collection('events');
    //this.projects=this.afs.collection('projects').valueChanges();
    this.events=this.afs.collection('events').snapshotChanges().pipe(map(changes=>{
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
    this.eventDoc=this.afs.doc(`events/${item.id}`);
    this.eventDoc.delete();
  }


  updateItem(item : AddEvent){
    this.eventDoc=this.afs.doc(`events/${item.id}`);
    this.eventDoc.update(item);
  }

}
