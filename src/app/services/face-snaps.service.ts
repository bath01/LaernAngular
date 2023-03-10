import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald bath',
      description: 'Mon enfant de toujours !',
      imageUrl:
        'https://media.istockphoto.com/id/1325578537/fr/photo/heureuse-m%C3%A8re-indienne-samuser-avec-sa-fille-en-plein-air-concept-de-famille-et-damour.webp?s=612x612&w=is&k=20&c=mE534M7qi8h11KIEy3QoH2VTinCJUaDaiV5v2G98hn0=',
      createDate: new Date(),
      snaps: 145,
      location: 'Abidjan',
    },
    {
      id: 2,
      title: 'Bath',
      description: 'EEEHOOO',
      imageUrl:
        'http://www.religieux.org/wp-content/uploads/2018/09/Lire-ecouter-la-Bible-sur-le-net-pixabay-1280x765.jpg',
      createDate: new Date(),
      snaps: 0,
      location: 'Yakro',
    },
    {
      id: 3,
      title: 'Dorgeles',
      description: 'reiennnnnnnnnn',
      imageUrl:
        'https://phoneky.co.uk/thumbs/android/thumbs/ico/8/s/louis-segond-android.jpg',
      createDate: new Date(),
      snaps: 0,
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  // snapFaceSnapById(faceSnapId: number) {
  //   const faceSnap = this.faceSnaps.find(
  //     (faceSnap) => faceSnap.id === faceSnapId
  //   );
  //   if (faceSnap) {
  //     faceSnap.snaps++;
  //   } else {
  //     throw new Error('FaceSnap not found!');
  //   }
  // }
}
