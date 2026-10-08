import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonList, IonItem, IonButton, IonInput, IonLabel} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonList, IonItem, IonButton, IonInput, IonLabel, FormsModule],
})
export class HomePage {
  constructor() {}

  students = [
 {
 id: 1,
 name: 'Juan Dela Cruz',
 gender: 'Male',
 course: 'BS Information Technology',
 year: 3,
 age: 21,
 img: "https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/482252414_1961823807673963_6746057391411456893_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF5fYoRgT27_HrhJ0SvEPOChZkf8DRthyqFmR_wNG2HKoWq7AyI6HT_aGXRGm5p9vjmKYDFDssjolc281m0Nz1K&_nc_ohc=KwkTgOzlKIIQ7kNvwEwn1Ak&_nc_oc=Adr6eLv_aZFHWJff1Mi2pZOmQPwopj3y7UUk1MzpN7q4Q9RvGhFfv2sUhC8DMAnQqwJXvkhVOAV79zx39EnFzc1b&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=7VhDL3RCuqsYNiO86W5d9w&_nc_ss=7b2a8&oh=00_AQM1vW4W2FWi8C1t7BkI2lrvOANUFEc4oJW28m1nNliQpg&oe=6AC8F1F8"
 },
 {
 id: 2,
 name: 'Maria Santos',
 gender: 'Female',
 course: 'BS Information Technology',
 year: 3,
 age: 20,
 img: "https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-1/831726117_2604724270018169_3196964081524186648_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s200x200&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFAjVZP4WUe0WZc44XRcAg5pjGG18DGTROmMYbXwMZNE2wlb3O-_nZEOsYUWo3Zb7m5PsEECkKRfXygJ25Y0uE7&_nc_ohc=UjUQKhp0ezUQ7kNvwFRIu3T&_nc_oc=AdpZtdTNi4DLUFdU40i8IF2CO2ivBDoraKLmwcZh7ubQEIpgtankzXNWT0c1ZrkXH57l6R_JF42W3XdGlJB-52CQ&_nc_zt=24&_nc_ht=scontent.fdvo2-1.fna&_nc_gid=_b1WMZ5Fi1aS7PHHd4HhQA&_nc_ss=7b2a8&oh=00_AQM-bqK5UkCJ8s1JO38tB1c7I1cMySzq7dwo2-qIFslpwg&oe=6AC909E6"
 },
 {
 id: 3,
 name: 'Carlos Reyes',
 gender: 'Male',
 course: 'BS Information Technology',
 year: 3,
 age: 0,
 img: "https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/760708120_28153281334265244_1835376210796122397_n.jpg?stp=dst-jpg_tt6&cstp=mx2043x2048&ctp=s2043x2048&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFVQuhyzcluhxRFhZhRO7C7rIcEfNDW-p-shwR80Nb6nyDrJyW4-HXHsr0a0pVP4Ql9SiV8ilB7V6pXQF6-4r7_&_nc_ohc=6AVFGcZOHK0Q7kNvwGy-ODW&_nc_oc=Adqc9tDPDuQmnPLnVnv6XxH-XKReDutl0LsUNGkVjSOOisizI5Zj2senvbnz5wP-8fJKGgbgu7PlL9ZT339T-U9l&_nc_zt=23&_nc_ht=scontent.fdvo2-2.fna&_nc_gid=a8iztQU5BmFUf2xB-GZWBA&_nc_ss=7b2a8&oh=00_AQPa3ZjgwrYKm-H1qHSQC8PoB8OcPrPq2Ui6J5EbgJhneg&oe=6AC8EF03"
 },
 {
 id: 4,
 name: 'Angela Garcia',
 gender: 'Female',
 course: 'BS Information Technology',
 year: 3,
 age: 71,
 img: "https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.15752-9/825311091_1789607368736945_4266239127235077183_n.jpg?stp=dst-jpg_tt6&cstp=mx3024x4032&ctp=s2048x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEv89_0Ypro4YF7ZSjYVyW-0pqL0qJRb6DSmovSolFvoHCLieq3i2ODbYFUoBiDjDFQp07nmsE5WQ1bZJgwrsZs&_nc_ohc=CS5ESo99fg0Q7kNvwFUyKA-&_nc_oc=AdrW2bDHfHDfbfzMW-yxyQR4em4o_LWcb5-_EBOuH9Ixc17E3O9LC5F9wd4oOPesNRB9oXX_G08UitEQhIDWR5wr&_nc_zt=23&_nc_ht=scontent.fdvo2-1.fna&_nc_ss=7b2a8&oh=03_Q7cD6gHsZcoGeqFJy2UnuT6JyORjtorp6UefOnINAXO_YGoObg&oe=6AEAA878"
 },
 {
 id: 5,
 name: 'Mark Villanueva',
 gender: 'Male',
 course: 'BS Information Technology',
 year: 3,
 age: 45,
 img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Mark_A._Villar_dpwh_portrait.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
 },
 {
 id: 6,
 name: 'Sofia Mendoza',
 gender: 'Female',
 course: 'BS Information Technology',
 year: 3, 
 age: 10,
 img: "https://assets-starmagic.abs-cbn.com/wp-content/uploads/2025/11/12100936/6-8-scaled.jpg"
 },
 {
 id: 7,
 name: 'Daniel Bautista',
 gender: 'Male',
 course: 'BS Information Technology',
 year: 3,
 age: 26,
 img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqDMGzZOvbYaD0hS5alxLllVbu1RjIULH9BWjfdv7JA&s=10"
 },
 {
 id: 8,
 name: 'Beatrice Navarro',
 gender: 'Female',
 course: 'BS Information Technology',
 year: 3, 
 age: 5,
 img: "https://i.pinimg.com/736x/7c/23/52/7c235299b207afdce2e4a2305b227865.jpg"
 }
];
  
  headerTitleStyle: string = "text-align: center; font-weight: bold; font-family: Poppins; color: white"
  headerLabelStyle: string = "font-size: 8px; color: white; text-align: center; display: block"
  titleStyle:string = "color: black; text-align:center; font-weight: bold; font-family: Poppins";
  imgStyle: string = "width: 170px; height: 170px; overflow: hidden; justify-self: center; padding-bottom: 4px;";
  eligibilityStyle: string = "font-size: 10px; text-align: center; display: block; padding-top: 4px";
  infoStyle: string = "font-size: 12px; padding: 5px";
  logoStyle: string = "width: 50px"

  saveInfo():void{
    alert("Student information saved successfully")
  }
}
