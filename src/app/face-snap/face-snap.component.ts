import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {

  // On utlisera un decorateur pour notre propriété
  @Input() faceSnap!: FaceSnap;

  //DECLARATION DES DONNÉES
  // title!: string;
  // description!: string;
  // createDate!: Date;
  // snaps!: number;
  // imageUrl!: string;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {

  }

  //METHODE ONINIT
  ngOnInit() {
    //Initialiser les données
    // this.title = 'Archibald';
    // this.description = 'Mon enfant de toujours !';
    // this.createDate = new Date();
    // this.snaps = 6;
    // this.imageUrl =
    //   'https://media.istockphoto.com/id/1325578537/fr/photo/heureuse-m%C3%A8re-indienne-samuser-avec-sa-fille-en-plein-air-concept-de-famille-et-damour.webp?s=612x612&w=is&k=20&c=mE534M7qi8h11KIEy3QoH2VTinCJUaDaiV5v2G98hn0=';
    this.buttonText = 'Oh Snap';

  }

  //Methode pour le bouton
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      // this.faceSnap.snaps++;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
