import { Component,OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { Platform } from '@ionic/angular';  
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/User.dto';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  navigate!: any;      
 

  constructor(   
    private activatedRoute: ActivatedRoute, 
    private modalController : ModalController,
    private platform: Platform,
    private router: Router,
    private UserService: UserService ,
    
  ) {   
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params);
      const idUser = params['id'];
      this.UserService.findOne(idUser).subscribe((user: User) => {
        this.navigate = user;

      });
    });

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   
  deconexion() {
    
     
        localStorage.clear();
        this.router.navigateByUrl('/login');

    
  }
  initializeApp() {  
    this.platform.ready().then(() => {  
    });  
  } 

 
  async presentModal() {
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}


// -----------
