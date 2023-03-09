import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  //Tableau
  faceSnap!: FaceSnap[];

  //CREATION DE PROPRIÉTÉ DE TYPE FACESNAP
  // mySnap!: FaceSnap;
  // myOtherSnap!: FaceSnap;
  // myLastSnap!: FaceSnap;

//initialisation avec cette fonction
  ngOnInit() {
    //Tableau qui va regrouper tous nos elements
    this.faceSnap = [
      {
      title:'Archibald',
      description:'Mon enfant de toujours !',
      imageUrl:'https://media.istockphoto.com/id/1325578537/fr/photo/heureuse-m%C3%A8re-indienne-samuser-avec-sa-fille-en-plein-air-concept-de-famille-et-damour.webp?s=612x612&w=is&k=20&c=mE534M7qi8h11KIEy3QoH2VTinCJUaDaiV5v2G98hn0=',
      createDate : new Date(),
      snaps: 145,
      location: 'Abidjan'
      },
      {
      title: 'Bath',
      description: 'EEEHOOO',
      imageUrl:
        'http://www.religieux.org/wp-content/uploads/2018/09/Lire-ecouter-la-Bible-sur-le-net-pixabay-1280x765.jpg',
      createDate: new Date(),
      snaps: 0,
      location: 'Yakro',
      },
      {
      title:'Dorgeles',
      description:'reiennnnnnnnnn',
      imageUrl:'https://phoneky.co.uk/thumbs/android/thumbs/ico/8/s/louis-segond-android.jpg',
      createDate : new Date(),
      snaps : 0
    }
    ];

  }
}
