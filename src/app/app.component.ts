import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  //CREATION DE PROPRIÉTÉ DE TYPE FACESNAP
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

//initialisation avec cette fonction
  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon enfant de toujours !',
      'https://media.istockphoto.com/id/1325578537/fr/photo/heureuse-m%C3%A8re-indienne-samuser-avec-sa-fille-en-plein-air-concept-de-famille-et-damour.webp?s=612x612&w=is&k=20&c=mE534M7qi8h11KIEy3QoH2VTinCJUaDaiV5v2G98hn0=',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Bath',
      'EEEHOOO',
      'http://www.religieux.org/wp-content/uploads/2018/09/Lire-ecouter-la-Bible-sur-le-net-pixabay-1280x765.jpg',
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnap(
      'Dorgeles',
      'reiennnnnnnnnn',
      'https://phoneky.co.uk/thumbs/android/thumbs/ico/8/s/louis-segond-android.jpg',
      new Date(),
      0
    );

  }
}
