import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { DisplayEvent } from './../../../model/addEvent';
import { EventService } from './../../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { AddEvent } from 'src/app/model/addEvent';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-adminenvironment',
  templateUrl: './adminenvironment.component.html',
  styleUrls: ['./adminenvironment.component.css']
})
export class AdminenvironmentComponent implements OnInit {

  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  paths: any;
  eventCollection: AngularFirestoreCollection;
  // Download URL
  downloadURL: Observable<string>;
  uploadPercent: Observable < number > ;


  event: AddEvent={
    name:'',
    description:'',
    start:'',
    end:'',
    url1: '',
    url2: '',
    url3: '',
    url4: '',
    url5: '',
    url6: '',
    url7: '',
    url8: '',
    url9: '',
  
  }

  displayEvent: DisplayEvent[];
  editState: boolean = false;
  itemToEdit: AddEvent;


  constructor(public addEventService: EventService, private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {

    this.addEventService.getEvent().subscribe( items=> {
      console.log(items);
      this.displayEvent=[];
    items.forEach(element=>{ 
  
      this.displayEvent.push( element as DisplayEvent );

    });
   });

  }

  
  deleteItem(event, item : AddEvent){
    this.addEventService.deleteItem(item);
  }
  

  updateItem(item: AddEvent){
    this.addEventService.updateItem(item);
  }

  editItem(event, item : AddEvent){
    this.editState=true;
    this.itemToEdit=item;
  }

  
  startUpload(event: FileList) {

    for(var i=0; i<event.length; i++){
      if(i==0){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata })
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.event.url1=this.paths; 
          
        });
      })
    ).subscribe();

      }

      if(i==1){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.event.url2=this.paths; 
          
        });
      })
    ).subscribe();

      }

      if(i==2){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.event.url3=this.paths; 
          
        }); 
      })
    ).subscribe();

      }

      if(i==3){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.event.url3=this.paths; 
          
        }); 
      })
    ).subscribe();

      }

      if(i==4){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.event.url4=this.paths; 
          
        }); 
      })
    ).subscribe();

      }

      if(i==5){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.event.url5=this.paths; 
          
        }); 
      })
    ).subscribe();

      }

      if(i==6){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.event.url6=this.paths; 
          
        }); 
      })
    ).subscribe();

      }

      if(i==7){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.event.url7=this.paths; 
          
        }); 
      })
    ).subscribe();

      }

      if(i==8){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.event.url8=this.paths; 
          
        }); 
      })
    ).subscribe();

      }

      if(i==9){
        // The File object
    const file = event.item(i)
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(url); // <-- do what ever you want with the url..
          this.paths=url;
          console.log('this is paths: '+ this.paths);
          this.event.url9=this.paths; 
          
        }); 
      })
    ).subscribe();

      }

    }
    
  }

  onSubmit(){
    this.addEventService.addEvent(this.event);
    this.event.name='';
    this.event.description='';
    this.event.start='';
    this.event.end='';
    this.event.url1='';
    this.event.url2='';
    this.event.url3='';
    this.event.url4='';
    this.event.url5='';
    this.event.url6='';
    this.event.url7='';
    this.event.url8='';
    this.event.url9='';   
  }

}
